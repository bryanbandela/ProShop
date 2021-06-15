import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import colors from 'colors';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import productRoutes from './routes/productRoutes.js';

dotenv.config();

connectDB();

const app = express();

app.get('/', (req, res) => {
  res.send('API is running');
});

app.use('/api/products', productRoutes); //for anything that goes to "/api/products" use the file productRoutes

//Define a 404 message
app.use(notFound);

//we wanna handle the error message.
app.use(errorHandler);

const PORT = process.env.PORT;
//process.env.NODE_ENV => this is the mode we're in (it could be development or production)
app.listen(
  PORT,
  console.log(
    `App running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
