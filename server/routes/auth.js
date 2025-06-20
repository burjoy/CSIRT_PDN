const express = require('express');
const route = express.Router();
const {authController} = require('../controller/AuthController');

route.post('/', authController);

module.exports = route;