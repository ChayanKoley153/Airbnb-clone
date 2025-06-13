const express = require('express');
const bookingRouter = express.Router(); 
const bookingController = require('../controllers/booking.controller');
// const checkLogin = require('../middlewares/Auth');
bookingRouter.post("/new", bookingController.newBooking);
bookingRouter.get("/get/:id", bookingController.getBookingById);    
