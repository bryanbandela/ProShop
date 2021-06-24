import express from 'express';
import {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  getMyOrders,
} from '../controllers/orderController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').post(protect, addOrderItems);
router.route('/myorders').get(protect, getMyOrders);
router.route('/:id').get(protect, getOrderById); //whenever you have :id put it at the bottom otherwise other links will be taken as ids
router.route('/:id/pay').put(protect, updateOrderToPaid); //remember the put method : used for updating

export default router;
