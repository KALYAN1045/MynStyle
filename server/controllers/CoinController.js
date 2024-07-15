import UserModel from "../models/userModel.js";

export const updateUserCoins = async (req, res) => {
  const { userId, coins } = req.body;

  try {
    const user = await UserModel.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.coins += coins;
    await user.save();

    res.status(200).json({ coins: user.coins });
  } catch (error) {
    res.status(500).json({ message: "Failed to update coins", error });
  }
};

export const getUserCoins = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await UserModel.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ coins: user.coins });
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve coins", error });
  }
};
