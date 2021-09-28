import styled from "styled-components";

const ButtonStyle = styled.button`
  background-color: ${(props) => props.buttoncolor || "white"};
  color: ${(props) => props.textcolor || "black"};
  border-radius: 8px;
  border: 2px solid ${(props) => props.buttoncolor || "black"};
  padding: 0.25rem 1rem;
  width: ${(props) => props.widthbutton || "80%"};
  height: 3rem;
  font-size: 1.1rem;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    color: #505558;
    border: 2px solid #505558;
  }
`;

const Button = (props) => {
  const text = props.text;
  const color = props.color;
  const textColor = props.textColor;
  const width = props.width;
  return (
    <ButtonStyle
      buttoncolor={color}
      textcolor={textColor}
      widthbutton={width}
      onClick={props.onClick}
    >
      {text}
    </ButtonStyle>
  );
};

export default Button;
