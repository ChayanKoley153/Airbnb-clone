const express = require('express');
const userRouter = express.Router(); // Create a new router instance

const userController = require('../controllers/user.controller'); // Import signUp controller


userRouter.post("/signup", userController.signUp);
userRouter.post("/signin", userController.login); 

module.exports = userRouter;



