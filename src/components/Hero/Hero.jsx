import React from 'react'

import styles from './Hero.module.css'
import { getImageUrl } from '../../utils';

const Hero = () => {
  return ( 
  <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Aleks</h1>
        <p className={styles.description}>I am a developer with 1 year of experience. Reach out if you would like to learn more!</p>
        <a href="mailto:aleks.draka02@gmail.com" className={styles.contactBtn} >Contact Me</a>
    </div>
    <img src={getImageUrl("hero/heroImage.png")} alt="hero image of me" className={styles.heroImg}/>
    <div className={styles.topBlur}/>
    <div className={styles.bottomBlur}/>
  </section>
  );
}

export default Hero