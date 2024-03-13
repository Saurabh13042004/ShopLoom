import express from 'express'
import products from './data/products.js'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import { notFound, errorHandler } from './middleware/errorHandler.js'
import dotenv from 'dotenv'
dotenv.config()

const port = process.env.PORT;



connectDB(); // Connect to the database

const app = express()

app.get('/', (req, res) => {
    res.send('Server is ready')
})


app.use('/api/products', productRoutes)

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running at ${port}`)
})