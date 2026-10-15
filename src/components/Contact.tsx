import { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Laptop, Mail, MapPin, MessageCircle, Phone, Send, User } from 'lucide-react';
import RevealText from './RevealText';
import MagneticButton from './MagneticButton';
import { LANGUAGES, SITE, waLink } from '../data/site';
import { EASINGS } from '../utils/easings';

type Tab = 'info' | 'inscripcion';

export default function Contact() {
  const [tab, setTab] = useState<Tab>('info');
  const [form, setForm] = useState({ name: '', phone: '', lang: '', mode: 'Presencial', msg: '' });
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  // Sin base de datos: el formulario arma el mensaje y lo abre en WhatsApp.
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      tab === 'info' ? 'Hola, quiero solicitar información.' : 'Hola, quiero inscribirme.',
      `Nombre: ${form.name}`,
      form.phone && `Teléfono: ${form.phone}`,
      form.lang && `Idioma: ${form.lang}`,
      `Modalidad: ${form.mode}`,
      form.msg && `Mensaje: ${form.msg}`,
    ].filter(Boolean);
    window.open(waLink(lines.join('\n')), '_blank', 'noopener');
  };

  return (
    <section id="contacto" className="section contact">
      <p className="eyebrow">Contacto</p>
      <RevealText tag="h2" className="section__title" accent={['paso']}>
        Hablemos de tu próximo gran paso
      </RevealText>
      <p className="section__lead">Estamos aquí para ayudarte. Escríbenos, llámanos o visítanos. ¡Será un gusto conocerte!</p>

      <motion.form
        className="form"
        onSubmit={submit}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: EASINGS.premium }}
      >
        <div className="form__tabs" role="tablist">
          <button type="button" role="tab" aria-selected={tab === 'info'} className={tab === 'info' ? 'active' : ''} onClick={() => setTab('info')}>
            Solicitar información
          </button>
          <button type="button" role="tab" aria-selected={tab === 'inscripcion'} className={tab === 'inscripcion' ? 'active' : ''} onClick={() => setTab('inscripcion')}>
            Inscribirme
          </button>
        </div>

        <label className="field">
          <User size={18} />
          <input required placeholder="Nombre completo" value={form.name} onChange={set('name')} autoComplete="name" aria-label="Nombre completo" />
        </label>
        <label className="field">
          <Phone size={18} />
          <input type="tel" placeholder="Tu teléfono" value={form.phone} onChange={set('phone')} autoComplete="tel" aria-label="Teléfono" />
        </label>
        <div className="field-row">
          <label className="field field--select">
            <select value={form.lang} onChange={set('lang')} aria-label="Idioma de interés" required>
              <option value="" disabled>
                Idioma de interés
              </option>
              {LANGUAGES.map((l) => (
                <option key={l.id}>{l.name}</option>
              ))}
            </select>
          </label>
          <label className="field field--select">
            <select value={form.mode} onChange={set('mode')} aria-label="Modalidad">
              <option>Presencial</option>
              <option>Virtual</option>
              <option>Privada</option>
              <option>Empresa</option>
            </select>
          </label>
        </div>
        <label className="field field--area">
          <textarea placeholder="¿En qué podemos ayudarte?" rows={3} value={form.msg} onChange={set('msg')} aria-label="Mensaje" />
        </label>
        <MagneticButton type="submit" className="btn btn--navy btn--block">
          {tab === 'info' ? 'Enviar mensaje' : 'Quiero inscribirme'} <Send size={17} />
        </MagneticButton>
        <p className="form__note">Al enviar, se abrirá WhatsApp con tu mensaje listo.</p>
      </motion.form>

      <a href={waLink()} target="_blank" rel="noopener noreferrer" className="wa-card">
        <span className="wa-card__icon">
          <MessageCircle size={26} />
        </span>
        <span>
          <strong>¿Prefieres chatear?</strong>
          <small>Escríbenos por WhatsApp</small>
        </span>
      </a>

      <div className="info-grid">
        <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer" className="info">
          <MapPin size={22} />
          <strong>Sede principal</strong>
          <span>{SITE.city}</span>
          <u>Ver en Google Maps</u>
        </a>
        <div className="info">
          <Laptop size={22} />
          <strong>Clases online</strong>
          <span>Desde cualquier lugar, 100% en vivo</span>
        </div>
        <div className="info">
          <Clock size={22} />
          <strong>Horario</strong>
          {SITE.hours.map((h) => (
            <span key={h.days}>
              {h.days}: {h.time}
            </span>
          ))}
        </div>
        <a href={`mailto:${SITE.email}`} className="info">
          <Mail size={22} />
          <strong>Correo</strong>
          <span>{SITE.email}</span>
        </a>
      </div>
    </section>
  );
}
