import '@/styles/globals.css'
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import { motion } from 'framer-motion';

export default function App({ Component, pageProps }) {
  return (
    <PageTransition>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </PageTransition>
  )
}

const PageTransition = ({ children }) => {
  const pageVariants = {
    initial: {
      opacity: 0,
      scale: 0.9,
      y: 50,
    },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration:1,
        ease: 'easeInOut',
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      y: -50,
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      {children}
    </motion.div>
  );
};
