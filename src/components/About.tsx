import { motion } from 'framer-motion';
import { Globe2, HeartHandshake, Sparkles, TrendingUp } from 'lucide-react';
import RevealText from './RevealText';
import { useParallax } from '../hooks/useParallax';
import { EASINGS, cardVariants, containerVariants, img } from '../utils/easings';

const VALUES = [
  { icon: HeartHandshake, title: 'Confianza', text: 'Un ambiente cercano donde equivocarse es parte de aprender.' },
  { icon: Sparkles, title: 'Excelencia', text: 'Profesores preparados y programas alineados al estándar MCER.' },
  { icon: TrendingUp, title: 'Aprendizaje continuo', text: 'Seguimiento de tu progreso en cada nivel.' },
  { icon: Globe2, title: 'Visión global', text: 'Conectamos culturas y te preparamos para el mundo.' },
];

export default function About() {
  const { ref, y } = useParallax(40);

  return (
    <section id="nosotros" className="section about">
      <p className="eyebrow">Sobre nosotros</p>
      <RevealText tag="h2" className="section__title" accent={['expertas']}>
        Tu aprendizaje en manos expertas
      </RevealText>

      <motion.div
        ref={ref}
        className="about__media"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* El clip va en un hijo: un elemento recortado al 100% no dispara whileInView */}
        <motion.div
          className="about__clip"
          variants={{ hidden: { clipPath: 'inset(0% 100% 0% 0%)' }, visible: { clipPath: 'inset(0% 0% 0% 0%)' } }}
          transition={{ duration: 1.2, ease: EASINGS.premium }}
        >
          <motion.img
            {...img('estudiante-campus')}
            sizes="(max-width: 700px) 100vw, 640px"
            alt="Estudiante de la Academia de Idiomas MT caminando con sus libros"
            loading="lazy"
            style={{ y, scale: 1.18 }}
          />
        </motion.div>
        <motion.div
          className="about__stamp"
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          transition={{ delay: 0.8, duration: 0.7, ease: EASINGS.premium }}
        >
          <img src="/images/logo-mt.webp" alt="" width="64" height="64" loading="lazy" />
          <span>
            Más que un idioma,
            <br />
            <em>nuevas historias.</em>
          </span>
        </motion.div>
      </motion.div>

      <motion.div
        className="about__text"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: EASINGS.smooth }}
      >
        <p className="lead">
          En <strong>Academia de Idiomas MT</strong> somos una institución educativa comprometida con la
          enseñanza de idiomas y el desarrollo de competencias comunicativas que abren puertas a nuevas
          oportunidades académicas, profesionales y personales.
        </p>
        <p>
          Nuestro propósito es brindar una formación de calidad, mediante métodos de enseñanza dinámicos,
          prácticos y adaptados a las necesidades de cada estudiante, promoviendo la confianza, la excelencia y
          el aprendizaje continuo.
        </p>
        <blockquote className="about__quote">
          “Aprender un nuevo idioma es mucho más que adquirir conocimientos: es conectar culturas, ampliar
          horizontes y construir un futuro con mayores oportunidades.”
        </blockquote>
      </motion.div>

      <motion.div
        className="values"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {VALUES.map((v) => (
          <motion.article key={v.title} className="value" variants={cardVariants}>
            <span className="icon-bubble">
              <v.icon size={20} />
            </span>
            <h3>{v.title}</h3>
            <p>{v.text}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
