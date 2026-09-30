import { site } from '../data/site.js'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer id="contacto" className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div>
          <p className={styles.name}>{site.name}</p>
          <p className={styles.role}>{site.role}</p>
        </div>
        <ul className={styles.links}>
          <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
          {site.social.map((s) => (
            <li key={s.label}><a href={s.href} target="_blank" rel="noreferrer">{s.label}</a></li>
          ))}
        </ul>
      </div>
      <div className={`container ${styles.copy}`}>
        © {new Date().getFullYear()} {site.name}. Todos los derechos reservados.
      </div>
    </footer>
  )
}
