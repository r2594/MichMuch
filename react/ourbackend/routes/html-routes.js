var Controllers = require('../controllers/Controllers');

var express = require('express');
var router = express.Router();

router.get('/', Controllers.display_all_films);

module.exports = router;