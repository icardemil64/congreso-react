import Papa from "papaparse";
import { useContext } from "react";

import { GridContext } from "../../context/GridProvider";
import { TableInfo } from "../../utils/TableInfo";

import Modal from "../UI/Modal/Modal";
import Button from "../UI/Button/Button";
import Table from "../UI/Table/Table";

import styles from "./Setup.module.css";

const Setup = (props) => {
  const { setCongressList, setObjetctsKeys } = useContext(GridContext);

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
          const keyNames = Object.keys(results.data[0]);
          setObjetctsKeys(keyNames);
          setCongressList(results.data);
        },
      });
      file = null;
      props.onClose();
    } else {
      alert("No hay archivo cargado.");
    }
  };

  return (
    <Modal onClose={props.onClose}>
      <h2>Formato del archivo CSV</h2>
      <div className={styles.wrapper1}>
        <Table content={TableInfo} />
      </div>
      <h2>Subir el archivo</h2>
      <div className={styles.wrapper2}>
        <input type="file" onChange={handleChange} />
        <Button
          onClick={importCSV}
          width="15%"
          text="Cargar"
          color="#222323"
          textColor="#ffffff"
        />
      </div>
    </Modal>
  );
};

export default Setup;
