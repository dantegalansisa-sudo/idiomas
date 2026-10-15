// ─────────────────────────────────────────────────────────────
//  DATOS DEL CLIENTE — editar aquí teléfono, WhatsApp, dirección.
//  (Valores marcados con PENDIENTE son de ejemplo para la demo.)
// ─────────────────────────────────────────────────────────────
export const SITE = {
  name: 'Academia de Idiomas MT',
  short: 'Academia MT',
  slogan: '#1 en lenguas',
  whatsapp: '18090000000', // PENDIENTE: número real, solo dígitos con código de país
  phone: '+1 (809) 000-0000', // PENDIENTE
  email: 'info@academiadeidiomasmt.com', // PENDIENTE
  city: 'Santo Domingo, República Dominicana', // PENDIENTE: dirección exacta
  mapsUrl: 'https://maps.google.com/?q=Santo+Domingo', // PENDIENTE
  hours: [
    { days: 'Lunes a viernes', time: '8:00 a.m. – 8:00 p.m.' },
    { days: 'Sábados', time: '8:00 a.m. – 2:00 p.m.' },
  ],
  instagram: 'https://instagram.com/', // PENDIENTE
  facebook: 'https://facebook.com/', // PENDIENTE
};

export const waLink = (msg = 'Hola, quiero información sobre los cursos de idiomas.') =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;

export type FlagCode = 'gb' | 'es' | 'fr' | 'pt' | 'de' | 'it';

export interface Language {
  id: string;
  name: string;
  native: string;
  hello: string;
  flag: FlagCode;
  img: string;
  levels: string;
  tagline: string;
  description: string;
  tags: string[];
  learn: string[];
  exams: string;
}

