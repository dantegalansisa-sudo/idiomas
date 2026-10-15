import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import RevealText from './RevealText';
import Sheet from './Sheet';
import { POSTS, type Post, waLink } from '../data/site';
import { EASINGS, img } from '../utils/easings';

const CATS = ['Todos', 'Consejos', 'Exámenes', 'Cultura'] as const;

export default function Blog() {
  const [cat, setCat] = useState<(typeof CATS)[number]>('Todos');
  const [post, setPost] = useState<Post | null>(null);
  const list = POSTS.filter((p) => cat === 'Todos' || p.cat === cat);

  return (
    <section id="blog" className="section section--tint blog">
      <p className="eyebrow">Blog y recursos</p>
      <RevealText tag="h2" className="section__title" accent={['creciendo']}>
        Aprende, descubre y sigue creciendo
      </RevealText>
      <p className="section__lead">Consejos, guías y contenidos útiles para tu aprendizaje de idiomas y tu desarrollo global.</p>

      <div className="filters" role="tablist" aria-label="Categorías del blog">
        {CATS.map((c) => (
          <button key={c} role="tab" aria-selected={cat === c} className={cat === c ? 'active' : ''} onClick={() => setCat(c)}>
            {c}
          </button>
        ))}
      </div>

      <motion.div layout className="posts">
        <AnimatePresence mode="popLayout">
          {list.map((p) => (
            <motion.article
              layout
              key={p.id}
              className="post-card"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.45, ease: EASINGS.smooth }}
              onClick={() => setPost(p)}
            >
              <div className="post-card__img">
                <img {...img(p.img)} sizes="(max-width: 700px) 35vw, 240px" alt={p.title} loading="lazy" />
              </div>
              <div className="post-card__body">
                <span className="post-card__meta">
                  {p.cat} · {p.date}
                </span>
                <h3>{p.title}</h3>
                <p>{p.excerpt}</p>
                <button className="link-arrow" aria-label={`Leer: ${p.title}`}>
                  Leer más <ArrowRight size={15} />
                </button>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      <Sheet open={!!post} onClose={() => setPost(null)} label={post?.title ?? ''}>
        {post && (
          <article className="post-detail">
            <img {...img(post.img)} sizes="100vw" alt={post.title} className="post-detail__img" />
            <span className="post-card__meta">
              {post.cat} · {post.date}
            </span>
            <h3>{post.title}</h3>
            {post.body.map((b, i) => (
              <p key={i}>{b}</p>
            ))}
            <a href={waLink(`Hola, leí el artículo "${post.title}" y quiero más información.`)} target="_blank" rel="noopener noreferrer" className="btn btn--navy btn--block">
              <MessageCircle size={18} /> Quiero empezar a estudiar
            </a>
          </article>
        )}
      </Sheet>
    </section>
  );
}
