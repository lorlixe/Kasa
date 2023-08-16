import React, { useEffect, useState } from "react";
import "../style/Carrousel.css";
import { Icon } from "@iconify/react";

const Slideshow = (props) => {
  const [countCaroussel, setCountCaroussel] = useState(0);
  const ArrayPicture = props.data.pictures;
  const [showArrowRigth, setShowArrowRigth] = useState(true);
  const [showArrowLeft, setShowArrowLeft] = useState(false);

  function Rigth() {
    if (countCaroussel < ArrayPicture.length - 1) {
      setCountCaroussel(countCaroussel + 1);
      setShowArrowLeft(true);
    } else {
      setShowArrowRigth(false);
    }
    console.log(countCaroussel);
  }

  function Left() {
    if (countCaroussel > 0) {
      setCountCaroussel(countCaroussel - 1);
      setShowArrowRigth(true);
    } else {
      setShowArrowLeft(false);
    }
    console.log(countCaroussel);
  }

  return (
    <div className="SectionCarrousel">
      <div className="Carrousel">
        {showArrowLeft && (
          <Icon
            className="CarrouselArrow"
            icon="gridicons:arrow-right"
            rotate={2}
            onClick={Left}
          />
        )}

        <img
          className="imgCaroussel"
          src={props.data.pictures[countCaroussel]}
          alt={props.data.title}
        />
        {showArrowRigth && (
          <Icon
            className="CarrouselArrow"
            icon="gridicons:arrow-right"
            onClick={Rigth}
          />
        )}
      </div>
    </div>
  );
};

export default Slideshow;