export const LANGUAGES: Language[] = [
  {
    id: 'ingles',
    name: 'Inglés',
    native: 'English',
    hello: 'Hello',
    flag: 'gb',
    img: 'ingles-londres',
    levels: 'A1 – C2',
    tagline: 'El idioma que abre puertas en todo el mundo.',
    description:
      'Domina el idioma de los negocios, la tecnología y los estudios internacionales. Desde tus primeras frases hasta un nivel avanzado para trabajar o estudiar en el extranjero.',
    tags: ['General', 'Negocios', 'Exámenes'],
    learn: [
      'Conversación fluida para el día a día y el trabajo',
      'Inglés de negocios: reuniones, correos y entrevistas',
      'Gramática y vocabulario por niveles del MCER',
      'Pronunciación y comprensión auditiva con material real',
    ],
    exams: 'Preparación TOEFL, IELTS y Cambridge',
  },
  {
    id: 'espanol',
    name: 'Español',
    native: 'Español',
    hello: 'Hola',
    flag: 'es',
    img: 'espanol-sevilla',
    levels: 'A1 – C2',
    tagline: 'Para extranjeros que quieren vivir el Caribe en su idioma.',
    description:
      'Programa de español como lengua extranjera para quienes viven, trabajan o vacacionan en República Dominicana. Aprende el idioma y la cultura al mismo tiempo.',
    tags: ['Extranjeros', 'Conversación', 'Cultura'],
    learn: [
      'Español práctico para la vida diaria en RD',
      'Expresiones y cultura dominicana y latinoamericana',
      'Español profesional para el trabajo',
      'Lectura, escritura y gramática por niveles',
    ],
    exams: 'Preparación DELE y SIELE',
  },
  {
    id: 'frances',
    name: 'Francés',
    native: 'Français',
    hello: 'Bonjour',
    flag: 'fr',
    img: 'frances-paris',
    levels: 'A1 – C1',
    tagline: 'La lengua de la diplomacia, el arte y Europa.',
    description:
      'Descubre un idioma hablado en cinco continentes. Ideal para estudios en Francia o Canadá, turismo, relaciones internacionales y carreras en organismos multilaterales.',
    tags: ['General', 'Académico', 'Viajes'],
    learn: [
      'Pronunciación y entonación desde el primer día',
      'Francés para estudios y trámites en el extranjero',
      'Conversación guiada con situaciones reales',
      'Cultura francófona: Francia, Canadá, Haití y más',
    ],
    exams: 'Preparación DELF y DALF',
  },
  {
    id: 'portugues',
    name: 'Portugués',
    native: 'Português',
    hello: 'Olá',
    flag: 'pt',
    img: 'portugues-lisboa',
    levels: 'A1 – C1',
    tagline: 'Conéctate con Brasil, Portugal y sus oportunidades.',
    description:
      'Un idioma cercano al español que te permite avanzar rápido. Abre puertas a becas, negocios y viajes en Brasil, Portugal y África lusófona.',
    tags: ['General', 'Negocios', 'Viajes'],
    learn: [
      'Diferencias clave entre portugués y español',
      'Portugués de Brasil y de Portugal',
      'Conversación para viajes y negocios',
      'Comprensión de música, series y medios',
    ],
    exams: 'Preparación CELPE-Bras',
  },
  {
    id: 'aleman',
    name: 'Alemán',
    native: 'Deutsch',
    hello: 'Hallo',
    flag: 'de',
    img: 'aleman-berlin',
    levels: 'A1 – C1',
    tagline: 'Impulsa tu futuro académico y profesional.',
    description:
      'Alemania ofrece educación universitaria de calidad y gran demanda de profesionales. Aprende alemán con una base sólida y estructurada, paso a paso.',
    tags: ['General', 'Académico', 'Becas'],
    learn: [
      'Estructura gramatical explicada de forma sencilla',
      'Alemán para estudios universitarios y becas',
      'Vocabulario profesional y técnico',
      'Conversación y comprensión auditiva',
    ],
    exams: 'Preparación Goethe-Zertifikat',
  },
  {
    id: 'italiano',
    name: 'Italiano',
    native: 'Italiano',
    hello: 'Ciao',
    flag: 'it',
    img: 'italiano-roma',
    levels: 'A1 – C1',
    tagline: 'Vive la cultura, el arte y nuevas oportunidades.',
    description:
      'El idioma de la música, la gastronomía, el diseño y la historia. Perfecto para viajar, estudiar en Italia o tramitar la ciudadanía italiana.',
    tags: ['General', 'Cultura', 'Ciudadanía'],
    learn: [
      'Conversación desde las primeras clases',
      'Italiano para viajes y vida cotidiana',
      'Preparación para trámites de ciudadanía',
      'Arte, gastronomía y cultura italiana',
    ],
    exams: 'Preparación CILS y CELI',
  },
];

export const FAQS = [
  {
    q: '¿Qué nivel necesito para comenzar?',
    a: 'Ninguno. Antes de iniciar hacemos una evaluación de nivel gratuita y te ubicamos en el grupo adecuado, desde principiante absoluto (A1) hasta avanzado (C2).',
  },
  {
    q: '¿Cuánto tiempo tarda en aprender un idioma?',
    a: 'Depende de tu meta y la frecuencia de clases. Cada nivel del Marco Común Europeo (A1, A2, B1…) se trabaja en ciclos cortos, y desde el primer mes ya estarás conversando en situaciones básicas.',
  },
  {
    q: '¿Ofrecen clases online?',
    a: 'Sí. Tenemos clases virtuales en vivo con profesor, no grabadas. Puedes combinar modalidad presencial y virtual según tu agenda.',
  },
  {
    q: '¿Tienen clases para niños y adolescentes?',
    a: 'Sí. Contamos con programas Kids & Teens con metodología lúdica y grupos por edades, además de programas para adultos y profesionales.',
  },
  {
    q: '¿Entregan certificado al finalizar?',
    a: 'Sí. Al completar cada nivel recibes una constancia de estudios. También te preparamos para certificaciones internacionales como TOEFL, IELTS, DELF, DELE y Goethe.',
  },
  {
    q: '¿Puedo cambiar de horario?',
    a: 'Sí. Tenemos horarios de lunes a sábado en mañana, tarde y noche. Si tu agenda cambia, te ayudamos a moverte a otro grupo del mismo nivel.',
  },
  {
    q: '¿Ofrecen clases privadas o para empresas?',
    a: 'Sí. Ofrecemos clases privadas 1 a 1 o semiprivadas, y programas corporativos diseñados según las necesidades de tu equipo, en tu oficina o de forma virtual.',
  },
  {
    q: '¿Cuánto cuesta un curso?',
    a: 'El precio varía según el idioma, la modalidad (grupal, privada, presencial o virtual) y la frecuencia. Escríbenos por WhatsApp y te enviamos las opciones y promociones vigentes en minutos.',
  },
];

