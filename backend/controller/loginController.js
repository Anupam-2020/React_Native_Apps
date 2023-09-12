const express = require('express');
const AppSchema = require('../model/AppSchema');
const bcrypt = require('bcryptjs');

const router = express();

router.post('/login', async(req, resp, next) => {
    const userCheckInDatabase = await AppSchema.findOne({
        userName: req.body.username
    });

    if(userCheckInDatabase) {
        const passwordDecrypt = userCheckInDatabase.password;
        const passwordCheck = await bcrypt.compare(req.body.password, passwordDecrypt);
        // console.log(passwordCheck);
        if(passwordCheck) {
            return resp.status(201).json({
                userName: userCheckInDatabase.userName, 
                list: userCheckInDatabase.list
            });
        }
        return resp.status(422).json({error: 'User not found'});
    }
    return resp.status(422).json({error: 'User not found'});
})

router.post('/', async (req, resp, next) => {
    // const data = req.body;
    const user = await AppSchema.findOne({userName: req.body.username})
    if(user) {
        return resp.status(422).json({error: 'User already exists'});
    }

    try {
        const db = new AppSchema({
            userName: req.body.username,
            password: req.body.password,
            isLoggedIn: req.body.isLoggedIn,
            priceOfPlan: req.body.price,
            planName: req.body.name
        })
        const loginData = await db.save()
    } catch(err) {
        return resp.status(401).json({error: err})
    }
    
    return resp.status(201).json({message: 'User registered successfully.'});
});

router.post('/updateList', async(req, resp, next) => {
    const movieList = await AppSchema.updateOne({
        userName: req.body.username}, 
        {$push: {list: req.body.movieDetails
    }})

    const user = await AppSchema.findOne({userName: req.body.username}, {list: 1})
    // console.log(user);
    resp.status(201).json({list: user})
})

router.post('/removeFromList', async(req, resp, next) => {
    const movieDetails = await AppSchema.updateOne({
        userName: req.body.username}, 
        {$pull: {list: {id: req.body.movieId
    }}})

    const user = await AppSchema.findOne({userName: req.body.username}, {list: 1})
    resp.status(201).json({list: user})
})

module.exports = {router};