'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ menuItems = [] }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navVariants = {
    hidden: { y: -60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 70,
        damping: 14,
        delay: 0.2,
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.1,
        duration: 0.4,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <motion.nav
      className={styles.navbar}
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className={styles.navContent}>
        <a href="/" className={styles.navLogo}>Rusky</a>

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul className={styles.navLinks}>
          {menuItems.map((item, i) => (
            <motion.li
              key={item.label}
              custom={i}
              variants={linkVariants}
              initial="hidden"
              animate="visible"
            >
              <a href={item.href}>{item.label}</a>
            </motion.li>
          ))}
        </ul>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className={styles.backdrop}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.ul
              className={`${styles.navLinks} ${styles.mobile}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {menuItems.map((item) => (
                <motion.li key={item.label} whileTap={{ scale: 0.95 }}>
                  <a href={item.href}>{item.label}</a>
                </motion.li>
              ))}
            </motion.ul>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
