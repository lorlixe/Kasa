import axios from "axios";
import Location from "../components/Location";
import { useEffect, useState } from "react";

function App() {
  const [logement, setLogement] = useState([]);
  useEffect(() => {
    axios
      .get("/alldata.json")
      .then((res) => {
        setLogement(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <div className="App-header">
        <div className="shadow">
          <h2>Chez vous, partout et ailleurs</h2>
        </div>
      </div>{" "}
      <div className="grille">
        {logement.map((i, index) => (
          <Location info={i} key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
