const express = require('express');
const adminRouter = express.Router();

const adminController = require('../controllers/admin.controller.js');


adminRouter.post("/signup", adminController.addAdmin );
adminRouter.post("/login", adminController.login );



module.exports = adminRouter;