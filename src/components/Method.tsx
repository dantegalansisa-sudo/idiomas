import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import RevealText from './RevealText';
import { EASINGS } from '../utils/easings';

const STEPS = [
  {
    n: '01',
    title: 'Evaluación de nivel',
    text: 'Una prueba gratuita, oral y escrita, para saber exactamente desde dónde partes.',
  },
  {
    n: '02',
    title: 'Plan a tu medida',
    text: 'Definimos tu meta (viajar, trabajar, estudiar, certificarte) y armamos tu ruta por niveles.',
  },
  {
    n: '03',
    title: 'Práctica real',
    text: 'Hablas desde la primera clase: conversación, situaciones reales y material auténtico. 70% práctica, 30% teoría.',
  },
  {
    n: '04',
    title: 'Progreso medible',
    text: 'Evaluaciones al final de cada nivel, reportes de avance y constancia de estudios.',
  },
  {
    n: '05',
    title: 'Certificación',
    text: 'Si lo necesitas, te preparamos para tu examen internacional con simulacros y estrategias.',
  },
];

export default function Method() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 60%'] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section id="metodo" className="section method">
      <p className="eyebrow">Método MT</p>
      <RevealText tag="h2" className="section__title" accent={['hablar']}>
        Un camino claro para hablar con seguridad
      </RevealText>
      <p className="section__lead">
        Nuestro método combina comunicación, práctica constante y seguimiento personal. Así sabes en todo momento
        cuánto has avanzado y qué sigue.
      </p>

      <div ref={ref} className="steps">
        <div className="steps__rail">
          <motion.div className="steps__fill" style={{ scaleY }} />
        </div>
        {STEPS.map((s) => (
          <motion.div
            key={s.n}
            className="step"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, ease: EASINGS.premium }}
          >
            <span className="step__dot">{s.n}</span>
            <div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
