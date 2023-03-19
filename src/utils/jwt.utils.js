require('dotenv').config();
const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET || 'secret';

function createToken (payload) {
	const options = { expiresIn: '1h', algorithm: 'HS256'	};

	const token = jwt.sign(payload, secretKey, options);

	return token;
}

function validateToken (token) {
	const result = jwt.verify(token, secretKey);

	return result;
}

module.exports = {
	createToken,
	validateToken,
};