import React, { useEffect, useState } from "react";
import Caroussel from "../../components/Caroussel";
import Tag from "../../components/Tag";
import "../../style/FicheLogement.css";
import { Icon } from "@iconify/react";
import Dropdown from "../../components/Dropdown";
import axios from "axios";
import { useParams } from "react-router-dom";

const FicheLogement = () => {
  const params = useParams();
  const [dataArray, setDataArray] = useState([]);
  const [OneData, setOneData] = useState([]);

  const itemToShow = params.id;

  useEffect(() => {
    async function fetchData() {
      let lalalala = await axios.get("/alldata.json");
      setDataArray(lalalala.data);
      console.log(dataArray);
      // .then((res) => {
      //   setDataArray(res.data);
      //   console.log(dataArray);
      // })
      // .catch((err) => {
      //   console.log(err);
      // });
    }

    fetchData();
    // const result = async () => {
    //   try {
    //     const data = await axios.get("/alldata.json");

    //     setDataArray(data.data);

    //     console.log("mon dataArray", dataArray);
    //     let x = dataArray.filter((item) => item.id === itemToShow);

    //     console.log("ma liste triée", x);
    //     setOneData(x);
    //   } catch (error) {
    //     console.log("ho une erreur !", error);
    //   }
    // };
    // result();
  }, [itemToShow]);

  // console.log(dataArray);

  // console.log(OneData);

  return (
    <div>
      {/* <Caroussel picture={OneData} /> */}
      <div className="FirstSection">
        {/* <div className="FicheInformation">
          <h1 className="FicheTilte">{OneData[0].title}</h1>
          <p>{OneData[0].location}</p>
          {OneData[0].tags.map((i, index) => (
            <Tag info={i} />
          ))}
        </div> */}
        <div className="Profil">
          <div className="NameAndPicture">
            <p className="Name">Alexandre Dumas</p>
            <img
              className="ProfilPicture"
              src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-12.jpg"
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
            description="Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes à pied)."
          />
        </div>
        <div className="Drop">
          <Dropdown
            title="Équipements"
            description="Climatisation Wi-Fi Cuisine Espace de travail Fer à repasser Sèche-cheveux Cintres"
          />
        </div>
      </div>
    </div>
  );
};

export default FicheLogement;
