import express from 'express';
import {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getMyOrders,
  getOrders,
} from '../controllers/orderController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').post(protect, addOrderItems).get(protect, admin, getOrders);
router.route('/myorders').get(protect, getMyOrders);
router.route('/:id').get(protect, getOrderById); //whenever you have :id put it at the bottom otherwise other links will be taken as ids
router.route('/:id/pay').put(protect, updateOrderToPaid); //remember the put method : used for updating
router.route('/:id/deliver').put(protect, admin, updateOrderToDelivered); //remember the put method : used for updating

export default router;
