const express = require('express')
const bodyParser = require("body-parser");
const config = require("config");
const { enhanceReq } = require("./app/middlewares/mysql");

const routes = require("./app/routes/gourmandRoute");
const app = express();

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: false }));

app.use(enhanceReq(config.get("db")));
app.use("/", routes);
app.use(function(req, res, next) {
    var err = new Error("Not Found");
    err.status = 404;
    next(err);
  });

  // error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.send(res.locals.message);
  });
  
module.exports = app;