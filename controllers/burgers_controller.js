const express = require('express');

const router = express.Router();

const burger = require('../models/burger.js');

router.get('/', (req,res) => {
    burger.selectAll((data) => {
        const hbsObject = {
            burgers: data,
        };
        console.log('hbsObject', hbsObject);
        res.render('index', hbsObject);
    });
});

router.post('/api/burgers', (req, res) => {
    burger.insertOne(['name', 'devoured'],[req.body.name, req.body.devoured], (result) => {
        res.json({ id: result.insertId});
    });
});

module.exports = router;