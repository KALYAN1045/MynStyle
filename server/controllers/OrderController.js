import OrderModel from "../models/orderModel.js";

// Get all unposted orders for a user
export const getUnpostedOrders = async (req, res) => {
  const { userId } = req.params;

  try {
    const orders = await OrderModel.find({ userId, posted: false });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createOrder = async (req, res) => {
  const { userId, items, orderLink } = req.body;

  try {
    const newOrder = new OrderModel({
      userId,
      items,
      orderLink,
      posted: false,
    });

    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
