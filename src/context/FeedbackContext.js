import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import FeedbackData from "../data/FeedbackData";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(FeedbackData);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const handleAdd = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const handleEdit = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  const handleUpdate = (id, newItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...newItem } : item))
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        handleAdd,
        handleDelete,
        handleEdit,
        handleUpdate,
      }}
    >
      {children}
    </FeedbackContext.Provider> // or, full: value={{ feedback: feedback }}
  );
};

export default FeedbackContext;
