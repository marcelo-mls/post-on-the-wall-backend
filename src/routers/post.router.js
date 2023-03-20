const express = require('express');
const controller = require('../controllers/post.controller');
const middleware = require('../middlewares/auth.middleware');

const router = express.Router();

router.get('/posts', controller.getPosts);
router.post('/posts', middleware.authMiddleware, controller.createPost);
router.delete('/posts/:id', middleware.authMiddleware, controller.deletePost);

module.exports = router;