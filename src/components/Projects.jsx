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
            
            <img
              src={project.images[0]}
              alt={`Aperçu du projet ${project.title}`}
              className={styles.img}
            />

            <div className={styles.overlay}>
              <h3 className={styles.overlayTitle}>
                {project.title}
              </h3>

              <p className={styles.overlayDesc}>
                {project.description}
              </p>

              <div className={styles.tags}>
                {project.stack.map((tech) => (
                  <span key={tech} className={styles.tech}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className={styles.footer}>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.btnPrimary}
                >
                  Voir le projet
                </a>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.btnSecondary}
                  >
                    GitHub
                  </a>
                )}
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects