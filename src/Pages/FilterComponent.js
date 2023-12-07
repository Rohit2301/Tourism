// FilterComponent.js

import React from "react";
import "./FilterComponent.css"; // Import CSS file for styling

const FilterComponent = ({ tags, cities }) => {
  return (
    <div className="filter-container">
      <h2>Filter Tourist Places</h2>
      <form className="filter-form">
        <div className="form-group">
          <label htmlFor="tag">Tag:</label>
          <select id="tag" name="tag">
            <option value="">Select Tag</option>
            {/* Map over tags and generate options */}
            {tags.map((tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="city">Location/City:</label>
          <select id="city" name="city">
            <option value="">Select City</option>
            {/* Map over cities and generate options */}
            {cities.map((city) => (
              <option key={city.id} value={city.id}>
                {city.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="distance">Distance:</label>
          <select id="distance" name="distance">
            <option value="">Select Distance</option>
            <option value="closest">Closest</option>
            <option value="farthest">Farthest</option>
          </select>
        </div>

        <button type="submit">Apply Filter</button>
      </form>
    </div>
  );
};

export default FilterComponent;
