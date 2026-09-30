import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { site, navLinks } from '../data/site.js'
import ScrollProgress from './ScrollProgress.jsx'
import styles from './Header.module.css'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const { pathname } = useLocation()
  const close = () => setOpen(false)

  // Resalta el enlace de la sección visible (solo en la home).
  useEffect(() => {
    if (pathname !== '/') return setActive('')
    let raf = 0
    const update = () => {
      raf = 0
      const line = window.innerHeight * 0.35
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4
      let current = navLinks[0].hash
      for (const { hash } of navLinks) {
        const el = document.getElementById(hash)
        if (el && el.getBoundingClientRect().top <= line) current = hash
      }
      setActive(atBottom ? navLinks[navLinks.length - 1].hash : current)
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [pathname])

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link to="/" className={styles.logo} onClick={close} aria-label="Inicio">
          {site.initials}<span>.</span>
        </Link>

        <button
          className={styles.toggle}
          aria-expanded={open}
          aria-controls="main-nav"
          aria-label="Abrir menú"
          onClick={() => setOpen((o) => !o)}
        >
          <span /><span />
        </button>

        <nav id="main-nav" className={`${styles.nav} ${open ? styles.open : ''}`}>
          {navLinks.map((l) => (
            <Link key={l.hash} to={`/#${l.hash}`} onClick={close} className={active === l.hash ? styles.active : ''}>
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
      <ScrollProgress />
    </header>
  )
}
