import { Link } from 'react-router-dom'
import styles from './Button.module.css'

// Botón/enlace reutilizable. `to` = ruta interna, `href` = enlace externo.
export default function Button({ to, href, variant = 'primary', children, ...rest }) {
  const cls = `${styles.btn} ${styles[variant]}`
  if (to) return <Link to={to} className={cls} {...rest}>{children}</Link>
  if (href)
    return <a href={href} className={cls} target="_blank" rel="noreferrer" {...rest}>{children}</a>
  return <button className={cls} {...rest}>{children}</button>
}
