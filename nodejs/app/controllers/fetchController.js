const fetchModel = require('../models/fetchModel')

const getAllPlace = (req, res, next) => {
    req.mysql.getConnection().then(connection => {
        fetchModel.fetchPlaces(connection)
        .then((places) => res.send(places))
        .catch(e => {
            console.error(e)
            res.status(400).end()
        })
    })
}

const getMenuByPlace = (req, res, next) => {
    req.mysql.getConnection().then(connection => {
        fetchModel.fetchMenu(connection, req.params.placeId)
        .then((menu) => res.send(menu))
        .catch(e => {
            console.error(e)
            res.status(400).end()
        })                    
    })
}

const getReviewsByPlace = (req, res, next) => {
    req.mysql.getConnection().then(connection => {
        fetchModel.fetchReviewsByPlace(connection, req.params.placeId)
        .then((reviews) => res.send(reviews))
        .catch(e => {
            console.error(e)
            res.status(400).end()
        })
    })
}

module.exports = {
    getAllPlace,
    getMenuByPlace,
    getReviewsByPlace
}