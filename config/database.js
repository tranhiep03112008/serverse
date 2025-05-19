module.exports = {
	'url': process.env.MONGO_URL || 'mongodb://127.0.0.1:27017',
	'options': {
		//'user':   '',
		//'pass':   '',
		'dbName': process.env.MONGO_DBNAME || 'go33_sql', // red
		'useNewUrlParser': true,
		'useUnifiedTopology': true,
		//'autoIndex':       false,
	},
};


