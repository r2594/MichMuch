//model require database connection;
var sql = require('./db.js');

//define an object contructor
var Films = function(result){
	this.movie_id = result.body.movie_id;
}

//define object method to be used by controller
Films.getAllfilms = function(result){
	sql.query('SELECT * from movies', function(err,res, fields){
		if(err) throw err;
		result(null, res);
	});
};


Films.getOneFilm = function(result){

	sql.query('SELECT * from movies WHERE movie_name IN("Avengers", "Captain Marvel", "Glass", "Toy Story", "John Wick", "Stars Wars", "Le Roi Lion") ', function(err,res, fields){
		if(err) throw err;
		result(null, res);
	});
};

Films.deletefilm = function(result){


	console.log('cherie, je suis rentre !');

	console.log(result);

	sql.query('DELETE FROM `movies` WHERE '+movie_id+'', function(err, res, fields){
		if(err) throw err;
		result(null, res);
	});
}

//export object to controller
module.exports = Films;