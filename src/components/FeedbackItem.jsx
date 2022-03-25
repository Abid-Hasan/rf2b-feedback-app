import React, { useContext } from "react";
import PropTypes from "prop-types";
import Card from "./shared/Card";
import { FaTimes, FaEdit } from "react-icons/fa";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackItem = ({ item }) => {
  const { handleDelete, handleEdit } = useContext(FeedbackContext);

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <div onClick={() => handleEdit(item)} className="edit">
        <FaEdit color="purple" />
      </div>
      <div onClick={() => handleDelete(item.id)} className="close">
        <FaTimes color="purple" />
      </div>
      <div className="text-display">{item.text}</div>
    </Card>
  );
};

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
