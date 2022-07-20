const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment.model');

// Getting all the comments
router.get('/comments',(req,res,next)=>{
    Comment.find()
    .populate('autor')
    .then(allComments => res.json(allComments))
    .catch(err => res.json(err));
})

//Creating a new comment
router.post('/comments', (req, res, next) => {
    const { title, description, userId,rating,photos } = req.body;
  
    Comment.create({ title, description, autor: userId,rating,photos })
      .then(newComment => {
        return User.findByIdAndUpdate(userId, { $push: { comment: newComment._id } } );
      })
      .then(response => res.json(response))
      .catch(err => res.json(err));
  });

  //Modify a comment
  router.put('/comments/:commentId', (req, res, next) => {
    const { commentId } = req.params;
  
    if (!mongoose.Types.ObjectId.isValid(commentId)) {
      res.status(400).json({ message: 'Specified id is not valid' });
      return;
    }
  
    Comment.findByIdAndUpdate(commentId, req.body, { new: true })
      .then((updatedComment) => res.json(updatedComment))
      .catch(error => res.json(error));
  });

  //Delete a comment
  router.delete('/comment/:commentId', (req, res, next) => {
    const { commentId } = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(commentId)) {
      res.status(400).json({ message: 'Specified id is not valid' });
      return;
    }
  
    Comment.findByIdAndDelete(commentId)
      .then(() => res.json({ message: `Project with ${commentId} is removed successfully.` }))
      .catch(error => res.json(error));
  });
  

  module.exports = router;
