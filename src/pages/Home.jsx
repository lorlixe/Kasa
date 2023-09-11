import axios from "axios";
import Property from "../components/Property";
import { useEffect, useState } from "react";

function App() {
  const [property, setproperty] = useState([]);
  useEffect(() => {
    axios
      .get("/alldata.json")
      .then((res) => {
        setproperty(res.data);
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
      </div>
      <div className="grille">
        {property.map((i, index) => (
          <Property info={i} key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
