import Button from "../UI/Button/Button";

import image from "../../assets/image.png";
import styles from "./Hero.module.css";
import Footer from "../UI/Footer/Footer";

const Hero = () => {
  return (
    <div className={styles.container}>
      <img
        loading="lazy"
        className={styles.image}
        src={image}
        alt="Logo congress builder"
      />
      <h1>¡Crea y personaliza tus listas de reproducción!</h1>
      <Button text="Comenzar" color="#222323" textColor="#ffffff" />
      <Footer />
    </div>
  );
};

export default Hero;
