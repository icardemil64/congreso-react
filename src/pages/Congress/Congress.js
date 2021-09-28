import { useState } from "react";
import styled from "styled-components";

import Wrapper from "../../components/UI/Wrapper/Wrapper";
import Builder from "../../components/Builder/Builder";
import Sidebar from "../../components/UI/Sidebar/Sidebar";
import Button from "../../components/UI/Button/Button";
import Setup from "../../components/Setup/Setup";

/**
 * [!] Averiguar porque no funciona el estilo en producción.
 */
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;

const Congress = () => {
  const [modalIsShown, setModalIsShown] = useState(false);

  const showModalHandler = () => {
    setModalIsShown(true);
  };

  const hideModalHandler = () => {
    setModalIsShown(false);
  };
  return (
    <Container>
      <Wrapper>
        <Builder />
        <Sidebar>
          <Button text="Crear 🗳️" onClick={showModalHandler} />
        </Sidebar>
      </Wrapper>
      {modalIsShown && <Setup onClose={hideModalHandler} />}
    </Container>
  );
};

export default Congress;
