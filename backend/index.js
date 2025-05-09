const express = require('express');
const cors = require('cors');   
const env = require('dotenv').config();
const mongoose = require('mongoose'); // Import mongoose for MongoDB connection

const app = express();
const port = process.env.PORT || 3000; // Use PORT from .env or default to 3000
app.use(cors());  
app.use(express.json()); // Middleware to parse JSON requests
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded requests


const db = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Connected Successfully");
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
    }
};

db();

app.get("/", (req, res) => {    
    res.send("Hello World!"); 
});

const userRouter = require("./routes/user.route.js"); 
app.use("/api/user", userRouter); 


app.listen(port, () => { 
    console.log(`Server is running on http://localhost:${port}`);
})