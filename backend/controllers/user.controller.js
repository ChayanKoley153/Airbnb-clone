const User = require('../models/User');
const bcrypt = require('bcrypt');


const signUp = async (req, res) => {
    try {
        let { name, email, password } = req.body;

        let existUser = await User.findOne({ email })
        if (existUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        let hashPassword = await bcrypt.hash(password, 10);

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
        console.error("Error during sign up:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
}


const login = async (req, res) => {
    try {
        let { email, password } = req.body;

        let existUser = await User.findOne({ email })
        if (!existUser) {
            return res.status(400).json({ message: "User does not exist" });
        }


        let isMatch = await bcrypt.compare(password, existUser.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        res.status(200).json({
            message: "User signed in successfully",
            user: existUser
        });
    }
    catch (error) {
        console.error("Error during sign in:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
}



module.exports = {
    signUp,
    login
}