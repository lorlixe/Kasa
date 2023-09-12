import React, { useEffect, useState } from "react";
import Slideshow from "../components/Slideshow";
import Tag from "../components/Tag";
import "../style/Accomodation.css";
import { Icon } from "@iconify/react";
import Dropdown from "../components/Dropdown";
import axios from "axios";
import { useParams } from "react-router-dom";
import List from "../components/List";
import { useNavigate } from "react-router-dom";

const Accomodation = () => {
  const params = useParams();
  const [OneData, setOneData] = useState("");
  const itemToShow = params.id;
  const OrangeStar = [];
  const GrayStar = [];
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("/alldata.json")
      .then(({ data }) => {
        const findData = data.find((item) => item.id === itemToShow);
        if (findData) {
          setOneData(findData);
        } else {
          navigate("/error");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [itemToShow, navigate]);

  if (OneData) {
    const star = parseInt(OneData.rating, 10);
    for (let i = 0; i < star; i++) {
      OrangeStar.push("*");
    }
    for (let i = 0; i < 5 - OrangeStar.length; i++) {
      GrayStar.push("*");
    }
  }
  return (
    <div>
      {OneData && (
        <div>
          <Slideshow data={OneData} />
          <div className="FirstSection">
            <div className="FicheInformation">
              <h1 className="FicheTilte">{OneData.title}</h1>
              <h2 className="SubTilte">{OneData.location}</h2>
              <div className="tag-section">
                {OneData.tags.map((i, index) => (
                  <Tag info={i} key={index} />
                ))}
              </div>
            </div>
            <div className="Profil">
              <div className="NameAndPicture">
                <p className="Name">{OneData.host.name}</p>
                <img
                  className="ProfilPicture"
                  src={OneData.host.picture}
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
              <Dropdown title="Description" description={OneData.description} />
            </div>
            <div className="Drop">
              <List title="Équipements" equipments={OneData.equipments} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Accomodation;
