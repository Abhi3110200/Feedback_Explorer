import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true, trim: true },
  category: { type: String, enum: ["Bug", "Feature", "Improvement"], required: true },
  votes: { type: Number, default: 0 },
}, { timestamps: true });

const Feedback = mongoose.model("Feedback", feedbackSchema);
export default Feedback;
