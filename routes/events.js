const express = require('express');
const router = express.Router()



router.get('/', (req, res) => {
    res.send('events router workingggg')
})

module.exports = router