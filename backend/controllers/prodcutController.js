import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';

//@description  Fetch all products
//@route        GET /api/products
//@access       Public
//(because some routes will be Private hence need a token, eg. purchase)
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

//@desc         Fetch all products
//@route        GET /api/products/:id
//@access       Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404); // we set the status code here
    throw new Error('Product not found');
  }
});

export { getProducts, getProductById };
