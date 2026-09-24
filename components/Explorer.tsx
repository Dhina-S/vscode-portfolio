'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { 
  VscChevronRight, 
  VscChevronDown, 
  VscCode, 
  VscMarkdown, 
  VscJson 
} from 'react-icons/vsc';
import { TbBrandReact } from 'react-icons/tb';

import styles from '@/styles/Explorer.module.css';

const explorerItems = [
  {
    name: 'home.tsx',
    path: '/',
    icon: <TbBrandReact color="#61dafb" />,
  },
  {
    name: 'about.html',
    path: '/about',
    icon: <VscCode color="#e34c26" />,
  },
  {
    name: 'contact.css',
    path: '/contact',
    icon: <VscCode color="#2965f1" />,
  },
  {
    name: 'projects.js',
    path: '/projects',
    icon: <VscCode color="#f7df1e" />,
  },
  {
    name: 'github.md',
    path: '/github',
    icon: <VscMarkdown color="#696969" />,
  },
  {
    name: 'leetcode.ts',
    path: '/leetcode',
    icon: <VscCode color="#ffa116" />,
  },
];

const Explorer = () => {
  const [portfolioOpen, setPortfolioOpen] = useState(true);
  const pathname = usePathname();

  return (
    <div className={styles.explorer}>
      <p className={styles.title}>EXPLORER</p>
      <div>
        <div 
          className={styles.folder} 
          onClick={() => setPortfolioOpen(!portfolioOpen)}
        >
          {portfolioOpen ? <VscChevronDown /> : <VscChevronRight />}
          <span className={styles.folderName}>PORTFOLIO</span>
        </div>
        
        <div 
          className={styles.files} 
          style={portfolioOpen ? { display: 'block' } : { display: 'none' }}
        >
          {explorerItems.map((item) => (
            <Link href={item.path} key={item.name}>
              <div 
                className={`${styles.file} ${
                  pathname === item.path ? styles.active : ''
                }`}
              >
                {item.icon} <span className={styles.fileName}>{item.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explorer;
