// import styles from "./Skills.module.css"
// import skills from "../../data/skills.json"

// import {getImageUrl} from '../../utils'

// const Skills = () => {
//   return (
//     <section className={styles.container} id='skills'>
//         <h2 className={styles.title}>Skills & Tools</h2>
//         <div className={styles.content}>
//             <div className={styles.skills}>
//                 {skills.map((skill, id)=>{
//                     return <div key={id} className={styles.skill}>
//                         <div className={styles.skillImageContainer}>
//                             <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
//                         </div>
//                         <p>{skill.title}</p>
//                     </div>
//                 })}
//             </div>
//         </div>
//     </section>
//   )
// }

// export default Skills

import { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styles from "./Skills.module.css";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";

const Skills = () => {
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Animate each skill when it enters the viewport
    gsap.utils.toArray(`.${styles.skill}`).forEach((skill) => {
      gsap.fromTo(
        skill,
        {
          opacity: 0, // Start with the element invisible
          y: 40, // Start with the element 50px down
        },
        {
          opacity: 1, // Fade in
          y: 0, // Move to original position
          duration: 1,
          ease: "power2.inOut", // Ease out for smooth animation
          scrollTrigger: {
            trigger: skill,
            start: "top 80%", // Trigger when the top of the skill reaches 80% of the viewport height
            end: "top 30%", // End when the top of the skill reaches 30% of the viewport height
            toggleActions: "play none none none", // Only play when the element comes into view
            markers: false, // Set to true for debug markers (optional)
          },
        }
      );
    });
  }, []);

  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Skills & Tools</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
