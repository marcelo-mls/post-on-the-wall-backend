const express = require('express');
const controller = require('../controllers/user.controller');

const router = express.Router();

router.get('/users', controller.getAllUsers);
router.get('/user', controller.getUserByEmail);
router.post('/user', controller.createUser);
router.delete('/user/:id', controller.deleteUser);

module.exports = router;