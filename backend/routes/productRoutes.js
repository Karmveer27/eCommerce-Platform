import express from 'express'
//import products from '../data/products.js' // DONT FORGET THE .JS in backend files 

const router = express.Router();

router.get('/', (req,res) => {
    res.json(products); // res.send sends a string response insead
});

router.get('/:id',(req,res) => {
    const id = req.params.id;
    const product = products.find((p) => p._id === id);
    res.json(product);
});

export default router;