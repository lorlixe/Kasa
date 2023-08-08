import React from "react";
import "../style/Carrousel.css";

const Caroussel = (props) => {
  return (
    <div>
      <div className="Carrousel">
        <img
          className="imgCaroussel"
          src={props.data.pictures[0]}
          alt={props.data.title}
        />
      </div>
    </div>
  );
};

export default Caroussel;
