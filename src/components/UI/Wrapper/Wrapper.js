import styled from "styled-components";

const WrapperContainer = styled.div`
  width: 50%;
  height: 70vh;
  border: 3px dashed #cecdca;
  display: grid;
  grid-template-columns: 7fr 3.5fr;
`;

const Wrapper = (props) => {
  return <WrapperContainer>{props.children}</WrapperContainer>;
};

export default Wrapper;
