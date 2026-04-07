import styles from '../styles/NotFound.module.scss'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <main className={styles.notFound}>
      <div className={styles.card}>
        <span className={styles.code}>404</span>
        <h1>Page introuvable</h1>
        <p>Oups ! Cette page n'existe pas ou a été déplacée.</p>
        <Link to="/" className={styles.btn}>
          ← Retour à l'accueil
        </Link>
      </div>
    </main>
  )
}

export default NotFound