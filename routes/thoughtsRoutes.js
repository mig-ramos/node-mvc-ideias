const express = require('express')
const router = express.Router()
// controller
const ThoughtController =  require('../controllers/ThoughtController')

router.get('/', ThoughtController.showThoughts)

module.exports = router