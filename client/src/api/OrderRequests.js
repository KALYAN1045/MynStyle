// api/OrderApi.js
import axios from "axios";

export const getUnpostedOrders = (userId) =>
  axios.get(`/orders/${userId}/unposted`);
