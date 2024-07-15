import Trend from "../models/trendModel.js";

export const createOrUpdateTrend = async (req, res) => {
  const { name } = req.body;

  try {
    let trend = await Trend.findOne({ name });

    if (trend) {
      trend.shares += 1;
    } else {
      trend = new Trend({ name });
    }

    await trend.save();
    res.status(200).json(trend);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all trends
export const getAllTrends = async (req, res) => {
  try {
    const trends = await Trend.find();
    res.status(200).json(trends);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
