import express from "express";
import Feedback from "../models/FeedbackModel.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { title, description, category } = req.body;
    if (!title || !description || !category) {
      return res.status(400).json({ error: "All fields are required" });
    }
    const feedback = await Feedback.create({ title, description, category });
    res.status(201).json(feedback);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const { sort = "newest", category, q } = req.query;
    let query = {};

    if (category) query.category = category;
    if (q) query.title = { $regex: q, $options: "i" };

    let sortOrder = sort === "oldest" ? { createdAt: 1 } : { createdAt: -1 };
    const feedbacks = await Feedback.find(query).sort(sortOrder);
    res.json(feedbacks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;