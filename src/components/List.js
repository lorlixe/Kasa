import React, { useState } from "react";
import "../style/Dropdown.css";
import "../style/List.css";

const List = (data) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClick, setIsClick] = useState("");
  const [isShow, setIsShow] = useState("");

  function click() {
    if (isOpen === false) {
      setIsOpen(true);
      setIsClick("-cliked");
      setIsShow("show");
    } else {
      setIsOpen(false);
      setIsShow("");
    }
  }

  return (
    <div className="dropdown">
      <div className="title" onClick={click}>
        <h4>{data.title}</h4>
        {!isOpen && (
          <img className={"arrow" + isClick} src="/arrow.png" alt="arrow-up" />
        )}
        {isOpen && (
          <img
            className={"arrow" + isClick}
            src="/arrow-down.png"
            alt="arrow-down"
          />
        )}
      </div>
      <div className={"collapse " + isShow}>
        <ul className="list">
          {data.equipments.map((i, index) => (
            <li className="equipement" key={index}>
              {i}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default List;
