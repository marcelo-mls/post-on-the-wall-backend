const express = require('express');
const cors = require('cors');
const userRouter = require('./routers/user.router');
const postRouter = require('./routers/post.router');

const app = express();

app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use(postRouter);

module.exports = app;