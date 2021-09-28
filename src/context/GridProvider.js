import React, { useState } from "react";
export const GridContext = React.createContext();

const GridProvider = (props) => {
  const [congressList, setCongressList] = useState([]);
  return (
    <GridContext.Provider value={{ congressList, setCongressList }}>
      {props.children}
    </GridContext.Provider>
  );
};

export default GridProvider;
