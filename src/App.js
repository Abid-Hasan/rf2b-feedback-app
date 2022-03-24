import { Route, Routes } from "react-router-dom";
import AboutIconLink from "./components/AboutIconLink";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";
import { FeedbackProvider } from "./context/FeedbackContext";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <FeedbackProvider>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="container">
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackList />
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
    </FeedbackProvider>
  );
}

export default App;
