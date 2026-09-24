'use client';

import { motion } from 'framer-motion';
import ContactCode from '@/components/ContactCode';
import styles from '@/styles/ContactPage.module.css';

const ContactPage = () => {
  return (
    <div className={styles.layout}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h3 className={styles.pageTitle}>Contact Me</h3>
        <p className={styles.pageSubtitle}>
          Feel free to reach out to me through any of the social platforms below. I&apos;m always open to new opportunities and connections.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className={styles.container}
      >
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <ContactCode />
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
