var express = require('express');
var router = express.Router();
var cors = require('cors');
const mysql = require('mysql');

// const app = express();

const SELECT_ALL_FILMS_QUERY = ' SELECT * FROM films';

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'admin',
	database: 'rootreact'
});

connection.connect(err => {
	if(err){
		return err;
	}
});

router.use(cors());

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
