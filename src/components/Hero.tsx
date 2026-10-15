import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, MessageCircle, Star } from 'lucide-react';
import RevealText from './RevealText';
import MagneticButton from './MagneticButton';
import Flag from './Flag';
import { LANGUAGES, waLink } from '../data/site';
import { EASINGS, img } from '../utils/easings';

const HELLOS = ['Hello', 'Hola', 'Bonjour', 'Olá', 'Hallo', 'Ciao'];

export default function Hero() {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 700], [1.08, 1.25]);
  const y = useTransform(scrollY, [0, 700], [0, 120]);
  const contentY = useTransform(scrollY, [0, 500], [0, -60]);
  const contentOpacity = useTransform(scrollY, [0, 450], [1, 0]);

  return (
    <>
    <section id="inicio" className="hero">
      <motion.div className="hero__bg" style={{ scale, y }}>
        <img
          {...img('hero-estudiante')}
          sizes="100vw"
          alt="Estudiante de idiomas contemplando la arquitectura europea al atardecer"
          {...{ fetchpriority: 'high' }}
        />
      </motion.div>
      <div className="hero__shade" />

      <motion.div className="hero__content" style={{ y: contentY, opacity: contentOpacity }}>
        <motion.p
          className="hero__badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: EASINGS.premium }}
        >
          <Star size={14} fill="currentColor" /> #1 en lenguas · Presencial y virtual
        </motion.p>

        <RevealText tag="h1" className="hero__title" delay={0.6} immediate accent={['confianza']}>
          Aprende idiomas con confianza
        </RevealText>

        <motion.p
          className="hero__lead"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.9, ease: EASINGS.premium }}
        >
          Inglés, español, francés, portugués, alemán e italiano. Abre nuevas oportunidades
          académicas, profesionales y personales en cualquier parte del mundo.
        </motion.p>

        <motion.div
          className="hero__ctas"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.9, ease: EASINGS.premium }}
        >
          <MagneticButton href="#idiomas" className="btn btn--gold btn--block">
            Ver idiomas <ArrowRight size={18} />
          </MagneticButton>
          <MagneticButton
            href={waLink('Hola, quiero agendar mi evaluación de nivel gratuita.')}
            external
            className="btn btn--ghost btn--block"
          >
            <MessageCircle size={18} /> Evaluación de nivel gratis
          </MagneticButton>
        </motion.div>
      </motion.div>
    </section>

    <div className="hero-strip">
      <motion.div
        className="hero__langs"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.7, duration: 0.9, ease: EASINGS.premium }}
      >
        {LANGUAGES.map((l) => (
          <a key={l.id} href={`#idioma-${l.id}`} className="hero__lang">
            <Flag code={l.flag} size={34} />
            <span>{l.name}</span>
          </a>
        ))}
      </motion.div>

      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {[...HELLOS, ...HELLOS, ...HELLOS, ...HELLOS].map((h, i) => (
            <span key={i}>
              {h} <i>✦</i>
            </span>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}
