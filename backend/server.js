import express from 'express'
import dotenv from 'dotenv'  
dotenv.config();
import connectDB from './config/db.js';


import products from "./data/products.js" // DONT FORGET THE .JS in backend files 


const port = process.env.PORT || 5000;
//const port = 5000;
connectDB();
const app = express();

app.get('/', (req,res) => {
    res.send('API is Runiing')
});

app.get('/api/products', (req,res) => {
    res.json(products); // res.send sends a string response insead
});

app.get('/api/product/:id',(req,res) => {
    const id = req.params.id;
    const product = products.find((p) => p._id === id);
    res.json(product);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
}); //Start listening on the port we declared above

console.log(`Server is running in ${process.env.NODE_ENV} mode and on port ${process.env.PORT}`)




