import Tippy from "@tippyjs/react";
import styled from "styled-components";

import "tippy.js/dist/tippy.css";

const DotStyle = styled.div`
  height: 1.8em;
  width: 1.8em;
  background-color: ${(props) => props.dotColor || "gray"};
  border-radius: 50%;
  display: inline-block;
`;

const Dot = (props) => {
  const color = props.dotColor;
  const pacto = props.pacto;
  return (
    <Tippy content={<span>{pacto}</span>}>
      <DotStyle dotColor={color} />
    </Tippy>
  );
};

export default Dot;
