import React, { useState } from "react";
import "../style/Dropdown.css";
const Dropdow = (data) => {
  const [isOpen, setIsOpen] = useState(false);

  function click() {
    if (isOpen === false) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }

  return (
    <div className="dropdown">
      <div className="title" onClick={click}>
        <h4>{data.title}</h4>
        {isOpen && <img className="arrow" src="./arrow.png" alt="arrow-up" />}
        {!isOpen && (
          <img className="arrow" src="./arrow-down.png" alt="arrow-up" />
        )}
      </div>

      {isOpen && <div className="description">{data.description}</div>}
    </div>
  );
};

export default Dropdow;
