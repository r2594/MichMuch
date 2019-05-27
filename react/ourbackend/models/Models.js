var sql = require('./connectdb');

var Films = function(data){
    this.id = data.id;
}

Films.getAllFilms = function(result){
    sql.query('Select * from movies', function(err, res, fields){
        if(err) throw err;
            result(null, res);
    });
};

module.exports = Films;