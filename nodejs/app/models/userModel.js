const insertUser = (connection, model) =>
    connection.queryAsync(
        `INSERT INTO user_(name_, surname, ku_id, email, password_, email_verified, verification_code, right_id) VALUES(?, ?, ?, ?, ?, ?, ?, 1);`,
        [model.firstName, model.lastName, model.ku_id, model.email, model.password, model.email_verified, model.verification_code, 1]
    )

const getUserByEmail = (connection, email) => 
    connection.queryAsync(
        `SELECT * from user_ where email=?`, 
        [email]
    )

const setUserVerified = (connection, email) => 
    connection.queryAsync(
        `UPDATE \`user_\` set \`email_verified\` = 1 where \`email\` = ?`,
        [email]
    )


module.exports = {
    insertUser,
    getUserByEmail,
    setUserVerified
}