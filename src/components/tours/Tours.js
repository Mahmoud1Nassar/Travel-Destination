import React from "react";
import toursData from "../../data/db.json";
import "../tours/Tours.css";

const Tours = () => {
  return (
    <div>
      {toursData.map((tour) => (
        <div key={tour.id}>
          <h2>{tour.name}</h2>
          <img src={tour.image} alt={tour.name} />
        </div>
      ))}
    </div>
  );
};

export default Tours;