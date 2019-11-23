const express = require('express')
const router = express.Router()
const VerifyUserMiddleWare = require('../middlewares/verifyUser')
const userController = require('../controllers/userController')
const adminController = require('../controllers/adminController')
const fetchController = require('../controllers/fetchController')

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
/**************/
/* ADMIN requests */
router.post('/admin/addplace', [
  /*VerifyUserMiddleWare.validJWTNeeded,*/
  /*VerifyUserMiddleWare.validRightLevel(),*/
  adminController.addPlace
])

router.post('/admin/addmenu', [
  /*VerifyUserMiddleWare.validJWTNeeded,*/
  /*VerifyUserMiddleWare.validRightLevel(),*/
  adminController.addMenu
])

router.delete('/admin/deleteuser', [
  /*VerifyUserMiddleWare.validJWTNeeded,*/
  /*VerifyUserMiddleWare.validRightLevel(),*/
  adminController.deleteUser
])

router.delete('/admin/deletereview', [
  /*VerifyUserMiddleWare.validJWTNeeded,*/
  /*VerifyUserMiddleWare.validRightLevel(),*/
  adminController.deleteReview
])

/***************/
/****FETCHING REQUEST****/

router.get('/places', [
  /*VerifyUserMiddleWare.validJWTNeeded,*/
  fetchController.getAllPlace
])

router.get('/menu/:placeId(\\d+)', [
  /*VerifyUserMiddleWare.validJWTNeeded,*/
  fetchController.getMenuByPlace
])

router.get('/reviews/:placeId(\\d+)', [
  /*VerifyUserMiddleWare.validJWTNeeded,*/
  fetchController.getReviewsByPlace
])

/*********************/

module.exports = router;