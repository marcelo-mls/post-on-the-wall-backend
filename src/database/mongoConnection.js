const mongoose = require('mongoose');

async function connectToMongo() {
	mongoose.connect('mongodb://localhost:27017/wall')
		.then(() => console.info('MongoDB successfully connected!'))
		.catch((error) => console.info('Error connecting to MongoDB\n', error));
}

module.exports = connectToMongo;