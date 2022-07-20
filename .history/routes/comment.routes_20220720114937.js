const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment.model');

GET: ‘http://localhost:5005/api/comments’ → all comments

POST:  ‘http://localhost:5005/api/comments→ create new comment

PUT: ‘http://localhost:5005/api/comments/:commentId → Edite comment

DELETE:  ‘http://localhost:5005/api/comments/:commentId

router.get('/comments',(req,res,next)=>{
    Comment.find()
    .populate('user')
    .then(allComments => res.json(allComments))
    .catch(err => res.json(err));
})
router.post('/comments', (req, res, next) => {
    const { title, description, userId,rating,photos } = req.body;
   
    Comment.create({ title, description, autor: userId,rating,photos })
      .then(newComment => {
        return User.findByIdAndUpdate(userId, { $push: { comment: newComment._id } } );
      })
      .then(response => res.json(response))
      .catch(err => res.json(err));
  });