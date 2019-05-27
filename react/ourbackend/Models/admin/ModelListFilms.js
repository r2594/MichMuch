// //model require database connection;
// var sql = require('../db.js');

// //define an object contructor
// var ListMovies = function(data){
// 	this.id = data.id;
// }

// //define object method to be used by controller
// ListMovies.getAllMovies = function(result){
// 	sql.query('SELECT * FROM movies', function(err,res, fields){
// 		if(err) throw err;
// 		result(null, res);
// 	});

	
// };


// module.exports = ListMovies;