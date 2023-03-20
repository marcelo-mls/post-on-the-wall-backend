const UserModel = require('../models/user.model');
const PostModel = require('../models/post.model');
const mongoose = require('mongoose');
const connectToMongo = require('./mongoConnection');
const {createHash}= require('../utils/md5.utils');

const seedUsers = [
	{
		'_id': '6417541a95c2f13e4c8a7e42',
		'name': 'Bruce Wayne',
		'initials': 'BW',
		'email': 'bruce.wayne@waynecorp.com',
		'encryptedPassword': createHash('batman')
	},
	{
		'_id': '641754db95c2f13e4c8a7e45',
		'name': 'Tyler Durden',
		'initials': 'TD',
		'email': 'project-mayhem@figthclub.com',
		'encryptedPassword': createHash('fincher')
	},
	{
		'_id': '6417c165549061868e973d7e',
		'name': 'Hermione Granger',
		'initials': 'HG',
		'email': 'hermione@hogwarts.com',
		'encryptedPassword': createHash('alohomora')
	},
	{
		'_id': '6417b8969bd230f92f80f126',
		'name': 'Homer Simpson',
		'initials': 'HS',
		'email': 'homer@simpsons.com',
		'encryptedPassword': createHash('password')
	},
];

const seedPosts = [
	{
		'post': 'I want you to remember, Clark. In all the years to come, in your most private moments, I want you to remember, my hand, at your throat, I want you to remember, the one man who beat you.',
		'user': '6417541a95c2f13e4c8a7e42'
	},
	{
		'post': 'It\'s leviOsa, not levioSA!',
		'user': '6417c165549061868e973d7e'
	},
	{
		'post': 'We buy things we don\'t need with money we don\'t have to impress people we don\'t like.',
		'user': '641754db95c2f13e4c8a7e45'
	},
	{
		'post': 'Just because you\'ve got the emotional range of a teaspoon doesn\'t mean we all have.',
		'user': '6417c165549061868e973d7e'
	},
	{
		'post': 'If something\'s hard to do, then it\'s not worth doing',
		'user': '6417b8969bd230f92f80f126'
	},
];

async function seedDB () {
	try {
		await UserModel.deleteMany({});
		await UserModel.insertMany(seedUsers);
		console.info('MongoDB: User seeds successfully created!');

		await PostModel.deleteMany({});
		await PostModel.insertMany(seedPosts);
		console.info('MongoDB: Posts seeds successfully created!');
	} catch (error) {
		console.error('Error while trying to seed\n', error);
	}
}

connectToMongo();

seedDB()
	.then(() => mongoose.connection.close())
	.then(() => console.info('MongoDB: Disconnected!'));

