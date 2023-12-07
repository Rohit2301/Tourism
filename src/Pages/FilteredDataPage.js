import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import data from "./csvData.json";
import "./LandingPage.css";

const ITEMS_PER_PAGE = 16; // Number of items to display per page

const FilteredDataPage = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [displayedItems, setDisplayedItems] = useState(ITEMS_PER_PAGE);

  const navigate = useNavigate();
  const { selectedCity } = useParams(); // Get the selectedCity parameter from the URL

  // Function to filter data by selected city
  const filterDataByCity = (selectedCity) => {
    const filteredData = data.filter((item) => {
      let city = item.country.toLowerCase();

      // Check if the city contains a comma
      if (city.includes(",")) {
        city = city.split(",")[0].toLowerCase();
      } else {
        city = city.toLowerCase();
      }

      return city === selectedCity.toLowerCase();
    });

    return filteredData;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (selectedCity) {
          const filtered = filterDataByCity(selectedCity);
          setFilteredData(filtered);
        } else {
          navigate("/");
        }
      } catch (error) {
        console.error("Error fetching or filtering data:", error);
      }
    };

    fetchData(); // Fetch data when component mounts or selectedCity changes
  }, [selectedCity]); // Re-run effect when selectedCity changes

  const handleShowMore = () => {
    setDisplayedItems(
      (prevDisplayedItems) => prevDisplayedItems + ITEMS_PER_PAGE
    );
  };

  return (
    <div>
      <h1 style={{ marginTop: "3rem" }}>Filtered Data for {selectedCity}</h1>
      <ul>
        <div className="cities-container">
          {filteredData.slice(0, displayedItems).map((item, index) => (
            <div className="city-card">
              <div className="city-card-content">
                <img src={item.image_source} alt={item.name} />
                <div className="city-info">
                  <h2>{item.name}</h2>
                  <div className="ratings-and-info">
                    <p className="rating">{item.rating}</p>
                    <p className="location">
                      {item.address_1}, <br />
                      {item.address_2}, <br />
                      {item.country}
                    </p>
                    <p className="reviews">Reviews: {item.reviews_count}</p>
                    <p className="tags">Tags: {item.tags}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {displayedItems < filteredData.length && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                marginBottom: "2rem",
              }}
            >
              <button onClick={handleShowMore} className="show-more-btn">
                Show More
              </button>
            </div>
          )}
        </div>
      </ul>
    </div>
  );
};

export default FilteredDataPage;
