// LandingPage.js

import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
import "./LandingPage.css"; // Import CSS file for styling

const cities = [
  {
    id: 1,
    name: "Leh-Ladakh, Jammu and Kashmir",
    data: "High-altitude desert; stunning landscapes; Buddhist monasteries.",
    imageUrl: "https://www.holidify.com/images/bgImages/LADAKH.jpg",
  },
  {
    id: 2,
    name: "India Gate, Delhi",
    data: "Iconic war memorial, honoring soldiers; a prominent Delhi landmark.",
    imageUrl:
      "https://www.savaari.com/blog/wp-content/uploads/2023/11/india-gate-india-gate-delhi-tourist-attraction-1v5815e-1.webp",
  },
  {
    id: 3,
    name: "Taj Mahal, Agra",
    data: "Marble mausoleum symbolizing love; UNESCO World Heritage Site.",
    imageUrl:
      "https://cdn.britannica.com/86/170586-050-AB7FEFAE/Taj-Mahal-Agra-India.jpg",
  },
  {
    id: 4,
    name: "Jaipur, Rajasthan",
    data: "Pink city with forts, palaces, and bustling markets.",
    imageUrl:
      "https://m.economictimes.com/thumb/msid-70104165,width-1200,height-900,resizemode-4,imgsize-1445127/jaipur_gettyimages.jpg",
  },
  {
    id: 5,
    name: "Goa",
    data: "Beach paradise, Portuguese heritage, vibrant nightlife, and water sports.",
    imageUrl:
      "https://www.oyorooms.com/travel-guide/wp-content/uploads/2021/07/Goa_Image1-1-1.jpg",
  },
  {
    id: 6,
    name: "Kerala Backwaters",
    data: "Serene houseboat cruises amidst lush green canals and villages.",
    imageUrl:
      "https://www.tripsavvy.com/thmb/UoylMLyzOBPdDp34ForEiJd9m3s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-522478216-5ab12c4e3de4230036949cee.jpg",
  },
  {
    id: 7,
    name: "Mysore, Karnataka",
    data: "Opulent Mysore Palace, vibrant markets, rich cultural heritage.",
    imageUrl:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/4b/5d/c8/caption.jpg?w=700&h=500&s=1&cx=2606&cy=1838&chk=v1_a61182fd4040ed4ecc4e", //Replace with actual image URLs
  },
  {
    id: 8,
    name: "Ajanta and Ellora Caves, Maharashtra:",
    data: "UNESCO sites with ancient rock-cut caves; exquisite sculptures and paintings.",
    imageUrl:
      "https://www.authenticindiatours.com/app/uploads/2022/05/World-Heritage-Sites-in-West-India-Ajanta-Caves.jpg",
  },
  // Add more cities similarly
];

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>RoamingRadar: ExploreTop Spots</h1>
      <div className="cities-container">
        {cities.map((city) => (
          <Link key={city.id} to={`/city/${city.id}`} className="city-card">
            <div className="city-card-content">
              <img src={city.imageUrl} alt={city.name} />
              <div className="city-info">
                <h2>{city.name}</h2>
                <p>{city.data}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
