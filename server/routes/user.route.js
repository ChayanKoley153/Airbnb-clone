const express = require('express');
const userRouter = express.Router(); 

const userController = require('../controllers/user.controller'); 

userRouter.get("/all", userController.getAllUsers);
userRouter.post("/signup", userController.register);
userRouter.post("/login", userController.login); 
userRouter.post("/update/:id", userController.updateUser);
userRouter.post("/delete/:id", userController.deleteUser);

module.exports = userRouter;



