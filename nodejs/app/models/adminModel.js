const addPlace = (connection, model) => 
    connection.queryAsync(
        `INSERT INTO place(label, type_id, latitude, longitude) VALUES(?,?,?,?);`,
        [model.label, model.typeId, model.latitude, model.longitude]
    )

const addMenu = (connection, model) =>
    connection.queryAsync(
        `INSERT INTO menu(label, price, photo_url, contain_meal, place_id) VALUES(?,?,?,?,?)`,
        [model.label, model.price, model.photoUrl, model.containMeal, model.placeId]
    )

const deleteUser = (connection, model) => 
        connection.queryAsync(
            `UPDATE user_ set is_actif = 0 where email = ?;`,
            [model.email]
        )

const deleteReview = (connection, model) => 
        connection.queryAsync(
            `UPDATE review set is_actif = 0 where review_id = ?;`,
            [model.reviewId]
        )

module.exports = {
    addPlace,
    addMenu,
    deleteReview,
    deleteUser
}