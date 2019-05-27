var contact_controller = require('../Controllers/ControllerContact');
var Contacts = require('../Models/ModelContact');

var express = require('express');
var router = express.Router();

//get data using expess router AND a method defined in the Controller
router.get('/', contact_controller.displayallcontacts);

//export router to app.js
module.exports = router;
