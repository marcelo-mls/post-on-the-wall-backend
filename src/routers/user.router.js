const express = require('express');
const controller = require('../controllers/user.controller');

const router = express.Router();

router.get('/user', controller.getAllUsers);
router.post('/auth/user', controller.getUserByEmail);
router.post('/user', controller.createUser);
router.delete('/user/:id', controller.deleteUser);

module.exports = router;
