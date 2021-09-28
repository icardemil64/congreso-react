import { useContext } from "react";
import styled from "styled-components";

import { GridContext } from "../../context/GridProvider";

import Dot from "../Dot/Dot";

const GridStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(15, 1fr);
  grid-gap: 0.2em;
  width: 30%;
`;

const Grid = () => {
  const { congressList } = useContext(GridContext);

  return (
    <GridStyle>
      {congressList.map((e, index) => (
        <Dot key={index} dotColor={e.color} pacto={e.pacto} />
      ))}
    </GridStyle>
  );
};

export default Grid;
