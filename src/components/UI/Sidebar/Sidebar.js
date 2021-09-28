import styles from "./Sidebar.module.css";

const Sidebar = (props) => {
  const instrucciones = [
    "El sistema solo admite archivos en formato .csv separado por comas.",
    "Las tres primeras columnas deben contener el ID de la persona, el color y nombre del pacto o partido.",
    "Desde la cuarta columna se puede añadir información libremente.",
    "Archivo de ejemplo en el siguiente enlace.",
  ];
  return (
    <div className={styles.container}>
      <h2>Instrucciones</h2>
      <ul className={styles.styled_list}>
        {instrucciones.map((e, index) => (
          <li key={index}>{e}</li>
        ))}
      </ul>
      {props.children}
    </div>
  );
};

export default Sidebar;
