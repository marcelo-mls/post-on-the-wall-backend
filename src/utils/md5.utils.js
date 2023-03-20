const md5 = require('md5');

function createHash(reqPassword) {
	return md5(reqPassword);
}

function isValidePassword(reqPassword, storagePassword) {
	return (md5(reqPassword) === storagePassword); 
}

module.exports = {
	createHash,
	isValidePassword,
};