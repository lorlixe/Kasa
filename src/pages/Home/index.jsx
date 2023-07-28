import axios from "axios";
import Location from "../../components/Location";
import { useState } from "react";

function App() {
  const [logement, setLogement] = useState([]);

  //   axios
  //     .get(
  //       "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json"
  //     )
  //     .then(({ data }) => {
  //       setLogement(data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });

  return (
    <div className="App">
      <div className="App-header">
        <div className="shadow">
          <h2>Chez vous, partout et ailleurs</h2>
        </div>
      </div>
      <div className="grille">
        {logement.map((i, index) => {})}
        <Location />
      </div>
    </div>
  );
}

export default App;
