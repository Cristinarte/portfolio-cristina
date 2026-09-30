import { useEffect, useRef } from 'react'
import { site } from '../data/site.js'
import Button from './Button.jsx'
import styles from './Hero.module.css'

export default function Hero() {
  const layer = useRef(null)

  // Parallax suave: la foto se desplaza más despacio que la página.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf = 0
    let current = 0
    const tick = () => {
      const target = Math.min(window.scrollY, 900) * 0.035
      current += (target - current) * 0.08 // inercia: cuanto menor el factor, más suave
      if (layer.current) layer.current.style.transform = `translate3d(0, ${current.toFixed(2)}px, 0)`
      raf = Math.abs(target - current) > 0.05 ? requestAnimationFrame(tick) : 0
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(tick) }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section id="inicio" className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <p className="eyebrow">Portfolio</p>
          <h1 className={styles.name}>{site.name}</h1>
          <p className={styles.role}>{site.role}</p>
          <p className={styles.intro}>{site.intro}</p>

          <div className={styles.actions}>
            <Button to="/#proyectos">Ver proyectos →</Button>
            <Button to="/#contacto" variant="secondary">Contactar</Button>
          </div>

          <ul className={styles.tags}>
            {site.tech.map((t) => <li key={t}>{t}</li>)}
          </ul>
        </div>

        <div className={styles.visual}>
          <div ref={layer} className={styles.parallax}>
            <img src={site.heroImage} alt={`Retrato de ${site.name}`} />
          </div>
        </div>
      </div>
    </section>
  )
}
