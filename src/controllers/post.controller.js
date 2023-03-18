const PostModel = require('../models/post.model');

async function getPosts(_req, res) {
	const result = await PostModel.find({}, { __v: 0 }).populate('user', { name: 1, initials: 1 });

	res.status(200).json(result);
}

async function createPost(req, res) {
	try {
		const {user, post} = req.body;
		const result = await PostModel.create({user, post});

		res.status(201).json(result);
	} catch (error) {
		console.log(error);
		res.status(500).json({ error });
	}
}

async function deletePost(req, res) {
	const { id } = req.params;
	const result = await PostModel.findByIdAndRemove(id);

	res.status(200).json(result);
}

module.exports = {
	getPosts,
	createPost,
	deletePost,
};