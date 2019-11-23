const adminModel = require("../models/adminModel")

const deleteUser = (req, res, next) => {
    req.mysql.getConnection().then(connection => {
        adminModel.deleteUser(connection, req.body)
        .then(() => res.end())
        .catch(e => {
            console.error(e)
            res.status(400).end()
        })
    })
}

const deleteReview = (req, res, next) => {
    req.mysql.getConnection().then(connection => {
        adminModel.deleteReview(connection, req.body)
        .then(() => res.end())
        .catch(e => {
            console.error(e)
            res.status(400).end()
        })
    })
}

const addPlace = (req, res, next) => {
    req.mysql.getConnection().then(connection => {
        adminModel.addPlace(connection, req.body)
        .then(() => res.end())
        .catch(e => {
            console.error(e)
            res.status(400).end()
        })
    })
}

const addMenu = (req, res, next) => {
    req.mysql.getConnection().then(connection => {
        adminModel.addMenu(connection, req.body)
        .then(() => res.end())
        .catch(e => {
            console.error(e)
            res.status(400).end()
        })
    })    
}

module.exports = {
    deleteUser,
    addPlace,
    addMenu,
    deleteReview
}