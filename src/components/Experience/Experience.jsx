import { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styles from "./Experience.module.css";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

const Experience = () => {
  useEffect(() => {
    // Register the ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Create an animation for each historyItem
    gsap.utils.toArray(".historyItem").forEach((item) => {
      gsap.fromTo(
        item,
        {
          opacity: 0,
          y: 50, // Start from 50px down
        },
        {
          opacity: 1,
          y: 0, // End at its original position
          duration: 1,
          stagger: 0.2, // Stagger the animation for each item
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%", // Trigger when the top of the element is at 80% of the viewport height
            end: "top 30%", // End when the top of the element is at 30% of the viewport height
            toggleActions: "play none none none", // Play when in view, no action on reverse, meaning element won't disappear
            markers: false, // Set to true to see scrollTrigger markers
          },
        }
      );
    });
  }, []);

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience & Education</h2>
      <div className={styles.content}>
        <ul className={styles.history}>
          {history.map((historyItem, id) => (
            <li key={id} className={`${styles.historyItem} historyItem`}>
              <img
                src={getImageUrl(historyItem.imageSrc)}
                alt={historyItem.organisation}
              />
              <div className={styles.historyItemDetails}>
                <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                <ul>
                  {historyItem.experiences.map((experience, id) => (
                    <li className={styles.experienceItem} key={id}>
                      {experience}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
