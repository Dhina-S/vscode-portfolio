'use client';

import { VscGithub, VscMail } from 'react-icons/vsc';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { personalInfo } from '@/data/personalInfo';
import { skills } from '@/data/skills';
import { experience } from '@/data/experience';
import { education } from '@/data/education';
import { certifications } from '@/data/certifications';
import { achievements } from '@/data/achievements';
import styles from '@/styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={styles.headerContent}
          >
            <div className={styles.headerText}>
              <h1 className={styles.name}>{personalInfo.name}</h1>
              <p className={styles.role}>{personalInfo.primaryRole}</p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className={styles.headerActions}
          >
            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.iconButton}
            >
              <VscGithub size={20} />
            </a>
            <Link href="/contact" className={styles.iconButton}>
              <VscMail size={20} />
            </Link>
          </motion.div>
        </header>

        <div className={styles.content}>
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={styles.section}
          >
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>01</span>
              <h2 className={styles.sectionTitle}>About</h2>
            </div>
            
            <div className={styles.sectionBody}>
              <p className={styles.paragraph}>
                I am an ECE engineering student focused on software development, with a strong interest in Java backend engineering, Spring Boot, REST APIs, databases, system concepts and full-stack development.
              </p>
              <p className={styles.paragraph}>
                I enjoy building practical systems rather than only creating small demo applications. My strongest project is Mini Redis, where I implemented a Redis-inspired in-memory key-value server using Java networking, concurrency and persistence concepts.
              </p>
            </div>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={styles.section}
          >
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>02</span>
              <h2 className={styles.sectionTitle}>Skills</h2>
            </div>
            
            <div className={styles.sectionBody}>
              <div className={styles.skillsGrid}>
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category} className={styles.skillCategory}>
                    <h4 className={styles.skillTitle} style={{ textTransform: 'capitalize' }}>{category}</h4>
                    <div className={styles.skillTags}>
                      {items.map(skill => (
                        <span key={skill} className={styles.skillTag}>{skill}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className={styles.section}
          >
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>03</span>
              <h2 className={styles.sectionTitle}>Experience</h2>
            </div>
            
            <div className={styles.sectionBody}>
              {experience.map((exp, idx) => (
                <div key={idx} className={styles.experienceCard}>
                  <div className={styles.expMeta}>
                    <span className={styles.expPeriod}>{exp.period}</span>
                  </div>
                  <h3 className={styles.expRole}>{exp.role}</h3>
                  <p className={styles.expCompany}>{exp.company}</p>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className={styles.section}
          >
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>04</span>
              <h2 className={styles.sectionTitle}>Education</h2>
            </div>
            
            <div className={styles.sectionBody}>
              <div className={styles.experienceCard}>
                <h3 className={styles.expRole}>{education.degree}</h3>
                <p className={styles.expCompany}>{education.institution}</p>
                <ul className={styles.expList}>
                  <li>CGPA: {education.cgpa}</li>
                  <li>Graduation: {education.graduation}</li>
                </ul>
              </div>
            </div>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className={styles.section}
          >
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>05</span>
              <h2 className={styles.sectionTitle}>Certifications & Achievements</h2>
            </div>
            
            <div className={styles.sectionBody}>
              <div className={styles.skillsGrid}>
                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Certifications</h4>
                  <ul className={styles.expList} style={{ paddingLeft: '1rem' }}>
                    {certifications.map((cert, idx) => (
                      <li key={idx} style={{ marginBottom: '0.5rem', color: 'var(--text-color)' }}>{cert}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Achievements</h4>
                  <ul className={styles.expList} style={{ paddingLeft: '1rem' }}>
                    {achievements.map((ach, idx) => (
                      <li key={idx} style={{ marginBottom: '0.5rem', color: 'var(--text-color)' }}>
                        <strong>{ach.title}</strong> - {ach.detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>

        </div>

        <footer className={styles.footer}>
          <Link href="/projects" className={styles.footerLink}>
            View my projects →
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default AboutPage;
