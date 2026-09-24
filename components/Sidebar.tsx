'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  VscFiles, 
  VscGithubAlt, 
  VscCode, 
  VscMail, 
  VscSettingsGear,
  VscTerminalBash,
} from 'react-icons/vsc';

import styles from '@/styles/Sidebar.module.css';

const sidebarBottomItems = [
  {
    Icon: VscSettingsGear,
    path: '/settings',
    label: 'Settings',
  },
];

const sidebarTopItems = [
  {
    Icon: VscFiles,
    path: '/',
    label: 'Explorer',
  },
  {
    Icon: VscGithubAlt,
    path: '/github',
    label: 'GitHub',
  },
  {
    Icon: VscTerminalBash,
    path: '/leetcode',
    label: 'LeetCode',
  },
  {
    Icon: VscCode,
    path: '/projects',
    label: 'Projects',
  },
  {
    Icon: VscMail,
    path: '/contact',
    label: 'Contact',
  },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarTop}>
        {sidebarTopItems.map(({ Icon, path, label }) => (
          <Link href={path} key={path} className="sidebar-link">
            <div
              className={`${styles.iconContainer} ${
                pathname === path ? styles.active : ''
              }`}
              title={label}
            >
              <Icon
                fill={
                  pathname === path
                    ? 'rgb(225, 228, 232)'
                    : 'rgb(106, 115, 125)'
                }
                className={styles.icon}
              />
            </div>
          </Link>
        ))}
      </div>
      <div className={styles.sidebarBottom}>
        {sidebarBottomItems.map(({ Icon, path, label }) => (
          <Link href={path} key={path} className="sidebar-link">
            <div 
              className={styles.iconContainer}
              title={label}
            >
              <Icon
                fill={
                  pathname === path
                    ? 'rgb(225, 228, 232)'
                    : 'rgb(106, 115, 125)'
                }
                className={styles.icon}
              />
            </div>
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
