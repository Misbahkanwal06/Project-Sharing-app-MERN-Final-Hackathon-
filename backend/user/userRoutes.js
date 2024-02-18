
const userController = require('./userController');
const projectController = require("../userprojects/projectController");
const express = require('express');
const userRoutes = express.Router();


userRoutes.post('/signup', userController.signup);
userRoutes.post('/login',userController.signin);
userRoutes.post('/project',projectController.submitProject);


module.exports = userRoutes;
