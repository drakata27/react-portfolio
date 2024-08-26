import styles from './About.module.css'
import { getImageUrl } from '../../utils'

const About = () => {
  return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src={getImageUrl("about/aboutImage.png")} alt="Me with a laptop" className={styles.aboutImage}/>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img 
                        src={getImageUrl("about/learnerIcon.png")} alt="learner icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Enthusiastic Learner</h3>
                        <p>
                            I have a deep passion for technology, constantly seeking opportunities
                            to learn new programming languages and tools.
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/collabIcon.png")} alt="collaborative icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Collaborative Spirit</h3>
                        <p>
                            I thrive in collaborative environments where I can contribute my problem-solving skills and learn from others.
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/impactIcon.png")} alt="Impact icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Eager to Make an Impact</h3>
                        <p>I am excited to apply my growing skills to real-world projects and make a meaningful impact.</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default About