const User = require('../models/user.model'); // Import User model
const bcrypt = require('bcrypt'); // Import bcrypt for password hashing


const signUp = async (req, res) => {
    try {
        let { name, email, password } = req.body; // Destructure request body

        // Check if user already exists
        let existUser = await User.findOne({email}) // Find user by email
        if (existUser) {
            return res.status(400).json({ message: "User already exists" }); // Send error response
        } 
        
        let hashPassword = await bcrypt.hash(password, 10); // Hash password with bcrypt

        let user = await User.create({ 
            name,
            email,
            password: hashPassword, 
        })
        res.status(201).json({ 
            message: "User created successfully",
            user
        });
    } catch (error) {
        console.error("Error during sign up:", error.message); // Log error message
        res.status(500).json({ message: "Internal server error" }); // Send error response
    }
} 


const login = async (req, res) => {
    try {
        let { email, password } = req.body; // Destructure request body

        // Check if user exists
        let existUser = await User.findOne({email}) // Find user by email
        if (!existUser) {
            return res.status(400).json({ message: "User does not exist" }); // Send error response
        }                                   


        // Compare password with hashed password        
        let isMatch = await bcrypt.compare(password, existUser.password); // Compare passwords
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" }); // Send error response
        }
        res.status(200).json({ 
            message: "User signed in successfully",
            user: existUser
        }); 
    }
    catch (error) {
        console.error("Error during sign in:", error.message); // Log error message
        res.status(500).json({ message: "Internal server error" }); // Send error response
    }
}



module.exports = {
    signUp,
    login  
}