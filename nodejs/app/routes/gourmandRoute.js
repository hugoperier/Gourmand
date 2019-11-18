const express = require('express')
const router = express.Router()
const VerifyUserMiddleWare = require('../middlewares/verifyUser')
const userController = require('../controllers/userController')


/* USERS requests */
router.post("/users", userController.insertUser)

router.post("/token", [
  VerifyUserMiddleWare.validJWTNeeded,
  userController.refresh
])

router.post('/auth', [
  VerifyUserMiddleWare.hasAuthValidFields,
  VerifyUserMiddleWare.isPasswordAndUserMatch,
  userController.login
])

router.post('/verify', [
  VerifyUserMiddleWare.validJWTNeeded,
  userController.verifyEmail
])

module.exports = router;