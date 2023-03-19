const PostModel = require('../models/post.model');

async function getPosts(_req, res) {
	const result = await PostModel.find({}, { __v: 0 }).populate('user', { name: 1, initials: 1 });

	if (!result) {
		return res.status(404).json({message: 'data not found'});
	}

	res.status(200).json(result);
}

async function createPost(req, res) {
	try {
		const {user, post} = req.body;

		if (!user || !post) {
			return res.status(400).json({message: 'missing required fields'});
		}

		const result = await PostModel.create({user, post});

		res.status(201).json(result);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
}

async function deletePost(req, res) {
	try {
		const { id } = req.params;

		if (!id) {
			return res.status(400).json({message: 'bad request'});
		}

		const result = await PostModel.findByIdAndRemove(id);

		res.status(200).json(result);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
}

module.exports = {
	getPosts,
	createPost,
	deletePost,
};