//model require database connection;
var sql = require('./db.js');

//define an object contructor
var Comments = function(data){
	this.id = data.id;
}


Comments.postComments = function(req, res){
	sql.query('INSERT INTO movies_comments(movie_comment_description, movie_name, customer_name) VALUES (?,?,?,?)', req.body.movie_comment_description, req.body.movie_name, req.body.customer_name);
//  function(err,res, fields){
// 		if(err) throw err;
// 		result(null, res);
// 	});
};