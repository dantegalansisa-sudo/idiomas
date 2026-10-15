import { MotionConfig, motion, useScroll, useSpring } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import CustomCursor from './components/CustomCursor';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Languages from './components/Languages';
import Method from './components/Method';
import WhyUs from './components/WhyUs';
import Advisor from './components/Advisor';
import Blog from './components/Blog';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BottomNav from './components/BottomNav';
import { waLink } from './data/site';

export default function App() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <MotionConfig reducedMotion="user">
      <CustomCursor />
      <motion.div className="progress" style={{ scaleX: progress }} />
      <Header />
      <main>
        <Hero />
        <About />
        <Programs />
        <Languages />
        <Method />
        <WhyUs />
        <Advisor />
        <Blog />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <motion.a
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-float"
        aria-label="Escríbenos por WhatsApp"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2.2, type: 'spring', stiffness: 260, damping: 18 }}
      >
        <MessageCircle size={26} />
      </motion.a>
      <BottomNav />
    </MotionConfig>
  );
}
