import { Link } from 'react-router-dom'
import styles from './ProjectCard.module.css'

// Posiciona el brillo (spotlight) bajo el cursor mediante variables CSS.
function trackPointer(e) {
  const r = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
  e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
}

export default function ProjectCard({ project }) {
  const { slug, title, category, description, image, fit, cardLabel } = project
  return (
    <Link to={`/projects/${slug}`} className={styles.card} onMouseMove={trackPointer}>
      <div className={`${styles.media} ${fit === 'contain' ? styles.contain : ''}`}>
        <img src={image} alt={title} loading="lazy" />
        <span className={styles.open} aria-hidden="true">↗</span>
      </div>
      <div className={styles.body}>
        <span className={styles.category}>{cardLabel || category}</span>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{description}</p>
        <span className={styles.cta}>Ver proyecto <i aria-hidden="true">→</i></span>
      </div>
    </Link>
  )
}
