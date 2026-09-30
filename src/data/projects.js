// Fuente única de proyectos. Añade, quita o edita objetos sin tocar componentes.
// - group: 'web' | 'graphic' | 'drawing'  (bloque de la home donde aparece)
// - slug: se usa en la URL /projects/:slug (único, sin espacios)
// - url: opcional; si existe se muestra el botón "Ver proyecto"
// - video (opcional): si existe, sustituye a la imagen grande en la página de detalle
// - image / gallery: URLs temporales; sustitúyelas por imágenes en src/assets

import resultsImg from '../assets/projects/diseño_grafico/10.jpg'
import wdsfImg from '../assets/projects/diseño_grafico/1.png'
import cardsImg from '../assets/projects/diseño_grafico/anverso3.png'
import loginImg from '../assets/projects/diseño_grafico/loginV2.png'
import pulpImg from '../assets/projects/dibujos/IMG_6502.jpg'
import titanicImg from '../assets/projects/dibujos/IMG_6503.jpg'
import felicidadImg from '../assets/projects/dibujos/IMG_6504.jpg'
import schindlerImg from '../assets/projects/dibujos/IMG_6505.jpg'
import cloudboxHome from '../assets/projects/cloudbox/home.png'
import cloudboxLogin from '../assets/projects/cloudbox/login.png'
import cloudboxScroll from '../assets/projects/cloudbox/scroll.png'
import cloudboxVideo from '../assets/projects/cloudbox/cloudbox-video.mp4'
import tradingMain from '../assets/projects/trading/principal.png'
import tradingMt5 from '../assets/projects/trading/mt5.png'
import tradingTelegram from '../assets/projects/trading/telegram.jpg'

const img = (seed, w = 1200, h = 800) => `https://picsum.photos/seed/${seed}/${w}/${h}`

export const groups = [
  {
    id: 'web',
    anchor: 'proyectos',
    eyebrow: '01 — Web / Desarrollo',
    title: 'Web / Desarrollo',
    description: 'Productos y plataformas construidos con código.',
  },
  {
    id: 'graphic',
    anchor: 'diseno-grafico',
    eyebrow: '02 — Diseño gráfico',
    title: 'Diseño gráfico',
    description: 'Identidad, piezas y contenido visual.',
  },
  {
    id: 'drawing',
    anchor: 'dibujos',
    eyebrow: '03 — Dibujos / Ilustración',
    title: 'Dibujos / Ilustración',
    description: 'Trabajo personal a mano y en digital.',
  },
]

