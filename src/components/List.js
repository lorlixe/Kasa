import React, { useState } from "react";
import "../style/Dropdown.css";
const List = (data) => {
  const [isOpen, setIsOpen] = useState(false);
  const equipments = data.equipments;
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
        {isOpen && <img className="arrow" src="/arrow.png" alt="arrow-up" />}
        {!isOpen && (
          <img className="arrow" src="/arrow-down.png" alt="arrow-up" />
        )}
      </div>

      {isOpen && (
        <ul className="description">
          {data.equipments.map((i, index) => (
            <li className="equipement">{i}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default List;
