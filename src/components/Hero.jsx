import styles from '../styles/Hero.module.scss'

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <span className={styles.badge}>Disponible · Open to work</span>
        <h1>
          Marie,<br />
          développeuse<br />
          <span className={styles.accent}>frontend.</span>
        </h1>
        <p className={styles.sub}>
          Je crée des interfaces modernes, accessibles et responsive — 
          de la maquette au déploiement. Spécialisée en React et CSS.
        </p>
        <div className={styles.ctas}>
          <a href="#projets" className={styles.btnPrimary}>Voir mes projets ↓</a>
          <a href="/cv.pdf" download className={styles.btnSecondary}>Télécharger le CV</a>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.photo}>M</div>
        <div className={styles.stack}>
          <span>React</span>
          <span>SCSS</span>
          <span>Git</span>
          <span>Figma</span>
        </div>
      </div>
    </section>
  )
}

export default Hero