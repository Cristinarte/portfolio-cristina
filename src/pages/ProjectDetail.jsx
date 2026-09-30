import { Link, useParams } from 'react-router-dom'
import { getProjectBySlug } from '../data/projects.js'
import Button from '../components/Button.jsx'
import NotFound from './NotFound.jsx'
import styles from './ProjectDetail.module.css'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)
  if (!project) return <NotFound />

  const { title, category, image, longDescription, video, context, event, film, technique, role, tech, gallery, url } = project

  return (
    <article className={styles.page}>
      <div className="container">
        <Link to="/#proyectos" className={styles.back}>← Volver a proyectos</Link>

        <header className={styles.head}>
          <p className="eyebrow">{category}</p>
          <h1 className={styles.title}>{title}</h1>
        </header>

        <div className={styles.hero}>
          {video ? (
            <video src={video} poster={image} controls playsInline preload="metadata" />
          ) : (
            <img src={image} alt={title} />
          )}
        </div>

        <div className={styles.info}>
          <section>
            <h2 className={styles.label}>Descripción</h2>
            {longDescription.split('\n\n').map((para) => (
              <p key={para} className={styles.text}>{para}</p>
            ))}
          </section>
          {context && (
            <section>
              <h2 className={styles.label}>Contexto</h2>
              <p className={styles.text}>{context}</p>
            </section>
          )}
          {role && (
            <section>
              <h2 className={styles.label}>Mi aportación</h2>
              <p className={styles.text}>{role}</p>
            </section>
          )}
          {film && (
            <section>
              <h2 className={styles.label}>Película de referencia</h2>
              <p className={styles.text}>{film}</p>
            </section>
          )}
          {technique && (
            <section>
              <h2 className={styles.label}>Técnica</h2>
              <p className={styles.text}>{technique}</p>
            </section>
          )}
          {event && (
            <section>
              <h2 className={styles.label}>Evento</h2>
              <p className={styles.text}>{event}</p>
            </section>
          )}
          {tech?.length > 0 && (
            <section>
              <h2 className={styles.label}>Tecnologías</h2>
              <ul className={styles.tags}>{tech.map((t) => <li key={t}>{t}</li>)}</ul>
            </section>
          )}
        </div>

        {gallery?.length > 0 && (
          <section className={styles.gallery} aria-label="Galería">
            {gallery.map((item, i) => {
              const { src, title: caption, description, fit } = typeof item === 'string' ? { src: item } : item
              return (
                <figure key={src} className={styles.figure}>
                  <div className={`${styles.shot} ${fit === 'contain' ? styles.shotContain : ''}`}>
                    <img src={src} alt={caption || `${title} — imagen ${i + 1}`} loading="lazy" />
                  </div>
                  {(caption || description) && (
                    <figcaption>
                      {caption && <strong>{caption}</strong>}
                      {description && <span>{description}</span>}
                    </figcaption>
                  )}
                </figure>
              )
            })}
          </section>
        )}

        <div className={styles.actions}>
          <Button to="/#proyectos" variant="secondary">← Volver a proyectos</Button>
          {url && <Button href={url}>Ver proyecto ↗</Button>}
        </div>
      </div>
    </article>
  )
}
