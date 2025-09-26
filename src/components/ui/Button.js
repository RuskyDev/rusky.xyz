'use client';
import { motion } from 'framer-motion';
import styles from './Button.module.css';

export default function Button({ children, onClick, type = 'button' }) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={styles.button}
      whileHover={{
        scale: 1.03,
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        opacity: 0.95
      }}
      transition={{
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1]
      }}
    >
      {children}
    </motion.button>
  );
}