export const projects = [
  // ---------- Web / Desarrollo ----------
  {
    slug: 'cloudbox',
    group: 'web',
    title: 'CloudBox',
    category: 'Web / Desarrollo',
    description: 'Aplicación web para guardar, organizar y compartir enlaces en colecciones.',
    longDescription:
      'Proyecto de fin de grado: una aplicación web para gestionar enlaces en un solo lugar, como alternativa a los marcadores del navegador. Permite organizarlos en colecciones, buscarlos por palabras clave y compartirlos con otros usuarios.',
    role: 'Desarrollo completo de la aplicación —backend con Laravel y frontend con React— además del branding, el diseño de la interfaz en Figma y el despliegue.',
    tech: ['React', 'Laravel', 'MySQL', 'Bootstrap', 'SCSS', 'Figma', 'Illustrator', 'Render'],
    url: '',
    image: cloudboxHome,
    video: cloudboxVideo,
    gallery: [cloudboxHome, cloudboxLogin, cloudboxScroll],
  },
  {
    slug: 'conmebol',
    group: 'web',
    title: 'CONMEBOL',
    category: 'Web / Desarrollo',
    description: 'Desarrollo de interfaces para la confederación sudamericana de fútbol.',
    longDescription:
      'Descripción ampliada del proyecto. Explica el problema, la solución y el resultado. Sustituye este texto por el real.',
    role: 'Desarrollo frontend y optimización de rendimiento.',
    tech: ['React', 'JavaScript', 'HTML', 'CSS'],
    url: '',
    image: img('conmebol'),
    gallery: [img('conmebol-1'), img('conmebol-2'), img('conmebol-3')],
  },
  {
    slug: 'wdsf',
    group: 'web',
    title: 'WDSF',
    category: 'Web / Desarrollo',
    description: 'World DanceSport Federation: plataforma web internacional.',
    longDescription:
      'Descripción ampliada del proyecto. Explica el problema, la solución y el resultado. Sustituye este texto por el real.',
    role: 'Desarrollo frontend e integración con APIs.',
    tech: ['React', 'TypeScript', 'CSS'],
    url: '',
    image: img('wdsf'),
    gallery: [img('wdsf-1'), img('wdsf-2'), img('wdsf-3')],
  },
  {
    slug: 'trading-backend',
    group: 'web',
    title: 'Trading Backend',
    category: 'Backend / Algorithmic Trading',
    description:
      'Backend privado para trading algorítmico, automatización, validación de estrategias y gestión de riesgo en entorno FTMO.',
    longDescription:
      'Desarrollo de un backend privado para un sistema de trading algorítmico orientado a operar bajo las condiciones y límites de riesgo de FTMO. El proyecto procesa datos de mercado, ejecuta lógica automatizada, valida estrategias mediante backtesting y gestiona señales, posiciones y riesgo de forma estructurada.\n\nEl sistema está diseñado para comparar el comportamiento histórico con la ejecución en tiempo real, controlar la exposición y supervisar la operativa bajo reglas de riesgo definidas.\n\nPor tratarse de un proyecto privado, no se muestran públicamente la lógica interna de las estrategias, parámetros, arquitectura completa ni reglas de decisión.',
    role: 'Desarrollo del backend, procesamiento de datos de mercado, automatización de señales, backtesting, validación histórica, integración con MT5, gestión de riesgo y sistema de alertas.',
    tech: ['Python', 'MT5', 'MQL5', 'Backend', 'Automation', 'Data Processing', 'Backtesting'],
    url: '',
    image: tradingMain,
    // Elementos de galería: string (solo imagen) u objeto { src, title, description, fit }
    gallery: [
      {
        src: tradingMt5,
        title: 'Live Execution & Monitoring',
        description: 'Supervisión de la operativa, ejecución y comportamiento del sistema en entorno real.',
      },
      {
        src: tradingTelegram,
        title: 'Automated Alerts',
        description:
          'Sistema automático de notificaciones para señales, entradas y eventos operativos generados por el backend.',
        fit: 'contain',
      },
    ],
  },


  // ---------- Diseño gráfico ----------
  // fit (opcional): 'contain' muestra la imagen completa sin recortar (piezas verticales). Por defecto 'cover'.
  {
    slug: 'eyof-bakuriani-results',
    group: 'graphic',
    title: 'EYOF Bakuriani 2025 — Results',
    category: 'Broadcast Graphics / Sports',
    event: 'EYOF Bakuriani 2025',
    description: 'Diseño de gráficos de resultados para pantallas durante el evento.',
    longDescription:
      'Diseño de una tabla de resultados para EYOF Bakuriani 2025, pensada para mostrarse en pantallas durante el evento. Debía presentar de forma clara posiciones, países, banderas, participantes, dorsales y diferencias de tiempo.',
    context:
      'Pieza de diseño de información aplicada a un evento deportivo: los datos debían leerse con rapidez en pantalla mientras la competición estaba en marcha.',
    role: 'Organizar visualmente los datos de la clasificación respetando la identidad gráfica del evento.',
    tech: [],
    url: '',
    image: resultsImg,
    gallery: [],
  },
  {
    slug: 'wdsf-dancesport-festival',
    group: 'graphic',
    title: 'WDSF DanceSport Festival',
    category: 'Social Media / Campaign',
    event: 'WDSF DanceSport Festival 2025',
    description: 'Diseño de campaña y piezas promocionales para redes sociales.',
    longDescription:
      'Pieza promocional para redes sociales del WDSF DanceSport Festival 2025, enfocada en promocionar la venta anticipada de entradas.',
    context: 'Comunicación digital del evento, con el objetivo de impulsar la venta anticipada de entradas.',
    role: 'Desarrollar una pieza gráfica promocional para comunicación digital y redes sociales, adaptada a la identidad del evento.',
    tech: [],
    url: '',
    image: wdsfImg,
    fit: 'contain',
    gallery: [],
  },
  {
    slug: 'eyof-bakuriani-collectible-game',
    group: 'graphic',
    title: 'EYOF Bakuriani — Collectible Game',
    category: 'Graphic Design / Gamification',
    event: 'EYOF Bakuriani 2025',
    description: 'Diseño de cartas coleccionables para una experiencia gamificada durante el evento.',
    longDescription:
      'Diseño de cartas para una dinámica de juego realizada durante EYOF Bakuriani 2025. Las cartas formaban parte de una experiencia en la que los asistentes podían encontrarlas durante el evento.',
    context:
      'Una pieza que combina identidad visual, diseño editorial y gamificación aplicada a una experiencia física dentro del evento.',
    role: 'Diseñar las cartas coleccionables aplicando la identidad visual del evento.',
    tech: [],
    url: '',
    image: cardsImg,
    fit: 'contain',
    gallery: [],
  },
  {
    slug: 'eyof-skopje-login-ui',
    group: 'graphic',
    title: 'EYOF Skopje 2025 — Login UI',
    category: 'UI Design / Web',
    event: 'EYOF Skopje 2025 (European Youth Olympic Festival)',
    description: 'Diseño UI del sistema de acceso de la plataforma digital del evento.',
    longDescription:
      'Diseño visual de la pantalla de acceso/login de la plataforma digital del European Youth Olympic Festival Skopje 2025. Aplica la identidad gráfica del evento al entorno web mediante colores corporativos, patrones gráficos, jerarquía visual, diseño de formulario, botones y accesos sociales.',
    context: 'Pantalla de acceso de la plataforma digital del evento.',
    role: 'Trasladar la identidad visual del evento a una interfaz digital clara, funcional y coherente.',
    tech: [],
    url: '',
    image: loginImg,
    gallery: [],
  },

  // ---------- Dibujos / Ilustración ----------
  // Obras tradicionales. cardLabel = texto de la tarjeta; film/technique = datos del detalle.
  {
    slug: 'pulp-fiction',
    group: 'drawing',
    title: 'Pulp Fiction',
    category: 'Retrato / Cine',
    cardLabel: 'Carboncillo · Grafito',
    film: 'Pulp Fiction',
    technique: 'Carboncillo y grafito',
    description: 'Retrato tradicional inspirado en Pulp Fiction, realizado en carboncillo y grafito.',
    longDescription:
      'Retrato inspirado en el personaje interpretado por Samuel L. Jackson en Pulp Fiction. Forma parte de una serie de retratos inspirados en películas, realizados a mano con carboncillo y grafito.',
    tech: [],
    url: '',
    image: pulpImg,
    gallery: [],
  },
  {
    slug: 'titanic-rose',
    group: 'drawing',
    title: 'Titanic — Rose',
    category: 'Retrato / Cine',
    cardLabel: 'Carboncillo · Grafito',
    film: 'Titanic',
    technique: 'Carboncillo y grafito',
    description: 'Estudio de retrato inspirado en Rose de Titanic, realizado en carboncillo y grafito.',
    longDescription:
      'Retrato inspirado en Rose, personaje de Titanic. Forma parte de una serie de retratos inspirados en películas, realizados a mano con carboncillo y grafito.',
    tech: [],
    url: '',
    image: titanicImg,
    gallery: [],
  },
  {
    slug: 'en-busca-de-la-felicidad',
    group: 'drawing',
    title: 'En busca de la felicidad',
    category: 'Retrato / Cine',
    cardLabel: 'Carboncillo · Grafito',
    film: 'En busca de la felicidad',
    technique: 'Carboncillo y grafito',
    description: 'Retrato tradicional inspirado en la película, trabajado con carboncillo y grafito.',
    longDescription:
      'Retrato inspirado en el personaje protagonista interpretado por Will Smith en En busca de la felicidad. Forma parte de una serie de retratos inspirados en películas, realizados a mano con carboncillo y grafito.',
    tech: [],
    url: '',
    image: felicidadImg,
    gallery: [],
  },
  {
    slug: 'la-lista-de-schindler',
    group: 'drawing',
    title: 'La lista de Schindler',
    category: 'Retrato / Cine',
    cardLabel: 'Carboncillo · Grafito',
    film: 'La lista de Schindler',
    technique: 'Carboncillo y grafito',
    description: 'Interpretación en carboncillo y grafito de una imagen inspirada en La lista de Schindler.',
    longDescription:
      'Dibujo inspirado en La lista de Schindler. Forma parte de una serie de retratos inspirados en películas, realizados a mano con carboncillo y grafito.',
    tech: [],
    url: '',
    image: schindlerImg,
    gallery: [],
  },
]

export const getProjectBySlug = (slug) => projects.find((p) => p.slug === slug)
export const getProjectsByGroup = (groupId) => projects.filter((p) => p.group === groupId)
