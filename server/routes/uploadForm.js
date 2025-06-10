const express = require('express');
const route = express.Router();
const { FormController } = require('../controller/FormController');

route.post('/', FormController);

module.exports = route;