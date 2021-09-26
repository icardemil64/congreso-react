import styled from "styled-components";

const ButtonStyle = styled.a`
  background-color: ${(props) => props.buttonColor || "black"};
  color: ${(props) => props.textColor || "white"};
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
  &:hover {
    background-color: #505558;
  }
`;

const Button = (props) => {
  const text = props.text;
  const color = props.color;
  const textColor = props.textColor;
  return (
    <ButtonStyle buttonColor={color} buttonText={textColor}>
      {text}
    </ButtonStyle>
  );
};

export default Button;
