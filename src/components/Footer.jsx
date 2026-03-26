import styles from '../styles/Footer.module.scss'

function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.logo}>Marie.</span>

      <p className={styles.text}>
        © 2025 · Développé avec React & Vite
      </p>

      <div className={styles.links}>
        
        <a
          href="https://github.com/marieprns"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://linkedin.com/in/votre-profil"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>

      </div>
    </footer>
  )
}

export default Footer