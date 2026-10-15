import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { damping: 25, stiffness: 250 });
  const ringY = useSpring(y, { damping: 25, stiffness: 250 });
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target as HTMLElement | null;
      const hover = !!t?.closest('a, button, .lang-card, .post-card, summary, input, select, textarea');
      ring.current?.classList.toggle('cursor--hover', hover);
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [x, y]);

  return (
    <>
      <motion.div className="cursor-dot" style={{ x, y }} />
      <motion.div ref={ring} className="cursor-ring" style={{ x: ringX, y: ringY }} />
    </>
  );
}
