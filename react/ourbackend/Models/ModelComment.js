//model require database connection;
var sql = require('./db.js');

//define an object contructor
var Comments = function(data){
	this.id = data.id;
}

//define object method to be used by controller
Comments.getAllComments = function(result){
	sql.query('SELECT * FROM movies_comments NATURAL JOIN customers NATURAL JOIN movies ', function(err,res, fields){
		if(err) throw err;
		result(null, res);
	});

	
};

Comments.postComments = function(req, res){
    sql.query('INSERT INTO movies_comments(movie_comment_description, movie_name, customer_name) VALUES (?,?,?,?)', req.body.movie_comment_description, req.body.movie_name, req.body.customer_name);
}


module.exports = Comments;