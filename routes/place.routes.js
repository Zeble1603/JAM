const router = require("express").Router();
const mongoose = require('mongoose');

const Place = require('../models/Place.model');
const User = require('../models/User.model');

//GET
router.get('/places',(req,res,next)=>{
    Place.find()
    .populate('users')
    .then((allPlace)=>{
        res.json(allPlace)
    })
    .catch(err=>next(err))
})

router.get('/places/:placeId',(req,res,next)=>{
    const {placeId} = req.params
    if (!mongoose.Types.ObjectId.isValid(placeId)) {
        res.status(400).json({ message: 'Specified id is not valid' });
        return;
    }
    Place.findById(placeId)
    .populate('users')
    .then((foundPlace)=>{
        res.json(foundPlace)
    })
    .catch(err=>next(err))
})

//POST --> ADD USERS CASTING WITH USER ID
router.post('/places',(req,res,next)=>{
    const {name, address, photos} = req.body
    Place.create({name, address, photos})
    .then((place)=>{
        return User.findByIdAndUpdate(userId,{$push: { places: place._id }})
    })
    .then(response => res.json(response))
    .catch(err => res.json(err));
})

//PUT
router.put('/places/:placeId',(req,res,next)=>{
    const {placeId} = req.params
    if (!mongoose.Types.ObjectId.isValid(placeId)) {
        res.status(400).json({ message: 'Specified id is not valid' });
        return;
    }
    Place.findByIdAndUpdate(placeId,req.body,{new:true})
    .then(updatedPlace => res.json(updatedPlace))
    .catch((err)=>next(err))
})

//DELETE
router.delete('/places/:placeId',(req,res,next)=>{
    const {placeId} = req.params
    if (!mongoose.Types.ObjectId.isValid(placeId)) {
        res.status(400).json({ message: 'Specified id is not valid' });
        return;
    }
    Place.findByIdAndDelete(placeId)
    .then(() => res.json({message: `Place with id ${placeId} was removed succesfully`}))
    .catch((err)=>next(err))
})


module.exports = router;
