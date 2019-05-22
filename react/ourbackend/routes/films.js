var films_controller = require('../Controllers/ControllerFilms');

var express = require('express');
var router = express.Router();

//get data using expess router AND a method defined in the Controller
router.get('/', films_controller.displayallfilms);

//export router to app.js
module.exports = router;
