const express = require('express')
const SideController = require('../controllers/side.controller')

const router = express.Router()

router.get('/*', SideController.index)

module.exports = router
