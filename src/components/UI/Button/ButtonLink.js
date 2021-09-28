import styled from "styled-components";
import { Link } from "wouter";

const ButtonStyle = styled(Link)`
  background-color: ${(props) => props.buttoncolor || "black"};
  color: ${(props) => props.textcolor || "white"};
  border-radius: 8px;
  padding: 0.25rem 1rem;
  width: 13rem;
  height: 3rem;
  font-size: 1.1rem;
  cursor: pointer;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  &:hover {
    background-color: #505558;
  }
`;

const ButtonLink = (props) => {
  const text = props.text;
  const color = props.color;
  const textColor = props.textColor;
  const url = props.url;
  return (
    <ButtonStyle buttoncolor={color} buttontext={textColor} href={url}>
      {text}
    </ButtonStyle>
  );
};

export default ButtonLink;
