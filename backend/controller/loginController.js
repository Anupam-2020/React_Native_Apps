const express = require('express');
const AppSchema = require('../model/AppSchema');

const router = express();

router.get('/', async (req, resp, next) => {
    const data = await AppSchema.find()
    resp.send(data)
})

router.post('/', async (req, resp, next) => {
    const data = req.body;
    // console.log(data);

    const db = new AppSchema({
        userName: req.body.username,
        password: req.body.password,
        isLoggedIn: req.body.isLoggedIn,
        priceOfPlan: req.body.price,
        planName: req.body.name
    })
    const loginData = await db.save()

    // console.log(loginData);

    // console.log(req.body);
    resp.json(req.body);
})

module.exports = {router};