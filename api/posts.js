const express = require('express');
const postsRouter = express.Router();
const { getAllPosts } = require('../db');

postsRouter.use((req, res, next) => {
    console.log("A request is being made to /posts");
  
    next();
  });
  
postsRouter.get('/', async (req, res) => {
    console.log("anything")
    try {
         const posts = await getAllPosts();
    console.log('this is users', posts)
    res.send({
      posts
    });
    } catch(error) {
        console.log(error)
    }
   
  });

module.exports = postsRouter;