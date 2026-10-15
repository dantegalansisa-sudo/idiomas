import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Home, Languages, Mail, Users } from 'lucide-react';

const ITEMS = [
  { id: 'inicio', label: 'Inicio', icon: Home },
  { id: 'nosotros', label: 'Nosotros', icon: Users },
  { id: 'idiomas', label: 'Idiomas', icon: Languages },
  { id: 'blog', label: 'Blog', icon: BookOpen },
  { id: 'contacto', label: 'Contacto', icon: Mail },
];

const SECTIONS = ['inicio', 'nosotros', 'programas', 'idiomas', 'metodo', 'blog', 'faq', 'contacto'];
// Secciones intermedias se asocian al ítem más cercano de la barra
const MAP: Record<string, string> = { programas: 'nosotros', metodo: 'idiomas', faq: 'blog' };

export default function BottomNav() {
  const [active, setActive] = useState('inicio');

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(MAP[e.target.id] ?? e.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <nav className="bottom-nav" aria-label="Navegación rápida">
      {ITEMS.map((it) => (
        <a key={it.id} href={`#${it.id}`} className={active === it.id ? 'active' : ''}>
          {active === it.id && (
            <motion.span layoutId="nav-pill" className="bottom-nav__pill" transition={{ type: 'spring', stiffness: 420, damping: 34 }} />
          )}
          <it.icon size={20} strokeWidth={active === it.id ? 2.2 : 1.7} />
          <span>{it.label}</span>
        </a>
      ))}
    </nav>
  );
}
