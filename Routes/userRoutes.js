const userController = require('./../Controllers/userController')
const express = require('express')
const router = express.Router()
router.post('/signIn', userController.signIn)
module.exports = router