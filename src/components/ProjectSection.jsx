import { getProjectsByGroup } from '../data/projects.js'
import Reveal from './Reveal.jsx'
import ProjectCard from './ProjectCard.jsx'
import styles from './ProjectSection.module.css'

// Un bloque de proyectos (Web, Diseño gráfico, Dibujos). Recibe un grupo de data/projects.js
export default function ProjectSection({ group }) {
  const items = getProjectsByGroup(group.id)
  return (
    <section id={group.anchor} className={styles.section}>
      <div className="container">
        <Reveal as="header" className={styles.head}>
          <p className="eyebrow">{group.eyebrow}</p>
          <h2 className={styles.title}>{group.title}</h2>
          <p className={styles.desc}>{group.description}</p>
        </Reveal>
        <div className={styles.grid}>
          {items.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 4) * 90}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
