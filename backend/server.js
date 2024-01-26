import express from 'express'
import products from "./data/products.js" // DONT FORGET THE .JS in backend files 

const port = 5000;
const app = express();

app.get('/', (req,res) => {
    res.send('API is Runiing')
});

app.get('/products', (req,res) => {
    res.json(products); // res.send sends a string response insead
})

app.get('/products/:id',(req,res) => {
    const id = req.params.id;
    const product = products.find((p) => p._id === id);
    res.json(product);
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
}); //Start listening on the port we declared above





