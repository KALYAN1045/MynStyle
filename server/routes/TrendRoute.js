import express from "express";
import {
  createOrUpdateTrend,
  getAllTrends,
} from "../controllers/TrendController.js";

const router = express.Router();
router.post("/", createOrUpdateTrend);
router.get("/gettrends", getAllTrends);

export default router;
