import { Link } from 'react-router-dom'
import styles from '../styles/Navbar.module.scss'

function Navbar() {
  return (
    <header className={styles.navbar}>
      <Link to="/" className={styles.logo}>Marie.</Link>
      <nav className={styles.links}>
        <a href="#apropos">À propos</a>
        <a href="#projets">Projets</a>
        <a href="#contact">Contact</a>
        <a href="/cv.pdf" download className={styles.cvBtn}>CV ↓</a>
      </nav>
    </header>
  )
}

export default Navbar