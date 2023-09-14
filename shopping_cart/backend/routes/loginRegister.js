const express = require('express');
const User = require('../models/userSchema');

const router = express.Router();

// router.get('/', (req, resp, next) => {
//     resp.send('Hello')
// });

router.post('/register', async(req, resp) => {
    const body = req.body;
    try {
        const existingUser = await User.findOne({email: body.email})
        if(existingUser) {
            return resp.status(400).send({message: 'User already exist'});
        }
        const newUser = new User({
            name: body.name,
            email: body.email,
            password: body.password
        })

        const user = await newUser.save();
        console.log(user);
        resp.status(200).send({message: 'Email verified successfully'})

    } catch(err) {
        console.log(err);
        return resp.status(400).send({message: "Registration failed"})
    }
});

router.post('/login', async (req, resp, next) => {
    const body = req.body;
    try {
        const userPresent = await User.findOne({email: body.email, password: body.password});
        if(userPresent) {
            return resp.status(200).send({
                message: 'User verified successfully', 
                name: userPresent.name,
                order: userPresent.order,
                createdAt: userPresent.createdAt,
                address: userPresent.addresses
            })
        }
        return resp.status(200).send({error: "User not found"});
    } catch(err) {
        console.log(err);
        return resp.status(400).send({error: 'Login credentials invalid'});
    }
})

module.exports = router;