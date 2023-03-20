const UserModel = require('../models/user.model');
const { createToken } = require('../utils/jwt.utils');
const { createHash, isValidePassword } = require('../utils/md5.utils');

async function getAllUsers(_req, res) {
	const result = await UserModel.find({}, { __v: 0, createdAt: 0 });

	if (!result) {
		return res.status(404).json({message: 'data not found'});
	}

	res.status(200).json(result);
}

async function getUserByEmail(req, res) {
	const { email, password } = req.body;

	if (!email || !password) {
		return res.status(400).json({message: 'missing required fields'});
	}

	const result = await UserModel.findOne({'email': email }, { name: 1, _id: 1, encryptedPassword: 1 });

	if (!result) {
		return res.status(404).json({message: 'user not found'});
	}

	if (!isValidePassword(password, result.encryptedPassword)) {
		return res.status(401).json({message: 'unauthorized'});
	}

	const {name, _id} = result;
	const token = createToken({name, _id});

	res.status(200).json({name, _id, token});
}

async function createUser(req, res) {
	try {
		const {name, initials, email, password} = req.body;

		if (!name || !initials || !email || !password) {
			return res.status(400).json({message: 'missing required fields'});
		}

		const hash = createHash(password);

		const result = await UserModel.create({name, initials, email, password, encryptedPassword: hash});

		res.status(201).json(result);

	} catch (error) {
		res.status(500).json({message: error.message });
	}
}

async function deleteUser(req, res) {
	try {
		const { id } = req.params;

		if (!id) {
			return res.status(400).json({message: 'bad request'});
		}

		const result = await UserModel.findByIdAndRemove(id);

		res.status(200).json(result);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
}

module.exports = {
	getUserByEmail,
	createUser,
	getAllUsers,
	deleteUser,
};