export interface Post {
  id: string;
  cat: 'Consejos' | 'Exámenes' | 'Cultura';
  date: string;
  title: string;
  excerpt: string;
  img: string;
  body: string[];
}

export const POSTS: Post[] = [
  {
    id: 'consejos-ingles',
    cat: 'Consejos',
    date: '8 oct 2026',
    title: '10 hábitos para mejorar tu inglés más rápido',
    excerpt: 'Pequeñas rutinas diarias que hacen una gran diferencia en tu fluidez.',
    img: 'viajera-lago',
    body: [
      'Aprender un idioma no depende solo de las horas de clase, sino de lo que haces entre una clase y otra. Estos son los hábitos que más ayudan a nuestros estudiantes:',
      '1. Escucha 15 minutos de podcast o series en el idioma cada día. 2. Cambia el idioma de tu celular. 3. Lleva una libreta de vocabulario nuevo. 4. Piensa en voz alta en el idioma mientras haces tareas sencillas. 5. Lee noticias cortas adaptadas a tu nivel.',
      '6. Graba tu voz y compárala con un nativo. 7. Aprende frases completas, no palabras sueltas. 8. Practica con un compañero de clase. 9. No temas equivocarte: el error es parte del proceso. 10. Ponte metas pequeñas y medibles cada semana.',
    ],
  },
  {
    id: 'toefl-ielts',
    cat: 'Exámenes',
    date: '1 oct 2026',
    title: 'TOEFL o IELTS: ¿cuál te conviene para estudiar fuera?',
    excerpt: 'Diferencias, formatos y qué piden las universidades y becas.',
    img: 'estudiante-campus',
    body: [
      'Ambos exámenes certifican tu nivel de inglés, pero tienen diferencias importantes. El TOEFL es muy aceptado en universidades de Estados Unidos y se realiza mayormente por computadora. El IELTS es preferido en Reino Unido, Canadá y Australia, e incluye una entrevista oral cara a cara.',
      'Antes de elegir, revisa qué examen y puntaje mínimo exige la universidad o la beca a la que aplicas. Muchas aceptan ambos.',
      'En la Academia MT te ayudamos a definir cuál presentar y te preparamos con simulacros reales, estrategias por sección y retroalimentación personalizada.',
    ],
  },
  {
    id: 'vivir-extranjero',
    cat: 'Cultura',
    date: '24 sep 2026',
    title: 'Vivir y estudiar en el extranjero: lo que debes saber',
    excerpt: 'Una guía para planificar tu experiencia internacional con el idioma como aliado.',
    img: 'italiano-roma',
    body: [
      'Estudiar en otro país es una de las experiencias más transformadoras. El idioma es la llave: te permite integrarte, hacer amigos y aprovechar las oportunidades académicas y laborales.',
      'Te recomendamos alcanzar al menos un nivel B1 antes de viajar, investigar becas con tiempo (muchas cierran convocatorias un año antes) y preparar tu certificación de idioma con anticipación.',
      'Nuestros asesores pueden orientarte sobre qué idioma y qué nivel necesitas según tu destino.',
    ],
  },
];
