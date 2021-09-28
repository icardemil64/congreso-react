import { useState } from "react";

import { motion } from "framer-motion";
import styles from "./Congress.module.css";

import Wrapper from "../../components/UI/Wrapper/Wrapper";
import PageTransition from "../../utils/PageTransition";
import Builder from "../../components/Builder/Builder";
import Sidebar from "../../components/UI/Sidebar/Sidebar";
import Button from "../../components/UI/Button/Button";
import Setup from "../../components/Setup/Setup";

const Congress = () => {
  const [modalIsShown, setModalIsShown] = useState(false);

  const showModalHandler = () => {
    setModalIsShown(true);
  };

  const hideModalHandler = () => {
    setModalIsShown(false);
  };
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={PageTransition}
      className={styles.containerCongress}
    >
      <Wrapper>
        <Builder />
        <Sidebar>
          <Button text="Crear 🗳️" onClick={showModalHandler} />
        </Sidebar>
      </Wrapper>
      {modalIsShown && <Setup onClose={hideModalHandler} />}
    </motion.div>
  );
};

export default Congress;
