import React from "react";
import "./Navbar.css"; // Import CSS file for styling
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const cityNames = [
  "Delhi",
  "Gurgaon",
  "Jaipur",
  "Jaisalmer",
  "Jodhpur",
  "Manali",
  "Mumbai",
  "Noida",
  "Pune",
  "Shimla",
];

const Navbar = () => {
  // Map the city names to options for the dropdown
  const cityOptions = cityNames.map((city, index) => (
    <option key={index} value={city}>
      {city}
    </option>
  ));
  const navigate = useNavigate();

  const [selectedCity, setSelectedCity] = useState(""); // State to manage selected city
  const [filtersApplied, setFiltersApplied] = useState(false); // State for filter status

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  const applyFilters = () => {
    if (selectedCity) {
      // Redirect to the FilteredDataPage component with the selected city parameter
      navigate(`/filtered-data/${selectedCity}`);
    } else {
      // Handle if no city is selected (you can display an error message or handle it as needed)
      console.log("Please select a city!");
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="navbar-brand-name">
          <Link to="/" className="custom-link">
            Roaming Radar
          </Link>
        </span>{" "}
      </div>
      <div className="navbar-controls">
        {/* Dropdown for city selection */}
        <select onChange={handleCityChange} className="city-dropdown">
          <option value="">Select a city</option>
          {cityOptions}
        </select>
        {/* Filter button */}
        <button className="filter-button" onClick={applyFilters}>
          Filters
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
