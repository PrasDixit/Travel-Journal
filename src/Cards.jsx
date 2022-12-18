import React from "react";

const Cards = (props) => {
  return (
    <>
      <div className="card">
        <div className="image">
          <img src={props.imageUrl} alt="Img" />
        </div>
        <div className="travel-details">
          <div className="location">
            <h3>
              <i className="fa-solid fa-location-dot"></i>
              {props.location}
            </h3>
            <a href={props.googleMapsUrl} target="_blank" rel="noreferrer">
              View on Google Maps
            </a>
          </div>
          <div className="location-details">
            <h2>{props.title}</h2>
            <p className="travel-date">
              {props.startDate} - {props.endDate}
            </p>
            <p className="desc">{props.description}</p>
          </div>
        </div>
      </div>
      <hr className="line" />
    </>
  );
};

export default Cards;
