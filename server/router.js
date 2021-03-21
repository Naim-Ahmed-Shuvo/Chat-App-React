const express = require('express');
const router = express.Router();

router.get('/',(req, res) => {
    res.send('Fuck you bruh 😆');
})

module.exports = router;