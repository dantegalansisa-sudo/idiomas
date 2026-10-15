import { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, ChevronRight, MessageCircle } from 'lucide-react';
import RevealText from './RevealText';
import Flag from './Flag';
import Sheet from './Sheet';
import { LANGUAGES, type Language, waLink } from '../data/site';
import { EASINGS, img } from '../utils/easings';

function LangCard({ lang, index, onOpen }: { lang: Language; index: number; onOpen: () => void }) {
  return (
    <motion.button
      id={`idioma-${lang.id}`}
      className="lang-card"
      onClick={onOpen}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay: (index % 2) * 0.08, ease: EASINGS.premium }}
      whileTap={{ scale: 0.98 }}
      aria-label={`Ver curso de ${lang.name}`}
    >
      <div className="lang-card__img">
        <img {...img(lang.img)} sizes="(max-width: 700px) 40vw, 260px" alt={`Curso de ${lang.name}`} loading="lazy" />
        <span className="lang-card__hello">{lang.hello}</span>
      </div>
      <div className="lang-card__body">
        <div className="lang-card__head">
          <Flag code={lang.flag} size={24} />
          <h3>{lang.name}</h3>
        </div>
        <p>{lang.tagline}</p>
        <div className="lang-card__meta">
          <span className="chip chip--navy">{lang.levels}</span>
          {lang.tags.slice(0, 2).map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>
      </div>
      <span className="lang-card__go">
        <ChevronRight size={18} />
      </span>
    </motion.button>
  );
}

export default function Languages() {
  const [active, setActive] = useState<Language | null>(null);

  return (
    <section id="idiomas" className="section languages">
      <p className="eyebrow">Nuestros idiomas</p>
      <RevealText tag="h2" className="section__title" accent={['metas']}>
        Elige tu idioma y alcanza tus metas
      </RevealText>
      <p className="section__lead">Programas diseñados para cada objetivo y nivel. Clases prácticas, flexibles y con acompañamiento constante.</p>

      <div className="lang-list">
        {LANGUAGES.map((l, i) => (
          <LangCard key={l.id} lang={l} index={i} onOpen={() => setActive(l)} />
        ))}
      </div>

      <Sheet open={!!active} onClose={() => setActive(null)} label={active ? `Curso de ${active.name}` : ''}>
        {active && (
          <article className="lang-detail">
            <div className="lang-detail__hero">
              <img {...img(active.img)} sizes="100vw" alt={`Curso de ${active.name}`} />
              <div>
                <Flag code={active.flag} size={36} />
                <h3>Curso de {active.name}</h3>
                <p className="lang-detail__native">
                  {active.native} · Niveles {active.levels}
                </p>
              </div>
            </div>
            <p>{active.description}</p>
            <h4>Lo que aprenderás</h4>
            <ul className="checklist">
              {active.learn.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
            <div className="lang-detail__exam">
              <Award size={20} />
              <span>{active.exams}</span>
            </div>
            <div className="lang-detail__tags">
              {active.tags.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
              <span className="chip">Presencial</span>
              <span className="chip">Virtual</span>
            </div>
            <a
              href={waLink(`Hola, quiero información sobre el curso de ${active.name}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--navy btn--block"
            >
              <MessageCircle size={18} /> Quiero aprender {active.name}
            </a>
          </article>
        )}
      </Sheet>
    </section>
  );
}
