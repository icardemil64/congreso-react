import image from "../../assets/image.png";
import styles from "./Hero.module.css";
import Footer from "../../components/UI/Footer/Footer";
import ButtonLink from "../../components/UI/Button/ButtonLink";

const Hero = () => {
  return (
    <div className={styles.container}>
      <img
        loading="lazy"
        className={styles.image}
        src={image}
        alt="Logo congress builder"
      />
      <h1>¡Proyecta tu propio parlamento!</h1>
      <ButtonLink
        url="/builder"
        text="Comenzar"
        color="#222323"
        textColor="#ffffff"
      />
      <Footer />
    </div>
  );
};

export default Hero;
