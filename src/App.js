import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import AboutIconLink from "./components/AboutIconLink";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import AboutPage from "./pages/AboutPage";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const handleAdd = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="container">
                <FeedbackForm handleAdd={handleAdd} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList feedback={feedback} handleDelete={handleDelete} />
              </div>
              <AboutIconLink />
            </>
          }
        ></Route>

        <Route
          path="/about"
          element={
            <>
              <div className="container">
                <AboutPage />
              </div>
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
