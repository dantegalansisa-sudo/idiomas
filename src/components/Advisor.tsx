import { motion } from 'framer-motion';
import { MessageCircle, Phone } from 'lucide-react';
import MagneticButton from './MagneticButton';
import { SITE, waLink } from '../data/site';
import { EASINGS, img } from '../utils/easings';

export default function Advisor() {
  return (
    <section className="section advisor" aria-labelledby="advisor-title">
      <motion.div
        className="advisor__card"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: EASINGS.premium }}
      >
        <div className="advisor__photo">
          <img {...img('asesor')} sizes="(max-width: 700px) 100vw, 560px" alt="Asesor académico de la Academia de Idiomas MT" loading="lazy" />
          <span className="advisor__online">
            <i /> Disponible ahora
          </span>
        </div>
        <div className="advisor__body">
          <p className="eyebrow">Asesoría personalizada</p>
          <h2 id="advisor-title">¿No sabes por dónde empezar?</h2>
          <p>
            Habla con un asesor académico. Te orientamos sobre el idioma, el nivel, la modalidad y el horario
            ideal para tus objetivos, sin compromiso.
          </p>
          <div className="advisor__actions">
            <MagneticButton href={waLink('Hola, quiero hablar con un asesor académico.')} external className="btn btn--whatsapp btn--block">
              <MessageCircle size={18} /> Hablar por WhatsApp
            </MagneticButton>
            <a href={`tel:${SITE.phone.replace(/[^\d+]/g, '')}`} className="btn btn--outline btn--block">
              <Phone size={17} /> Llamar {SITE.phone}
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
