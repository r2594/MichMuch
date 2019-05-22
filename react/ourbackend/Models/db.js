
const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'admin',
	database: 'cinema'
});

connection.connect(err => {
	if(err){
		return err;
	}
});

