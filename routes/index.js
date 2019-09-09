var express = require('express');
var router = express.Router();

var userController = require('../controller/UserController');

router.use('/test',userController);

module.exports = router;
