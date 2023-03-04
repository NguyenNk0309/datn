const express = require('express')
const UserController = require('../controllers/user.controller')

const router = express.Router()

router.post('/signIn', UserController.signIn)
router.get('/checkSignIn', UserController.checkSignIn)
router.post('/create', UserController.createUser)
router.get('/*', UserController.index)

module.exports = router
