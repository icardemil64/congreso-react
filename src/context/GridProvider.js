import React, { useState } from "react";
export const GridContext = React.createContext();

const GridProvider = (props) => {
  const [congressList, setCongressList] = useState([]);
  const [objectKeys, setObjetctsKeys] = useState([]);
  return (
    <GridContext.Provider
      value={{ congressList, setCongressList, objectKeys, setObjetctsKeys }}
    >
      {props.children}
    </GridContext.Provider>
  );
};

export default GridProvider;
