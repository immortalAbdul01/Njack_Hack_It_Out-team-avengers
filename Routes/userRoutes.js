const userController = require('./../Controllers/userController')
const express = require('express')
const router = express.Router()
router.post('/signIn', userController.signIn)
router.post('/login', userController.login)
module.exports = router