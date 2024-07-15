import mongoose from "mongoose";

const trendSchema = new mongoose.Schema({
  name: { type: String, unique: true, required: true },
  shares: { type: Number, default: 1 },
});

const Trend = mongoose.model("Trend", trendSchema);

export default Trend;
