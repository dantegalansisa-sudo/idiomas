import { Facebook, Instagram, MessageCircle } from 'lucide-react';
import { LANGUAGES, SITE, waLink } from '../data/site';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__brand">
        <img src="/images/logo-mt.webp" alt="Academia de Idiomas MT" width="72" height="72" loading="lazy" />
        <p className="footer__script">Los idiomas te llevan más lejos.</p>
      </div>
      <nav className="footer__cols" aria-label="Pie de página">
        <div>
          <h4>Idiomas</h4>
          {LANGUAGES.map((l) => (
            <a key={l.id} href={`#idioma-${l.id}`}>
              Curso de {l.name}
            </a>
          ))}
        </div>
        <div>
          <h4>Academia</h4>
          <a href="#nosotros">Nosotros</a>
          <a href="#programas">Programas</a>
          <a href="#metodo">Método MT</a>
          <a href="#blog">Blog</a>
          <a href="#faq">Preguntas</a>
          <a href="#contacto">Contacto</a>
        </div>
      </nav>
      <div className="footer__social">
        <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <Instagram size={20} />
        </a>
        <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <Facebook size={20} />
        </a>
        <a href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <MessageCircle size={20} />
        </a>
      </div>
      <p className="footer__legal">
        © {new Date().getFullYear()} {SITE.name}. Todos los derechos reservados.
        <br />
        {SITE.city}
      </p>
    </footer>
  );
}
