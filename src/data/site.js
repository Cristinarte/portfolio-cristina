// Datos generales del sitio. Edita aquí textos, enlaces y navegación.
import retrato from '../assets/hero/retrato.png'
export const site = {
  name: 'Cristina Ruiz',
  initials: 'CR',
  role: 'Desarrolladora Frontend & Diseñadora Digital',
  intro:
    'Diseño y construyo interfaces claras, rápidas y cuidadas al detalle. Me muevo entre el código y el diseño para dar forma a productos digitales con criterio visual.',
  // Separa los párrafos con una línea en blanco (\n\n)
  about:
    'Desarrollo productos digitales con una combinación de código, diseño y criterio visual. Trabajo principalmente con React, TypeScript y JavaScript, creando experiencias frontend que no solo funcionan bien, sino que también se sienten cuidadas, claras y coherentes.\n\nMe gusta convertir ideas en productos reales, resolver problemas complejos y llevar cada proyecto hasta un resultado sólido. Soy resolutiva, detallista y muy curiosa técnicamente, y esa mezcla entre desarrollo y diseño es lo que define mi forma de trabajar.',
  tech: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
  // Imagen del retrato: sustitúyela por src/assets/retrato.jpg e impórtala aquí.
  heroImage: retrato,
  email: 'cristinarte369@gmail.com',
  social: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/cristina-ruiz-hern%C3%A1ndez-01251916a/' },
  ],

}

// Cada enlace apunta a una sección de la home (id) — ver pages/Home.jsx
export const navLinks = [
  { label: 'Inicio', hash: 'inicio' },
  { label: 'Proyectos', hash: 'proyectos' },
  { label: 'Diseño gráfico', hash: 'diseno-grafico' },
  { label: 'Dibujos', hash: 'dibujos' },
  { label: 'Sobre mí', hash: 'sobre-mi' },
  { label: 'Contacto', hash: 'contacto' },
]
