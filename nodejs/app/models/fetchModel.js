const fetchPlaces = (connection) => 
    connection.queryAsync(
        `SELECT * from place`
    )

const fetchMenu = (connection, id) => 
    connection.queryAsync(
        `SELECT * from menu WHERE place_id = (?)`,
        [id]
    )

const fetchReviewsByPlace = (connection, placeId) => 
    connection.queryAsync(
        `SELECT * from review where place_id = ?`,
        [placeId]
    )

module.exports = {
    fetchPlaces,
    fetchMenu,
    fetchReviewsByPlace
}