const Feedback = require("./feedbackLib");

const getAllFeedbacks = (req, res) => {
  const feedbacks = Feedback.getAll();

  res.json(feedbacks);
};

const createFeedback = (req, res) => {
  const { sender, message, rating, platform } = req.body;

  if (!sender || !message || !platform || rating < 1 || rating > 5) {
    return res.status(400).json({
      message: "Invalid feedback data",
    });
  }

  const newFeedback = Feedback.addOne(
    sender,
    message,
    rating,
    platform
  );

  res.status(201).json(newFeedback);
};

const getFeedbackById = (req, res) => {
  const feedbackId = req.params.feedbackId;

  const feedback = Feedback.findById(feedbackId);

  if (feedback) {
    res.json(feedback);
  } else {
    res.status(404).json({
      message: "Feedback not found",
    });
  }
};

const updateFeedback = (req, res) => {
  const feedbackId = req.params.feedbackId;

  const updatedFeedback = Feedback.update(
    feedbackId,
    req.body
  );

  if (updatedFeedback) {
    res.json(updatedFeedback);
  } else {
    res.status(404).json({
      message: "Feedback not found",
    });
  }
};

const deleteFeedback = (req, res) => {
  const feedbackId = req.params.feedbackId;

  const isDeleted = Feedback.deleteOne(feedbackId);

  if (isDeleted) {
    res.status(204).send();
  } else {
    res.status(404).json({
      message: "Feedback not found",
    });
  }
};

module.exports = {
  getAllFeedbacks,
  createFeedback,
  getFeedbackById,
  updateFeedback,
  deleteFeedback,
};