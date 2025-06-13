const adminModel = require('../models/Admin');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const env = require('dotenv').config();

const addAdmin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await adminModel.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: "admin already exists" });
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const newAdmin = await adminModel.create({
            email,
            password: hashPassword,
        });

        return res.status(201).json({
            message: "Admin created successfully",
            newAdmin,
        });


    } catch (error) {
        console.log(error.message);
    }
};


const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const existingUser = await adminModel.findOne({ email });
        if (!existingUser) {
            return res.status(404).json({ message: "Admin does not exist" });
        }

        const isMatch = await bcrypt.compare(password, existingUser.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        const token = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

        return res.status(200).json({
            message: "Admin signed in successfully",
            user: existingUser,
            token,
        });
    } catch (error) {
        console.error("Error during sign in:", error.message);
    }
};


module.exports = {
    addAdmin,
    login
};

