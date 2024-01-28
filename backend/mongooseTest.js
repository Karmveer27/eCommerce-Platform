import mongoose from "mongoose";
import dotenv from 'dotenv';
import connectDB from "./config/db.js";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";

dotenv.config();
connectDB();


const runTest = async () => {
    try {
        
        await User.deleteMany();

        
        const newUser = new User({
            name: 'Test User',
            email: 'test@example.com',
            password: 'password',
            isAdmin: false
        });

        await newUser.save();

        
        const foundUser = await User.findOne({ email: 'test@example.com' });
        console.log(foundUser);

        
        mongoose.connection.close();
    } catch (error) {
        console.error('Error during test:', error);
        mongoose.connection.close();
    }
};

runTest();
