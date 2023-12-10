import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Navbar from "./Pages/Navbar";
import FilterComponent from "./Pages/FilterComponent";
import "./App.css";
import FilteredDataPage from "./Pages/FilteredDataPage";
import ClusterFilteredPage from "./Pages/ClusterFilteredPage";

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

const touristPlaceTags = ["Tourism", "Hangout", "Adventure"];

const App = () => {
  return (
    <>
      <Router>
        {<Navbar />}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* <Route
            path="/advancedSearch"
            element={
              <FilterComponent tags={touristPlaceTags} cities={cityNames} />
            }
          /> */}
          <Route
            path="filtered-data/:selectedCity"
            element={<FilteredDataPage />}
          />
          <Route path="/:selectedCluster" element={<ClusterFilteredPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
