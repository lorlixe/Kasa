import React, { useEffect, useState } from "react";
import Caroussel from "../components/Caroussel";
import Tag from "../components/Tag";
import "../style/FicheLogement.css";
import { Icon } from "@iconify/react";
import Dropdown from "../components/Dropdown";
import axios from "axios";
import { useParams } from "react-router-dom";
import List from "../components/List";

const FicheLogement = () => {
  const params = useParams();
  const [dataArray, setDataArray] = useState([]);
  const [OneData, setOneData] = useState([]);
  const itemToShow = params.id;

  useEffect(() => {
    axios
      .get("/alldata.json")
      .then((res) => {
        if (dataArray.length === 0) {
          setDataArray(res.data);
        }
        const x = dataArray.filter((item) => item.id === itemToShow);
        setOneData(x);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dataArray]);

  console.log(OneData);
  return (
    <div>
      {OneData.length > 0 && (
        <div>
          <Caroussel data={OneData[0]} />

          <div className="FirstSection">
            <div className="FicheInformation">
              <h1 className="FicheTilte">{OneData[0].title}</h1>
              <p>{OneData[0].location}</p>
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
                <Icon icon="typcn:star" />
                <Icon icon="typcn:star" />
                <Icon icon="typcn:star" />
                <Icon icon="typcn:star" />
                <Icon icon="typcn:star" />
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

export default FicheLogement;
