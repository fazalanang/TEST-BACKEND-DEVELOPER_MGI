//instantiate express module here
const express = require("express")

// Init express router here..
const router = express.Router()

// Get controller here
const {
    getProduk,
} = require('../controllers/soal1')

const {
    getArrayOfObject
} = require('../controllers/soal3')

// Create Route here
router.get('/produk', getProduk)

router.get('/arrayOfObject', getArrayOfObject)

// Export module router here
module.exports = router