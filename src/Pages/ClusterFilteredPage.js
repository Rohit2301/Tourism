// ClusterFilteredPage.js - New page for displaying filtered data by cluster

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import data from "./csvData.json";
import "./LandingPage.css";

const ITEMS_PER_PAGE = 16;

const ClusterFilteredPage = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [displayedItems, setDisplayedItems] = useState(ITEMS_PER_PAGE);

  const navigate = useNavigate();
  const { selectedCluster } = useParams();

  const filterDataByCluster = (selectedCluster) => {
    const filteredData = data.filter((item) => {
      return item.cluster === parseInt(selectedCluster, 10);
    });

    return filteredData;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (selectedCluster) {
          const filtered = filterDataByCluster(selectedCluster);
          setFilteredData(filtered);
        } else {
          navigate("/");
        }
      } catch (error) {
        console.error("Error fetching or filtering data:", error);
      }
    };
    fetchData();
  }, [selectedCluster]);

  const handleShowMore = () => {
    setDisplayedItems(
      (prevDisplayedItems) => prevDisplayedItems + ITEMS_PER_PAGE
    );
  };

  const handleCardClick = (selectedCluster) => {
    navigate(`/${selectedCluster}`); // Redirect to cluster-based route
  };

  return (
    <div>
      <h1 style={{ marginTop: "3rem" }}>Filtered Data </h1>
      <ul>
        <div className="cities-container">
          {filteredData.slice(0, displayedItems).map((item, index) => {
            let cluster = item.cluster;
            return (
              <div
                className="city-card"
                onClick={() => handleCardClick(cluster)}
              >
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
            );
          })}
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

export default ClusterFilteredPage;
