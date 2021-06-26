import path from 'path';
import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import colors from 'colors';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';

dotenv.config();

connectDB();

const app = express();

app.use(express.json()); //this acts liek a middleware. The app will parse every single JSON that are coming in and will make it available in the req.body otherwise req.body will be undefined
// aap.use(express.urlencoded({extended: true})); //extended means how deep do you wanna go into nested object yes or no? if you won't get nested objects then skip this

app.get('/', (req, res) => {
  res.send('API is running');
});

app.use('/api/products', productRoutes); //for anything that goes to "/api/products" use the file productRoutes
app.use('/api/users', userRoutes); //for anything that goes to "/api/users" use the file userRoutes
app.use('/api/orders', orderRoutes); //for anything that goes to "/api/orders" use the file orderRoutes
app.use('/api/upload', uploadRoutes); //for uploads

app.get('/api/config/paypal', (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
);

const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads'))); //this is how you make a folder static(eg. uploads). What static means is that a folder becomes accessable by a user

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
