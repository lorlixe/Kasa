import React, { useState } from "react";
import "../style/Carrousel.css";
import { Icon } from "@iconify/react";

const Slideshow = (props) => {
  const [countCaroussel, setCountCaroussel] = useState(0);

  const ArrayPicture = props.data.pictures;

  function Rigth() {
    if (countCaroussel < ArrayPicture.length - 1) {
      setCountCaroussel(countCaroussel + 1);
    } else {
      setCountCaroussel(0);
    }
  }

  function Left() {
    if (countCaroussel > 0) {
      setCountCaroussel(countCaroussel - 1);
    } else {
      setCountCaroussel(ArrayPicture.length - 1);
    }
  }

  return (
    <div className="SectionCarrousel">
      <div className="Carrousel">
        <div className="Slider_control">
          <Icon
            className="CarrouselArrow"
            icon="tabler:chevron-right"
            rotate={2}
            onClick={Left}
          />
          <Icon
            className="CarrouselArrow"
            icon="tabler:chevron-right"
            onClick={Rigth}
          />
        </div>
        <p className="CarousselPage">
          {countCaroussel + 1}/{ArrayPicture.length}
        </p>
        <img
          className="imgCaroussel"
          src={props.data.pictures[countCaroussel]}
          alt={props.data.title}
        />
      </div>
    </div>
  );
};

export default Slideshow;
