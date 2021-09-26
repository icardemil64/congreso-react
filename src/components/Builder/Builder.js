import { useState } from "react";
import Grid from "../../components/Grid/Grid";

import Papa from "papaparse";

const Builder = () => {
  const [congressList, setCongressList] = useState([]);
  let file = null;

  const handleChange = ({ target: { files } }) => {
    file = files[0];
  };

  const importCSV = () => {
    console.log(file, "file");
    if (file !== null) {
      Papa.parse(file, {
        download: true,
        header: true,
        skipEmptyLines: true,
        complete: function (results) {
          setCongressList(results.data);
        },
      });
      file = null;
    } else {
      alert("No hay archivo cargado.");
    }
  };
  return (
    <div>
      <input type="file" onChange={handleChange} />
      <button onClick={importCSV}>Click</button>
      <Grid congressList={congressList} />
    </div>
  );
};

export default Builder;
