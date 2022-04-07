import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { showsActions } from "./store/tvShows-store";
import ShowsList from "./ShowsList/ShowsList";
import ShowDetails from "./ShowDetails/ShowDetail";
import Header from "./UI/Header";
import "./styles.css";

export default function App() {
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const checkApi = async () => {
      setErrorMessage(null);
      const response = await fetch(
        "https://api.tvmaze.com/schedule/web?date=2020-05-29&country=US"
      );
      if (!response.ok) {
        throw new Error("Something Went Wrong!.....");
      }
      const data = await response.json();
      dispatch(showsActions.setShowData(data));
    };

    try {
      checkApi();
    } catch (error) {
      setErrorMessage(error.message);
    }
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      {errorMessage && <div className="error">{errorMessage}</div>}
      <Routes>
        <Route path="/:name" element={<ShowDetails />} />
        <Route path="/" element={<ShowsList />} />
      </Routes>
    </div>
  );
}
