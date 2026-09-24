import { Metadata } from 'next';
import Image from 'next/image';
import { VscLinkExternal } from 'react-icons/vsc';
import { LeetCodeUser, LeetCodeSolved } from '@/types';
import LeetCodeCalendar from '@/components/LeetCodeCalendar';
import styles from '@/styles/LeetCodePage.module.css';

export const metadata: Metadata = {
  title: 'LeetCode',
};

export const revalidate = 600;

const LEETCODE_USERNAME = 'DhinaSelvaraj';
const API_BASE = 'https://alfa-leetcode-api.onrender.com';

async function getLeetCodeData() {
  const [userRes, solvedRes, calendarRes] = await Promise.all([
    fetch(`${API_BASE}/${LEETCODE_USERNAME}`, { next: { revalidate: 600 } }),
    fetch(`${API_BASE}/${LEETCODE_USERNAME}/solved`, { next: { revalidate: 600 } }),
    fetch(`${API_BASE}/${LEETCODE_USERNAME}/calendar`, { next: { revalidate: 600 } }),
  ]);

  if (!userRes.ok || !solvedRes.ok || !calendarRes.ok) {
    throw new Error('Failed to fetch LeetCode data');
  }

  const user: LeetCodeUser = await userRes.json();
  const solved: LeetCodeSolved = await solvedRes.json();
  const calendarData = await calendarRes.json();
  return { user, solved, calendarData };
}

export default async function LeetCodePage() {
  const { user, solved, calendarData } = await getLeetCodeData();

  const totalProblems = 3372; // approximate total on LeetCode
  const easyTotal = 840;
  const mediumTotal = 1762;
  const hardTotal = 770;

  const easyPct = Math.round((solved.easySolved / easyTotal) * 100);
  const mediumPct = Math.round((solved.mediumSolved / mediumTotal) * 100);
  const hardPct = Math.round((solved.hardSolved / hardTotal) * 100);
  const totalPct = Math.round((solved.solvedProblem / totalProblems) * 100);

  return (
    <div className={styles.page}>
      <div className={styles.container}>

        {/* Header */}
        <header className={styles.header}>
          <div className={styles.profile}>
            <Image
              src={user.avatar || 'https://assets.leetcode.com/users/default_avatar.jpg'}
              className={styles.avatar}
              alt={user.username}
              width={80}
              height={80}
              priority
            />
            <div className={styles.profileInfo}>
              <h1 className={styles.name}>{user.username}</h1>
              <span className={styles.handle}>@{user.username}</span>
              <span className={styles.ranking}>Rank #{user.ranking.toLocaleString()}</span>
            </div>
          </div>

          <a
            href={`https://leetcode.com/u/${user.username}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.profileLink}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.426.475-.483a1.96 1.96 0 0 0 .157-2.554l-.01-.013a1.962 1.962 0 0 0-2.775-.226l-2.424 2.454a2.42 2.42 0 0 1-3.39.009l-4.298-4.213-.036-.036a2.39 2.39 0 0 1 .009-3.378l3.847-4.115 4.707-5.038a1.96 1.96 0 0 0 .157-2.554l-.01-.013a1.962 1.962 0 0 0-2.775-.226z"/>
            </svg>
            <span>View Profile</span>
            <VscLinkExternal size={14} />
          </a>
        </header>

        {/* Stats */}
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <span className={styles.statValue}>{solved.solvedProblem}</span>
            <span className={styles.statLabel}>Total Solved</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statValue} style={{ color: '#00b8a3' }}>{solved.easySolved}</span>
            <span className={styles.statLabel}>Easy</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statValue} style={{ color: '#ffc01e' }}>{solved.mediumSolved}</span>
            <span className={styles.statLabel}>Medium</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statValue} style={{ color: '#ff375f' }}>{solved.hardSolved}</span>
            <span className={styles.statLabel}>Hard</span>
          </div>
        </div>

        {/* Progress Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Problem Solving Progress</h2>

          <div className={styles.progressCard}>
            {/* Overall */}
            <div className={styles.progressItem}>
              <div className={styles.progressHeader}>
                <span className={styles.progressLabel}>All Problems</span>
                <span className={styles.progressCount}>{solved.solvedProblem} / {totalProblems}</span>
              </div>
              <div className={styles.progressBar}>
                <div className={styles.progressFill} style={{ width: `${totalPct}%`, background: 'var(--accent-color)' }} />
              </div>
            </div>

            {/* Easy */}
            <div className={styles.progressItem}>
              <div className={styles.progressHeader}>
                <span className={styles.progressLabel} style={{ color: '#00b8a3' }}>Easy</span>
                <span className={styles.progressCount}>{solved.easySolved} / {easyTotal} &nbsp;({easyPct}%)</span>
              </div>
              <div className={styles.progressBar}>
                <div className={styles.progressFill} style={{ width: `${easyPct}%`, background: '#00b8a3' }} />
              </div>
            </div>

            {/* Medium */}
            <div className={styles.progressItem}>
              <div className={styles.progressHeader}>
                <span className={styles.progressLabel} style={{ color: '#ffc01e' }}>Medium</span>
                <span className={styles.progressCount}>{solved.mediumSolved} / {mediumTotal} &nbsp;({mediumPct}%)</span>
              </div>
              <div className={styles.progressBar}>
                <div className={styles.progressFill} style={{ width: `${mediumPct}%`, background: '#ffc01e' }} />
              </div>
            </div>

            {/* Hard */}
            <div className={styles.progressItem}>
              <div className={styles.progressHeader}>
                <span className={styles.progressLabel} style={{ color: '#ff375f' }}>Hard</span>
                <span className={styles.progressCount}>{solved.hardSolved} / {hardTotal} &nbsp;({hardPct}%)</span>
              </div>
              <div className={styles.progressBar}>
                <div className={styles.progressFill} style={{ width: `${hardPct}%`, background: '#ff375f' }} />
              </div>
            </div>
          </div>
        </section>

        {/* Contributions */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Submission Activity</h2>
          <div className={styles.contributions}>
            <LeetCodeCalendar submissionCalendar={calendarData.submissionCalendar} />
          </div>
        </section>

      </div>
    </div>
  );
}
