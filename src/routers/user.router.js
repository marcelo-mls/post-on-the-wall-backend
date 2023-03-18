const express = require('express');
const controller = require('../controllers/user.controller');

const router = express.Router();

router.get('/users', controller.getAllUsers);
router.get('/user/:id', controller.getUserById);
router.post('/user', controller.createUser);

module.exports = router;