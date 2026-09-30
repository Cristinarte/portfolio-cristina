import { useEffect, useRef, useState } from 'react'
import styles from './Reveal.module.css'

// Envuelve contenido y lo hace aparecer (fade + subida suave) al entrar en pantalla.
// delay = retraso en ms (útil para escalonar elementos de una lista).
export default function Reveal({ children, delay = 0, as: Tag = 'div', className = '', ...rest }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) return setVisible(true)
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`${styles.reveal} ${visible ? styles.visible : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
