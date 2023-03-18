const express = require('express');
const controller = require('../controllers/post.controller');

const router = express.Router();

router.get('/posts', controller.getPosts);
router.post('/posts', controller.createPost);
router.delete('/posts/:id', controller.deletePost);

module.exports = router;