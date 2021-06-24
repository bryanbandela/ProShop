import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

//this is how you add a middleware to a specific route
//in userRoute, add protect as the first argument in the route before getUserProfile
const protect = asyncHandler(async (req, res, next) => {
  let token;

  console.log(req.headers.authorization);

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      //we get the token from authorization but we split it between the space (Bearer akgkdg...) and the argument at [1] is the token. [0] = Bearer
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log(decoded);
      req.user = await User.findById(decoded.id).select('-password'); //except the password
      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error('Not authorized, token failed');
    }
  }

  if (!token) {
    res.status(401); //unauthorized
    throw new Error('Unauthorized, no token');
  }
});

const admin = (req, res, next) => {
  //to make sure the user is registered/exist and is an admin
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error('Not authorized as an admin');
  }
};

export { protect, admin };
