import styles from '../styles/ProjectDetail.module.scss'
import { useParams, Link } from 'react-router-dom'
import projects from '../data/projects'

function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <main className={styles.notFound}>
        <p>Projet introuvable.</p>
        <Link to="/">Retour à l'accueil</Link>
      </main>
    )
  }

  return (
    <main className={styles.detail}>
      <Link to="/#projets" className={styles.back}>
        ← Retour aux projets
      </Link>

      <div className={styles.header}>
        <span className={styles.tag}>Projet</span>
        <h1>{project.title}</h1>
        <p className={styles.desc}>{project.description}</p>

        <div className={styles.stack}>
          {project.stack.map((tech) => (
            <span key={tech} className={styles.tech}>
              {tech}
            </span>
          ))}
        </div>

        <div className={styles.links}>
          
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className={styles.btnPrimary}
          >
            Voir le site live ↗
          </a>

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

      <img
        src={project.image}
        alt={`Aperçu du projet ${project.title}`}
        className={styles.img}
      />

      <div className={styles.content}>
        <div className={styles.block}>
          <h2>Contexte</h2>
          <p>{project.context}</p>
        </div>

        <div className={styles.block}>
          <h2>Mon rôle</h2>
          <p>{project.role}</p>
        </div>

        <div className={styles.block}>
          <h2>Défi principal</h2>
          <p>{project.challenge}</p>
        </div>
      </div>
    </main>
  )
}

export default ProjectDetail