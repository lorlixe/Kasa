import React, { useEffect, useState } from "react";
import "../style/Thumb.css";
import { useNavigate } from "react-router-dom";

const Location = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (isOpen === true) {
      navigate(`/Logement/${props.info.id}`);
    }
  }, [isOpen]);

  function click() {
    if (isOpen === false) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }

  return (
    <div>
      <div className="location" onClick={click}>
        <div className="background">
          <img className="img" src={props.info.cover} alt={props.info.title} />
          <p className="ThumTitle">{props.info.title}</p>
        </div>
      </div>
    </div>
  );
};

export default Location;
