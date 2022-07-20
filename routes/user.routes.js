const router = require("express").Router();
const mongoose = require('mongoose');

const Place = require('../models/Place.model');
const User = require('../models/User.model');

//GET
router.get('/users',(req,res,next)=>{
    User.find()
    .then((allUsers)=>{
        res.json(allUsers)
    })
    .catch(err=>next(err))
})

router.get('/users/:userId',(req,res,next)=>{
    const {userId} = req.params
    if (!mongoose.Types.ObjectId.isValid(userId)) {
        res.status(400).json({ message: 'Specified id is not valid' });
        return;
    }
    User.findById(userId)
    .populate('comments')
    .populate('eventsSubscribed')
    .populate('eventsParticipated')
    .populate('eventsNotParticipated')
    .populate('friends')
    .populate('jamsCreated')
    .populate('jamsPassed')
    .populate('places')
    .then((user)=>{
        res.json(user)
    })
    .catch(err=>next(err))
})

//PUT
router.put('/users/:userId',(req,res,next)=>{
    const {userId} = req.params
    if (!mongoose.Types.ObjectId.isValid(userId)) {
        res.status(400).json({ message: 'Specified id is not valid' });
        return;
    }
    User.findByIdAndUpdate(userId,req.body,{new:true})
    .then(updatedUser => res.json(updatedUser))
    .catch((err)=>next(err))
})

//DELETE
router.delete('/user/:userId',(req,res,next)=>{
    const {userId} = req.params
    if (!mongoose.Types.ObjectId.isValid(userId)) {
        res.status(400).json({ message: 'Specified id is not valid' });
        return;
    }
    User.findByIdAndDelete(userId)
    .then(() => res.json({message: `Place with id ${userId} was removed succesfully`}))
    .catch((err)=>next(err))
})

module.exports = router;
