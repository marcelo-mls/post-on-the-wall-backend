const mongoose = require('mongoose');

async function connectToMongo() {
	mongoose.connect('mongodb://127.0.0.1:27017/wall' || 'mongodb://localhost:27017/wall')
		.then(() => console.info('MongoDB: Successfully connected!'))
		.catch((error) => console.info('Error connecting to MongoDB\n', error));
}

module.exports = connectToMongo;