'use client';

import Link from 'next/link';
import { VscArrowRight, VscGithub, VscMail, VscCode } from 'react-icons/vsc';
import { motion } from 'framer-motion';

import { personalInfo } from '@/data/personalInfo';
import styles from '@/styles/HomePage.module.css';

export default function HomePage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={styles.content}
        >
          <div className={styles.header}>
            <div className={styles.icon}>
              <VscCode size={32} />
            </div>
          </div>

          <div className={styles.intro}>
            <p className={styles.greeting}>Hello, I&apos;m</p>
            
            <h1 className={styles.name}>{personalInfo.name}</h1>
            
            <p className={styles.role}>{personalInfo.primaryRole}</p>
            
            <div className={styles.divider} />
            
            <p className={styles.description}>
              {personalInfo.secondaryRole}
            </p>
          </div>

          <div className={styles.actions}>
            <Link href="/projects" className={styles.primaryAction}>
              <span>View Projects</span>
              <VscArrowRight size={18} />
            </Link>
            
            <a href={personalInfo.resume} target="_blank" rel="noopener noreferrer" className={styles.secondaryAction}>
              <span>Download Resume</span>
            </a>
          </div>

          <div className={styles.links}>
            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.link}
            >
              <VscGithub size={16} />
              <span>GitHub</span>
            </a>
            
            <span className={styles.linkSeparator}>/</span>
            
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className={styles.link}>
              <span>LinkedIn</span>
            </a>

            <span className={styles.linkSeparator}>/</span>

            <Link href="/contact" className={styles.link}>
              <VscMail size={16} />
              <span>Contact</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
