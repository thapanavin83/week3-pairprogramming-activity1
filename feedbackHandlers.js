const Feedback = require("./feedbackLib");

const getAllFeedbacks = (req, res) => {
  const feedbacks = Feedback.getAll();
  res.json(feedbacks);
};

const createFeedback = (req, res) => {
  const { sender, message, rating, platform } = req.body;

  const newFeedback = Feedback.addOne(
    sender,
    message,
    rating,
    platform
  );

  if (newFeedback) {
    res.status(201).json(newFeedback);
  } else {
    res.status(500).json({
      message: "Failed to create feedback",
    });
  }
};

const getFeedbackById = (req, res) => {
  res.json({ message: "Hello from getFeedbackById" });
};

const updateFeedback = (req, res) => {
  res.json({ message: "Hello from updateFeedback" });
};

const deleteFeedback = (req, res) => {
  res.json({ message: "Hello from deleteFeedback" });
};

module.exports = {
  getAllFeedbacks,
  createFeedback,
  getFeedbackById,
  updateFeedback,
  deleteFeedback,
};