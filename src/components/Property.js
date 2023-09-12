import React, { useEffect, useState } from "react";
import "../style/Thumb.css";
import { useNavigate } from "react-router-dom";

const Property = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (isOpen) {
      navigate(`/Logement/${props.info.id}`);
    }
  }, [isOpen, navigate, props.info.id]);

  function click() {
    setIsOpen(isOpen ? false : true);
  }

  return (
    <div>
      <div className="location" onClick={click}>
        <div className="background">
          <img className="img" src={props.info.cover} alt={props.info.title} />
          <div className="ThumbDetail">
            <p className="ThumTitle">{props.info.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
