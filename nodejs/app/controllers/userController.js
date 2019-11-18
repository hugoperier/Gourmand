const userModel = require("../models/userModel");
const crypto = require("crypto");
const jwt = require('jsonwebtoken');
const config = require("config");
const jwtKey = config.get("jwtKey")
const jwtExpirySeconds = config.get("jwtExpirySeconds")
const mailer = require('../services/emailsender')


const verifyEmail = (req, res, next) => {    
    if (req.jwt.email_verified) {
        return (res.status(400).end())
    }    
    if (req.jwt.verification_code === req.body.verification_code) {
        req.mysql.getConnection().then(connection => {
            userModel.setUserVerified(connection, req.jwt.email)
            .then(() => {
                res.end()                
            }).catch(e => {
                res.status(400).end()
            })
        })
    }
    else {        
        res.status(400).end()
    }
}

const refresh = (req, res, next) => {
    console.log(req.jwt)
    var newToken = JSON.parse(JSON.stringify(req.jwt))
    delete newToken.iat
    delete newToken.exp
    console.log(newToken)
    const token = jwt.sign(newToken, jwtKey, {
        algorithm:'HS256',
        expiresIn: jwtExpirySeconds
    })
    res.cookie('token', token, {maxAge: jwtExpirySeconds * 1000})
    res.end()
}

const login = (req, res, next) => {
    const token = jwt.sign(req.body, jwtKey, {
        algorithm:'HS256',
        expiresIn: jwtExpirySeconds
    })        
    res.cookie('token', token, {maxAge: jwtExpirySeconds * 1000})    
    res.send({
        email:req.body.email,
        name: req.body.name,
        ku_id: req.body.ku_id,
        email_verified: req.body.email_verified
    })
}

const insertUser = (req, res, next) => {
    const salt = crypto.randomBytes(16).toString("base64");
    const hash = crypto
    .createHmac("sha512", salt)
    .update(req.body.password)
    .digest("base64");
    req.body.password = salt + "$" + hash;
    req.body.permissionLevel = 1;
    req.body.verification_code = crypto.randomBytes(3).toString('hex');
    req.body.email_verified = false
    req.mysql.getConnection().then(connection => {
        userModel.getUserByEmail(connection, req.body.email).then(exist => {
            if (exist.length !== 0) {
                res.status(400);
                res.send({ success: false, error: "User already exist", payload: {} });
            } else {
                userModel
                .insertUser(connection, req.body)
                .then(() => {
                    mailer.sendVerificationMail(req.body.email, req.body.verification_code)
                    res.send({ succes: true, payload: {} })
                })
                    .catch(e => {
                        e.status = 400;
                        next(e);
                    });
                }
            });
        });
    };
    
    module.exports = {
        insertUser,
        login,
        verifyEmail,
        refresh
    };
    