import express from 'express'
import dotenv from 'dotenv'  
dotenv.config();
import connectDB from './config/db.js';
import productRouter from './routes/productRoutes.js';





const port = process.env.PORT || 5000;
//const port = 5000;
connectDB();
const app = express();

app.get('/', (req,res) => {
    res.send('API is Runiing')
});

app.use('/api/products',productRouter)


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
}); //Start listening on the port we declared above

console.log(`Server is running in ${process.env.NODE_ENV} mode and on port ${process.env.PORT}`)




