import express from 'express'
import products from "./data/products.js" // DONT FORGET THE .JS in backend files 

const port = 5000;
const app = express();

app.get('/', (req,res) => {
    res.send('API is Runiing')
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
}); //Start listening on the port we declared above





