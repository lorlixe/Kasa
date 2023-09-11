import React, { useEffect, useState } from "react";
import Slideshow from "../components/Slideshow";
import Tag from "../components/Tag";
import "../style/accomodation.css";
import { Icon } from "@iconify/react";
import Dropdown from "../components/Dropdown";
import axios from "axios";
import { useParams } from "react-router-dom";
import List from "../components/List";
import { useNavigate } from "react-router-dom";

const Accomodation = () => {
  const params = useParams();
  const [OneData, setOneData] = useState([]);
  const itemToShow = params.id;
  const OrangeStar = [];
  const GrayStar = [];
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("/alldata.json")
      .then(({ data }) => {
        const findData = data.filter((item) => item.id === itemToShow);
        if (findData.length !== 0) {
          setOneData(findData);
        } else {
          navigate("/error");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [itemToShow, navigate]);

  if (OneData.length > 0) {
    const star = parseInt(OneData[0].rating, 10);
    for (let i = 0; i < star; i++) {
      OrangeStar.push("*");
    }
    for (let i = 0; i < 5 - OrangeStar.length; i++) {
      GrayStar.push("*");
    }
  }
  return (
    <div>
      {OneData.length > 0 && (
        <div>
          <Slideshow data={OneData[0]} />
          <div className="FirstSection">
            <div className="FicheInformation">
              <h1 className="FicheTilte">{OneData[0].title}</h1>
              <h2 className="SubTilte">{OneData[0].location}</h2>
              <div className="tag-section">
                {OneData[0].tags.map((i, index) => (
                  <Tag info={i} key={index} />
                ))}
              </div>
            </div>
            <div className="Profil">
              <div className="NameAndPicture">
                <p className="Name">{OneData[0].host.name}</p>
                <img
                  className="ProfilPicture"
                  src={OneData[0].host.picture}
                  alt="cover"
                />
              </div>
              <div className="Star">
                {OrangeStar.map((i, index) => (
                  <Icon key={index} className="OrangeStar" icon="typcn:star" />
                ))}
                {GrayStar.map((i, index) => (
                  <Icon key={index} icon="typcn:star" />
                ))}
              </div>
            </div>
          </div>
          <div className="DropdownSection">
            <div className="Drop">
              <Dropdown
                title="Description"
                description={OneData[0].description}
              />
            </div>
            <div className="Drop">
              <List title="Équipements" equipments={OneData[0].equipments} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Accomodation;
