import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import RevealText from './RevealText';
import { FAQS } from '../data/site';
import { EASINGS } from '../utils/easings';

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section faq">
      <p className="eyebrow">Preguntas frecuentes</p>
      <RevealText tag="h2" className="section__title" accent={['dudas']}>
        Resolvemos tus dudas
      </RevealText>

      <div className="faq__list">
        {FAQS.map((f, i) => {
          const isOpen = open === i;
          return (
            <motion.div
              key={f.q}
              className={`faq__item ${isOpen ? 'open' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.04, ease: EASINGS.smooth }}
            >
              <h3>
                <button aria-expanded={isOpen} onClick={() => setOpen(isOpen ? null : i)}>
                  <span>{f.q}</span>
                  <motion.span className="faq__icon" animate={{ rotate: isOpen ? 45 : 0 }}>
                    <Plus size={18} />
                  </motion.span>
                </button>
              </h3>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: EASINGS.smooth }}
                    style={{ overflow: 'hidden' }}
                  >
                    <p>{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
