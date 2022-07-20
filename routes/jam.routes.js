const router = require("express").Router();
const mongoose = require('mongoose');

const Place = require('../models/Place.model');
const User = require('../models/User.model');
const Jam = require('../models/Jam.model');

//POST
router.post('/jams',(req,res,next)=>{
    const {name, date, description, limit, categories, placeId} = req.body
    Jam.create({name, date, description, categories, limit, place:placeId})
    .then((jam)=>{
        return Place.findByIdAndUpdate(placeId,{$push: { jams: jam._id }})
    })
    .then(response => res.json(response))
    .catch(err=>next(err))
})

//GET --> POPULATE???
router.get('/jams',(req,res,next)=>{
    Jam.find()
    .then(allJams => res.json(allJams))
    .catch(err=>next(err))
})

router.get('/jams/:jamId',(req,res,next)=>{
    const {jamId} = req.params
    if (!mongoose.Types.ObjectId.isValid(jamId)) {
        res.status(400).json({ message: 'Specified id is not valid' });
        return;
    }
    Jam.findById(jamId)
    .then(jam => res.json(jam))
    .catch(err=>next(err))
})

//PUT
router.put('/jams/:jamId',(req,res,next)=>{
    const {jamId} = req.params
    if (!mongoose.Types.ObjectId.isValid(jamId)) {
        res.status(400).json({ message: 'Specified id is not valid' });
        return;
    }
    Jam.findByIdAndUpdate(jamId,req.body,{new:true})
    .then(jam => res.json(jam))
    .catch(err=>next(err))
})

//DELETE
router.delete('/jams/:jamId',(req,res,next)=>{
    const {jamId} = req.params
    if (!mongoose.Types.ObjectId.isValid(jamId)) {
        res.status(400).json({ message: 'Specified id is not valid' });
        return;
    }
    Jam.findByIdAndDelete(jamId)
    .then(() => res.json({message: `Place with id ${jamId} was removed succesfully`}))
    .catch(err=>next(err))
})


module.exports = router;
