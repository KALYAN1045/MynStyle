import express from "express";
import {
  updateUserCoins,
  getUserCoins,
} from "../controllers/CoinController.js";

const router = express.Router();

router.patch("/:userId/updateCoins", updateUserCoins);
router.get("/:userId/getCoins", getUserCoins);

export default router;
