import { useParams } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { useState } from "react";
import "./TourDetails.css";
const tourData = require("../../data/db.json");

function TourDetails() {
  const { id } = useParams();

  const data = tourData.find((item) => item.id === id);
  const { name, info, image, price } = data;
  const [cityDesc, setCityDesc] = useState(false);

  const editDescription = (text, maxLength) => {
    const lastSpaceIndex = text.lastIndexOf(" ", maxLength);
    return text.slice(0, lastSpaceIndex) + " ...";
  };

  const seeMore = () => {
    setCityDesc(!cityDesc);
  };

  return (
    <>
      <Header />
      <div className="tour-details">
        <p>Name : {name}</p>
        <img src={image} />
        <p>Price : {price}</p>
        <p className="description">
          Description : {cityDesc ? info : editDescription(info, 200)}
        </p>
        <button onClick={seeMore} className="toggle-button">
          {cityDesc ? "See Less" : "See More"}
        </button>
      </div>
      <Footer />
    </>
  );
}

export default TourDetails;
