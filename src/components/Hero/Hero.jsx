import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  useGSAP(() => {
    gsap.to("#hero", {
      opacity: 1,
      delay: 0.2,
    });
  }, []);

  return (
    <section className={styles.container} id="hero">
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Aleks</h1>
        <p className={styles.description}>
          I am a Computer Science at the University of West London, currently
          working at NBCUniversal as a Media Technology Intern
        </p>
        <a href="#contact" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
