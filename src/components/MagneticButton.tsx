import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  external?: boolean;
  magnetStrength?: number;
  type?: 'button' | 'submit';
}

export default function MagneticButton({
  children,
  href,
  onClick,
  className = '',
  external = false,
  magnetStrength = 0.3,
  type = 'button',
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current!.getBoundingClientRect();
    setPos({
      x: (e.clientX - (rect.left + rect.width / 2)) * magnetStrength,
      y: (e.clientY - (rect.top + rect.height / 2)) * magnetStrength,
    });
  };

  return (
    <div
      ref={ref}
      className="magnetic"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
    >
      <motion.div
        animate={{ x: pos.x, y: pos.y }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        whileTap={{ scale: 0.96 }}
      >
        {href ? (
          <a
            href={href}
            onClick={onClick}
            className={className}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            {children}
          </a>
        ) : (
          <button type={type} onClick={onClick} className={className}>
            {children}
          </button>
        )}
      </motion.div>
    </div>
  );
}
