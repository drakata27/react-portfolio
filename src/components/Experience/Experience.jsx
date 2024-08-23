import styles from "./Experience.module.css"
import history from "../../data/history.json"
import {getImageUrl} from '../../utils'

const Experience = () => {
  return (
    <section className={styles.container} id="experience">
        <h2 className={styles.title}>Experience & Education</h2>
        <div className={styles.content}>
            <ul className={styles.history}>
                {history.map((historyItem, id)=>{
                    return <li key={id} className={styles.historyItem}>
                        <img src={getImageUrl(historyItem.imageSrc)} alt={historyItem.organisation} />
                        <div className={styles.historyItemDetails}>
                            <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                            <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                            <ul>
                                {historyItem.experiences.map((experience, id)=>{
                                    return <li className={styles.experienceItem} key={id}>{experience}</li>
                                })}
                            </ul>
                        </div>
                    </li>
                })}
            </ul>
        </div>
    </section>
  )
}

export default Experience