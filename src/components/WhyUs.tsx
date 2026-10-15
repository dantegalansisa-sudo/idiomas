import { motion } from 'framer-motion';
import { CalendarClock, ClipboardCheck, GraduationCap, Laptop, MessagesSquare, Users } from 'lucide-react';
import RevealText from './RevealText';
import AnimatedCounter from './AnimatedCounter';
import { useParallax } from '../hooks/useParallax';
import { cardVariants, containerVariants, img } from '../utils/easings';

const STATS = [
  { value: 6, suffix: '', label: 'Idiomas' },
  { value: 6, suffix: '', label: 'Niveles MCER (A1–C2)' },
  { value: 2, suffix: '', label: 'Modalidades' },
  { value: 100, suffix: '%', label: 'Clases en vivo' },
];

const REASONS = [
  { icon: ClipboardCheck, title: 'Evaluación gratis', text: 'Te ubicamos en el nivel correcto antes de empezar.' },
  { icon: Users, title: 'Grupos reducidos', text: 'Más tiempo para hablar y atención personalizada.' },
  { icon: CalendarClock, title: 'Horarios flexibles', text: 'Lunes a sábado: mañana, tarde y noche.' },
  { icon: GraduationCap, title: 'Profesores certificados', text: 'Docentes preparados, nativos y bilingües.' },
  { icon: Laptop, title: 'Presencial o virtual', text: 'Cambia de modalidad cuando lo necesites.' },
  { icon: MessagesSquare, title: 'Clubes de conversación', text: 'Practica fuera del aula con otros estudiantes.' },
];

export default function WhyUs() {
  const { ref, y } = useParallax(70);

  return (
    <section className="why" aria-labelledby="why-title">
      <div ref={ref} className="why__bg" aria-hidden="true">
        <motion.img {...img('viajera-lago')} sizes="100vw" alt="" loading="lazy" style={{ y, scale: 1.25 }} />
      </div>
      <div className="why__inner">
        <p className="eyebrow eyebrow--light">¿Por qué elegirnos?</p>
        <RevealText tag="h2" className="section__title section__title--light" accent={['lejos.']}>
          Los idiomas te llevan más lejos.
        </RevealText>

        <div className="stats">
          {STATS.map((s) => (
            <div key={s.label} className="stat">
              <strong>
                <AnimatedCounter target={s.value} suffix={s.suffix} />
              </strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>

        <motion.div className="reasons" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
          {REASONS.map((r) => (
            <motion.article key={r.title} className="reason" variants={cardVariants}>
              <r.icon size={22} />
              <div>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
