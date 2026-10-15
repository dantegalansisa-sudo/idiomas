import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageCircle, Phone, X } from 'lucide-react';
import { SITE, waLink } from '../data/site';
import { EASINGS } from '../utils/easings';

const LINKS = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#programas', label: 'Programas' },
  { href: '#idiomas', label: 'Idiomas' },
  { href: '#metodo', label: 'Método MT' },
  { href: '#blog', label: 'Blog y recursos' },
  { href: '#faq', label: 'Preguntas frecuentes' },
  { href: '#contacto', label: 'Contacto' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <>
      <motion.header
        className={`header ${scrolled ? 'header--solid' : ''}`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, ease: EASINGS.premium, delay: 0.2 }}
      >
        <a href="#inicio" className="brand" aria-label={SITE.name}>
          <img src="/images/logo-mt.webp" alt="Logo Academia de Idiomas MT" width="44" height="44" />
          <span className="brand__text">
            <strong>Academia</strong>
            <span>de Idiomas MT</span>
          </span>
        </a>
        <button
          className={`burger ${open ? 'burger--open' : ''}`}
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
        >
          <span />
          <span />
        </button>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="menu"
            initial={{ clipPath: 'circle(0% at calc(100% - 40px) 36px)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 40px) 36px)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 40px) 36px)' }}
            transition={{ duration: 0.7, ease: EASINGS.premium }}
            aria-label="Menú principal"
          >
            <button className="menu__close" onClick={() => setOpen(false)} aria-label="Cerrar menú">
              <X size={22} />
            </button>
            <p className="eyebrow eyebrow--light">Menú</p>
            <ul>
              {LINKS.map((l, i) => (
                <li key={l.href}>
                  <motion.a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.25 + i * 0.05, duration: 0.6, ease: EASINGS.premium }}
                  >
                    <span className="menu__num">0{i + 1}</span>
                    {l.label}
                  </motion.a>
                </li>
              ))}
            </ul>
            <motion.div
              className="menu__foot"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn btn--gold btn--block">
                <MessageCircle size={18} /> Escríbenos por WhatsApp
              </a>
              <a href={`tel:${SITE.phone.replace(/[^\d+]/g, '')}`} className="menu__phone">
                <Phone size={16} /> {SITE.phone}
              </a>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
