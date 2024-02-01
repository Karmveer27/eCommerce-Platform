import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

const getProduct = asyncHandler (async(req,res) => {
    const products = await Product.find({});
    res.json(products); // res.send sends a string response insead
});

const getProductById = asyncHandler (async(req,res) => {
    const id = req.params.id;
    //console.log(id)
    const product = await Product.findById(id);
    if(product){
        res.json(product);
    }else{
        res.status(404);
        throw new Error('Product not found')
    }
});

export { getProduct,getProductById}
