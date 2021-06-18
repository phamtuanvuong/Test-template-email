var express = require('express');
const { sendMail } = require('../controllers/sendMail');
var router = express.Router();

router.post('/', sendMail);

module.exports = router;
