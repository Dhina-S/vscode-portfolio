'use client';

import { VscLinkExternal, VscCode } from 'react-icons/vsc';
import { motion } from 'framer-motion';

import styles from '@/styles/ProjectCard.module.css';

interface ProjectCardProps {
  project: {
    id: number;
    name: string;
    description: string;
    technologies: string[];
    features?: string[];
    github?: string;
    demo?: string;
    featured?: boolean;
  };
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.1, 0.4) }}
      className={styles.card}
    >
      <div className={styles.number}>
        <span>0{index}</span>
      </div>
      
      <div className={styles.content}>
        <div className={styles.main}>
          <div className={styles.header}>
            <div className={styles.logoWrapper}>
              <VscCode size={18} className={styles.logo} style={{ color: 'var(--accent-color)' }} />
            </div>
            <a 
              href={project.github !== 'PLACEHOLDER_GITHUB' ? project.github : '#'} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <h3 className={styles.title} style={{ cursor: 'pointer' }}>
                {project.name}
              </h3>
            </a>
          </div>
          <p className={styles.description}>{project.description}</p>
        </div>
        
        {project.demo && project.demo !== 'PLACEHOLDER_DEMO' && (
          <div className={styles.action}>
            <a 
              href={project.demo} 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.link}
            >
              View Project <VscLinkExternal size={14} />
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
