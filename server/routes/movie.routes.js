const express = require('express');
const movieRouter = express.Router();
const movieController = require('../controllers/movie.controller');
// const checkLogin = require('../middlewares/Auth');


movieRouter.post("/add", movieController.addMovie);

module.exports = movieRouter; 
