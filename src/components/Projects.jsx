import styles from '../styles/Projects.module.scss'
import { Link } from 'react-router-dom'
import projects from '../data/projects'

function Projects() {
  return (
    <section className={styles.projects} id="projets">
      <span className={styles.tag}>Projets</span>
      <h2>Mes réalisations</h2>

      <div className={styles.grid}>
        {projects.map((project) => (
          <div key={project.slug} className={styles.card}>
            
            <div className={styles.imgWrapper}>
              <img
                src={project.image}
                alt={`Aperçu du projet ${project.title}`}
                className={styles.img}
              />
            </div>

            <div className={styles.body}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className={styles.tags}>
                {project.stack.map((tech) => (
                  <span key={tech} className={styles.tech}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className={styles.footer}>
                <Link
                  to={`/projet/${project.slug}`}
                  className={styles.btnPrimary}
                >
                  Voir le projet
                </Link>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.btnSecondary}
                >
                  GitHub
                </a>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects