import express from 'express'
//import products from '../data/products.js' // DONT FORGET THE .JS in backend files 
import asyncHandler from '../middleware/asyncHandler.js';
import Product from '../models/productModel.js'

const router = express.Router();

router.get('/', asyncHandler(async (req,res) => {
    const products = await Product.find({});
    res.json(products); // res.send sends a string response insead
}) );

router.get('/:id', asyncHandler ( async(req,res) => {
    const id = req.params.id;
    console.log(id)
    const product = await Product.findById(id);
    if(product){
        res.json(product);
    }else{
        res.status(404).json({message: 'Product not found'})
    }
    
}));

export default router;