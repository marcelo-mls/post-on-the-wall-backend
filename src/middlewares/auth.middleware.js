const JWT = require('../utils/jwt.utils');

async function authMiddleware (req, res, next) {
	try {
		const { authorization } = req.headers;

		if (!authorization) { 
			return res.status(401).json({message: 'token is required'});
		}

		const result = JWT.validateToken(authorization);

		if (!result) {
			return res.status(401).json({message: 'token is required'});
		}
		
		return next();

	} catch (error) {
		res.status(500).json({message: error.message });
	}
}

module.exports = {
	authMiddleware,
};