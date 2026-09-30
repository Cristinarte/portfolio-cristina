import { useEffect, useRef } from 'react'
import styles from './ScrollProgress.module.css'

// Línea fina en color de acento que indica el progreso de scroll de la página.
export default function ScrollProgress() {
  const ref = useRef(null)
  useEffect(() => {
    let raf = 0
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      const p = max > 0 ? window.scrollY / max : 0
      if (ref.current) ref.current.style.transform = `scaleX(${Math.min(1, Math.max(0, p))})`
      raf = 0
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
  }, [])
  return <div ref={ref} className={styles.bar} aria-hidden="true" />
}
