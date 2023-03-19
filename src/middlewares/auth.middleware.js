const validateToken = require('../utils/jwt.utils');

async function authMiddleware (req, res, next) {
	try {
		const { authorization } = req.headers;

		if (!authorization) { 
			const error = { status: 404, message: 'token is required' };
			throw error;
		}

		const result = validateToken(authorization);
		return result;

	} catch (error) {
		res.status(500).json({message: error.message });
	}

	next();
}

module.exports = {
	authMiddleware,
};