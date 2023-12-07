import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import FilterComponent from "./Pages/FilterComponent";
import "./App.css";

const cityNames = [
  { id: 1, name: "Delhi" },
  { id: 2, name: "Mumbai" },
  { id: 3, name: "Jaipur" },
  { id: 4, name: "Agra" },
  { id: 5, name: "Goa" },
  { id: 6, name: "Varanasi" },
  { id: 7, name: "Kolkata" },
  { id: 8, name: "Bangalore" },
  { id: 9, name: "Chennai" },
  { id: 10, name: "Hyderabad" },
];

const touristPlaceTags = [
  "Historical",
  "Beach",
  "Cultural",
  "Adventure",
  "Nature",
  "Heritage",
  "Wildlife",
  "Mountains",
  "Religious",
  "Urban",
];

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* <Route
            path="/"
            element={
              <FilterComponent tags={touristPlaceTags} cities={cityNames} />
            }
          /> */}
        </Routes>
      </Router>
    </>
  );
};

export default App;
