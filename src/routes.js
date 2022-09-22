const express = require('express');
const routes = express.Router();
const UserController = require('./controller/userController.js');

const uniqid = require('uniqid');

routes.get('/users', UserController.list);
routes.get('/users/:id', UserController.show);
routes.post('/users', UserController.create);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.delete);
module.exports = routes;