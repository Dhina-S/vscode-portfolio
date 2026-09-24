import styles from '@/styles/ContactCode.module.css';
import { personalInfo } from '@/data/personalInfo';
import { codingProfiles } from '@/data/codingProfiles';

const contactItems = [
  {
    social: 'email',
    link: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    social: 'github',
    link: 'Dhina-S',
    href: personalInfo.github,
  },
  {
    social: 'linkedin',
    link: 'dhina-S',
    href: personalInfo.linkedin,
  },
  {
    social: 'leetcode',
    link: 'Dhina-Selvaraj',
    href: codingProfiles.leetcode,
  }
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener noreferrer">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
