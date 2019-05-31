var films_controller = require('../Controllers/ControllerFilms');

var express = require('express');
var router = express.Router();

//get data using expess router AND a method defined in the Controller
router.get('/', films_controller.displayallfilms);
router.get('/', films_controller.displayonefilm);
router.post('/', films_controller.deleteonefilm);

//export router to app.js
module.exports = router;
