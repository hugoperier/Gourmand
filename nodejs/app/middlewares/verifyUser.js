const userModel = require("../models/userModel");
const crypto = require("crypto");
const config = require("config");
const jwt = require('jsonwebtoken');
const jwtKey = config.get("jwtKey")

exports.hasAuthValidFields = (req, res, next) => {
    // Here we have to verify that the email match the format of ku email
    console.log("auth fields: ok")
    return next()
}

exports.validJWTNeeded = (req, res, next) => {
    if (req.headers['authorization']) {
        try {
            const authorization = req.headers['authorization'].split(' ')
            if (authorization[0] != 'Bearer') {
                return res.status(401).send
            } else {
                req.jwt = jwt.verify(authorization[1], jwtKey)
                return next()
            }
        } catch(err) {
            console.error("An error occured while getting JWT")
            return res.status(403).send()
        }
    } else {
        return res.status(401).send()
    }
}

exports.minimumPermissionLevelRequired = (required_permission_level) => {
    return (req, res, next) => {
        let user_permission_level = parseInt(req.jwt.permission_level);
        if (user_permission_level & required_permission_level) {
            return next();
        } else {
            return res.status(403).send();
        }
    };
}

exports.isPasswordAndUserMatch = (req, res, next) => {
    req.mysql.getConnection().then(connection => {
        userModel.getUserByEmail(connection, req.body.email)
        .then(user => {
            if (!user[0]) {
                res.status(404).send({success:false,error:"User does not exist", payload:{} })
            }else {               
                const passwordField = user[0].password_.split('$')
                const salt = passwordField[0]
                const hash = crypto.createHmac('sha512', salt).update(req.body.password).digest("base64");
                if (hash === passwordField[1]) {
                    req.body = {
                        email: user[0].email,
                        permissionLevel: user[0].right_id,
                        provider: 'email',
                        name: user[0].name_ + ' ' + user[0].lastName,
                        ku_id: user[0].ku_id,
                        email_verified: (user[0].email_verified[0] === 1),
                        verification_code: user[0].verification_code
                    };
                    return next()
                } else {
                    return res.status(400).send({success: false, error: "Invalid email or password"})
                }
            }
        })
    })
}