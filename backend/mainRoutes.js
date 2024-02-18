const express = require('express');
const mainRoutes = express.Router();
const userRoutes = require ('./user/userRoutes');

mainRoutes.use('/user',userRoutes);

module.exports = mainRoutes;


