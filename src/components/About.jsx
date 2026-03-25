import styles from '../styles/About.module.scss'

function About() {
  return (
    <section className={styles.about} id="apropos">
      <div className={styles.text}>
        <span className={styles.tag}>À propos</span>
        <h2>Une reconversion guidée par l'humain</h2>
        <p>
          Après plusieurs années dans l'aide à domicile, j'ai choisi de me 
          reconvertir dans le développement web — avec la même conviction : 
          ce qu'on construit doit être utile, clair et accessible à tous.
        </p>
        <p>
          Formée chez OpenClassrooms, je me spécialise en frontend : HTML 
          sémantique, CSS, JavaScript, React et SCSS. J'accorde une attention 
          particulière à l'accessibilité et au responsive, parce qu'une interface 
          bien pensée, c'est une interface que tout le monde peut utiliser.
        </p>
        <p>
          Je recherche un premier poste en CDI pour continuer à progresser 
          au sein d'une équipe — startup, agence, grand groupe ou structure à impact.
        </p>
      </div>
      <div className={styles.right}>
        <div className={styles.photo}>M</div>
        <p className={styles.name}>Marie</p>
        <p className={styles.role}>Développeuse Frontend</p>
      </div>
    </section>
  )
}

export default About