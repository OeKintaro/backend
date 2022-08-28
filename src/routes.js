const express = require('express');
const routes = express.Router();
const connections = require('./database/connections');
const uniqid = require('uniqid');

routes
    .get('/users', async(req, res) => {
        const users = await connections('users').select('*');
        res.json(users);
    
});

routes
    .post('/users', async (req, res) => {
        const {name, email, idade, empresa} = req.body;
        const id = uniqid();
        await connections('users').insert({
            id,
            name,
            email,
            idade,
            empresa
        });
        res.json({id});
        
    });

module.exports = routes;