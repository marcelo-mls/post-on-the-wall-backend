const UserModel = require('../models/user.model');

async function getAllUsers(_req, res) {
	const result = await UserModel.find({}, { __v: 0, createdAt: 0 });

	res.status(200).json(result);
}

async function getUserById(req, res) {
	const { id } = req.params;
	const result = await UserModel.findById(id, { __v: 0, createdAt: 0 });

	res.status(200).json(result);
}

async function createUser(req, res) {
	const {name, initials, email, password} = req.body;
	try {
		const result = await UserModel.create({name, initials, email, password});

		res.status(201).json(result);
	} catch (error) {
		console.log(error);
		res.status(500).json({ error });
	}
}

module.exports = {
	getUserById,
	createUser,
	getAllUsers,
};