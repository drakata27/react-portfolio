import { useState } from 'react'
import styles from './Navbar.module.css'
import {getImageUrl} from '../../utils'

import { FaExternalLinkAlt } from 'react-icons/fa';

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
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
                <li>
                    <a href="https://blog.aleksdraka.online/" 
                        target='blank'
                        rel="noopener noreferrer"
                        >
                            Blog <FaExternalLinkAlt size={17}/>
                    </a>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar