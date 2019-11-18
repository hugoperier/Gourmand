const mysql = require('mysql')
const Promise = require('bluebird')
Promise.promisifyAll(mysql)
Promise.promisifyAll(require('mysql/lib/Connection').prototype)
Promise.promisifyAll(require('mysql/lib/Pool').prototype)

const enhanceReq = config => {
  const _connections = []

  const pool = mysql.createPool(config)
  const execute = (sql, params) => connection =>
    connection.queryAsync(sql, params)

  const getConnection = () =>
    pool
      .getConnectionAsync()
      .then(connection => {
        _connections.push(connection)
        return connection
      })
      .catch(e => {
        console.log(e)
      })

  return (req, res, next) => {
    req.mysql = { getConnection }
    var end = res.end
    res.end = (data, encoding) => {
      while ((c = _connections.pop())) {
        c.release()
      }
      res.end = end
      res.end(data, encoding)
    }
    return next()
  }
}

const createConnection = config => {
  const _connections = []
  const pool = mysql.createPool(config)
  const execute = (sql, params) => connection =>
    connection.queryAsync(sql, params)
  const getConnection = () =>
    pool
      .getConnectionAsync()
      .then(connection => {
        _connections.push(connection)
        return connection
      })
      .catch(e => {
        console.log(e)
      })
  const clearConnection = () => {
    while ((c = _connections.pop())) {
      c.release()
    }
    pool.end()
  }
  return { getConnection, clearConnection }
}

module.exports = {
  enhanceReq,
  createConnection
}
