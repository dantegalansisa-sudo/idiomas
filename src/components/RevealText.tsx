import { motion } from 'framer-motion';
import { EASINGS } from '../utils/easings';

interface RevealTextProps {
  children: string;
  className?: string;
  delay?: number;
  tag?: 'h1' | 'h2' | 'h3' | 'p';
  /** Palabras (sin puntuación) que se pintan con el color de acento */
  accent?: string[];
  immediate?: boolean;
}

const word = {
  hidden: { y: '110%', rotate: 2 },
  visible: { y: 0, rotate: 0, transition: { duration: 0.85, ease: EASINGS.premium } },
};

// El trigger vive en el título (no en cada palabra): las palabras están recortadas
// por su máscara y el IntersectionObserver nunca las vería entrar.
export default function RevealText({
  children,
  className = '',
  delay = 0,
  tag = 'h2',
  accent = [],
  immediate = false,
}: RevealTextProps) {
  const Tag = motion[tag];
  const words = children.split(' ');
  const trigger = immediate
    ? { animate: 'visible' }
    : { whileInView: 'visible', viewport: { once: true, amount: 0.4 } };

  return (
    <Tag
      className={`reveal-text ${className}`}
      aria-label={children}
      initial="hidden"
      {...trigger}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07, delayChildren: delay } } }}
    >
      {words.map((w, i) => (
        <span key={i} className="reveal-text__mask" aria-hidden="true">
          <motion.span
            className={accent.includes(w.replace(/[.,!?¿¡]/g, '')) ? 'accent' : undefined}
            style={{ display: 'inline-block' }}
            variants={word}
          >
            {w}
          </motion.span>
          {i < words.length - 1 && ' '}
        </span>
      ))}
    </Tag>
  );
}
