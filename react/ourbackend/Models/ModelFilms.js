//model require database connection;
var sql = require('./db.js');

//define an object contructor
var Films = function(data){
	this.id = data.id;
}

//define object method to be used by controller
Films.getAllfilms = function(result){
	sql.query('SELECT * from movies', function(err,res, fields){
		if(err) throw err;
		result(null, res);
	});
};

//export object to controller
module.exports = Films;