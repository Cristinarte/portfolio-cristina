import Reveal from '../components/Reveal.jsx'
import Hero from '../components/Hero.jsx'
import ProjectSection from '../components/ProjectSection.jsx'
import { groups } from '../data/projects.js'
import { site } from '../data/site.js'
import styles from './Home.module.css'

export default function Home() {
  return (
    <>
      <Hero />
      {groups.map((g) => <ProjectSection key={g.id} group={g} />)}
      <section id="sobre-mi" className={styles.about}>
        <Reveal className={`container ${styles.inner}`}>
          <p className="eyebrow">Sobre mí</p>
          {site.about.split('\n\n').map((para) => (
            <p key={para} className={styles.text}>{para}</p>
          ))}
        </Reveal>
      </section>
    </>
  )
}
