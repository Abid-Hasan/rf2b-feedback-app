import React, { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackStats = () => {
  const { feedback } = useContext(FeedbackContext);

  // Calculate Average
  let average =
    feedback.reduce((total, current) => {
      return total + current.rating;
    }, 0) / feedback.length;

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Review(s)</h4>
      <h4>
        Average Rating: {average ? average.toFixed(1).replace(/[.,]0$/, "") : 0}
      </h4>
    </div>
  );
};

export default FeedbackStats;
