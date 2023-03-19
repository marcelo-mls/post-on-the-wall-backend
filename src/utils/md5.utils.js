const md5 = require('md5');

function createHash(reqPassword) {
	return md5(reqPassword);
}

function isValidePassword(reqPassword, storagePassword) {
	return reqPassword === md5(storagePassword); 
}

module.exports = {
	createHash,
	isValidePassword,
};