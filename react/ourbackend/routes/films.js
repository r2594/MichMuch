var films_controller = require('../Controllers/ControllerFilms');
var Films = require('../Models/ModelFilms');

var express = require('express');
var router = express.Router();

//get data using expess router AND a method defined in the Controller
router.get('/', films_controller.displayallfilms);
router.get('/', films_controller.displayonefilm);

//export router to app.js
module.exports = router;
