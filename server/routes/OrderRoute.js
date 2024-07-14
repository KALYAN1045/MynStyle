import express from "express";
import {
  getUnpostedOrders,
  createOrder,
} from "../controllers/OrderController.js";

const router = express.Router();

router.post("/", createOrder);
router.get("/:userId/unposted", getUnpostedOrders);

export default router;
