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

const Info = (props) => {
  const titles = props.titles.slice(2);
  const item = props.item;
  return (
    <>
      {titles.map((e, index) => (
        <div key={index}>{`${e.charAt(0).toUpperCase() + e.slice(1)}: ${
          item[e]
        }\n`}</div>
      ))}
    </>
  );
};

const Dot = (props) => {
  const color = props.dotColor;
  return (
    <Tippy content={<Info item={props.item} titles={props.titles} />}>
      <DotStyle dotColor={color} />
    </Tippy>
  );
};

export default Dot;
