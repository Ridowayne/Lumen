const mongoose = require('mongoose');
const feedbackSchema = new mongoose.Schema(
  {
    navigationRatings: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    usefullnessRatings: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    bestFeature: {
      type: String,
    },
    worstFeature: {
      type: String,
    },
    advise: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const Feedback = mongoose.model('Feedback', feedbackSchema);
module.exports = Feedback;
