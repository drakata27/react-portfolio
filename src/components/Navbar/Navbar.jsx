import { useState } from 'react'
import styles from './Navbar.module.css'
import {getImageUrl} from '../../utils'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className={styles.navbar}>
        <a href="/" className={styles.title}>aleksdraka</a>
        <div className={styles.menu}>
            <img 
                className={styles.menuBtn} 
                src={ menuOpen 
                    ? getImageUrl("nav/closeIcon.png") 
                    : getImageUrl("nav/menuIcon.png")
                } 
                alt='menu btn'
                onClick={()=>setMenuOpen(!menuOpen)}
            />
            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                onClick={()=> setMenuOpen(false)}
            >
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#about">Projects</a></li>
                <li><a href="#about">Contact</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar