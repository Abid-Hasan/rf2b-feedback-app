import React from "react";
import PropTypes from "prop-types";

const FeedbackStats = ({ feedback }) => {
  // Calculate Average
  let average =
    feedback.reduce((total, current) => {
      return total + current.rating;
    }, 0) / feedback.length;

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>
        Average Rating: {average ? average.toFixed(1).replace(/[.,]0$/, "") : 0}
      </h4>
    </div>
  );
};

FeedbackStats.propTypes = {
  feedback: PropTypes.array.isRequired,
};

export default FeedbackStats;
