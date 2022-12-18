import React from "react";
import data from "./data";
import Cards from "./Cards";

const Card = () => {
  return (
    <>
      <div className="cards">
        {data &&
          data.map((item) => {
            return <Cards key={item.id} {...item} />;
          })}
      </div>
    </>
  );
};

export default Card;
