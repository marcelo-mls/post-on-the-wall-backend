const mongoose = require('mongoose');

const {Schema, model} = mongoose;

const UserModel = model('user', new Schema({
	name: { type: String, required: true },
	initials: { type: String, required: true },
	email: { type: String, required: true},
	encryptedPassword: { type: String, required: true },
	createdAt: {
		type: Date,
		default: Date.now,
	},
}));

module.exports = UserModel;