import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  Award,
  Baby,
  Briefcase,
  Building2,
  GraduationCap,
  Laptop,
  MapPin,
  User,
  Users,
} from 'lucide-react';
import RevealText from './RevealText';
import { waLink } from '../data/site';
import { EASINGS, cardVariants, containerVariants } from '../utils/easings';

const MODES = {
  presencial: {
    icon: MapPin,
    label: 'Presencial',
    title: 'Aulas modernas, grupos reducidos',
    text: 'Aprende cara a cara con tu profesor y compañeros en instalaciones cómodas y seguras, con recursos audiovisuales en cada aula.',
    points: ['Grupos reducidos por nivel', 'Horarios de mañana, tarde y noche', 'Actividades culturales y clubes de conversación'],
  },
  virtual: {
    icon: Laptop,
    label: 'Virtual',
    title: 'Clases en vivo desde cualquier lugar',
    text: 'Clases 100% en vivo con profesor, no grabadas. Solo necesitas conexión a internet y ganas de aprender, estés donde estés.',
    points: ['Plataforma interactiva en tiempo real', 'Material digital incluido', 'Ideal si viajas o trabajas a distancia'],
  },
} as const;

const SERVICES = [
  { icon: Users, title: 'Clases grupales', text: 'Aprende y comparte con otros estudiantes de tu mismo nivel.' },
  { icon: User, title: 'Clases privadas', text: 'Atención 100% personalizada, 1 a 1 o semiprivadas.' },
  { icon: Building2, title: 'Empresas', text: 'Programas corporativos a la medida de tu equipo.' },
  { icon: Award, title: 'Exámenes internacionales', text: 'TOEFL, IELTS, DELF, DELE, Goethe y más.' },
  { icon: GraduationCap, title: 'Profesores expertos', text: 'Docentes certificados y con experiencia internacional.' },
  { icon: Briefcase, title: 'Certificados', text: 'Constancia de estudios al completar cada nivel.' },
];

const AUDIENCES = [
  { icon: Baby, tag: '4 a 17 años', title: 'Kids & Teens', text: 'Metodología lúdica, grupos por edades y refuerzo escolar.' },
  { icon: User, tag: 'Desde 18 años', title: 'Adultos', text: 'Para viajar, estudiar fuera o crecer personalmente.' },
  { icon: Briefcase, tag: 'Profesionales', title: 'Profesionales y empresas', text: 'Idioma de negocios, reuniones, correos y entrevistas.' },
];

export default function Programs() {
  const [mode, setMode] = useState<keyof typeof MODES>('presencial');
  const m = MODES[mode];

  return (
    <section id="programas" className="section section--tint programs">
      <p className="eyebrow">Programas y modalidades</p>
      <RevealText tag="h2" className="section__title" accent={['ritmo']}>
        Aprende a tu ritmo, a tu manera
      </RevealText>
      <p className="section__lead">Elige cómo y dónde estudiar. Todos los programas siguen el Marco Común Europeo de Referencia (MCER).</p>

      <div className="tabs" role="tablist">
        {(Object.keys(MODES) as (keyof typeof MODES)[]).map((k) => {
          const Icon = MODES[k].icon;
          return (
            <button key={k} role="tab" aria-selected={mode === k} className={mode === k ? 'active' : ''} onClick={() => setMode(k)}>
              {mode === k && <motion.span layoutId="tab-pill" className="tabs__pill" transition={{ type: 'spring', stiffness: 400, damping: 32 }} />}
              <span className="tabs__label">
                <Icon size={16} /> {MODES[k].label}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mode-card">
        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: EASINGS.smooth }}
          >
            <h3>{m.title}</h3>
            <p>{m.text}</p>
            <ul className="checklist">
              {m.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <a
              className="link-arrow"
              href={waLink(`Hola, quiero información sobre las clases en modalidad ${m.label.toLowerCase()}.`)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Pedir horarios {m.label.toLowerCase()} <ArrowRight size={16} />
            </a>
          </motion.div>
        </AnimatePresence>
      </div>

      <motion.div className="services" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
        {SERVICES.map((s) => (
          <motion.article key={s.title} className="service-card" variants={cardVariants} whileHover={{ y: -6 }}>
            <s.icon size={26} strokeWidth={1.5} className="service-card__icon" />
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </motion.article>
        ))}
      </motion.div>

      <h3 className="sub-title">Programas por edad y objetivo</h3>
      <div className="audiences" role="list">
        {AUDIENCES.map((a, i) => (
          <motion.article
            key={a.title}
            role="listitem"
            className="audience"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.7, ease: EASINGS.premium }}
          >
            <span className="audience__tag">{a.tag}</span>
            <a.icon size={30} strokeWidth={1.4} />
            <h4>{a.title}</h4>
            <p>{a.text}</p>
            <a href={waLink(`Hola, quiero información del programa ${a.title}.`)} target="_blank" rel="noopener noreferrer" className="link-arrow">
              Ver programa <ArrowRight size={16} />
            </a>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
