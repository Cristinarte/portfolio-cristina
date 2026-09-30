import Button from '../components/Button.jsx'

export default function NotFound() {
  return (
    <div className="container" style={{ padding: '120px var(--gutter)', display: 'grid', gap: 24, justifyItems: 'start' }}>
      <p className="eyebrow">404</p>
      <h1 style={{ fontFamily: 'var(--font-serif)', fontWeight: 300, fontSize: '3rem' }}>Página no encontrada</h1>
      <Button to="/">Volver al inicio</Button>
    </div>
  )
}
