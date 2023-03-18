const mongoose = require('mongoose');

const {Schema, model} = mongoose;

const PostModel = model('post', new Schema({
	post: { type: String, required: true },
	user: { 
		type: Schema.Types.ObjectId,
		required: true,
		ref: 'user',
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
}));

module.exports = PostModel;