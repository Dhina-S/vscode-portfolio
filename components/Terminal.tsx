'use client';

import { useState, useRef, useEffect } from 'react';
import { VscTerminal, VscClose } from 'react-icons/vsc';

import { THEME_KEYS } from '@/lib/themes';
import { personalInfo } from '@/data/personalInfo';
import { projects } from '@/data/projects';
import { skills } from '@/data/skills';
import { experience } from '@/data/experience';
import { education } from '@/data/education';
import { certifications } from '@/data/certifications';
import styles from '@/styles/Terminal.module.css';

interface TerminalLine {
  type: 'input' | 'output' | 'error';
  content: string;
}

const commands: Record<string, () => string[]> = {
  help: () => [
    'Available commands:',
    '  help           - Show this help message',
    '  about          - About me',
    '  skills         - My technical skills',
    '  projects       - View my projects',
    '  experience     - View my experience',
    '  education      - View my education',
    '  certifications - View my certifications',
    '  contact        - Contact information',
    '  github         - My GitHub profile',
    '  theme          - Change theme (usage: theme <name>)',
    '  themes         - List available themes',
    '  clear          - Clear terminal',
  ],
  about: () => [
    `Hi, I'm ${personalInfo.name}!`,
    personalInfo.primaryRole,
    personalInfo.secondaryRole
  ],
  skills: () => [
    'Technical Skills:',
    `  Backend:    ${skills.backend.join(', ')}`,
    `  Frontend:   ${skills.frontend.join(', ')}`,
    `  Database:   ${skills.database.join(', ')}`,
    `  Systems:    ${skills.systems.join(', ')}`,
    `  DevOps:     ${skills.devops.join(', ')}`,
    `  IoT:        ${skills.iot.join(', ')}`
  ],
  projects: () => {
    const res = ['Featured Projects:'];
    projects.forEach((p, i) => {
      res.push(`  ${i + 1}. ${p.name} - ${p.description}`);
    });
    return res;
  },
  experience: () => {
    const res = ['Experience:'];
    experience.forEach((e) => {
      res.push(`  - ${e.role} @ ${e.company} (${e.period})`);
    });
    return res;
  },
  education: () => [
    'Education:',
    `  ${education.degree}`,
    `  ${education.institution}`,
    `  CGPA: ${education.cgpa} | ${education.graduation}`
  ],
  certifications: () => {
    const res = ['Certifications:'];
    certifications.forEach(c => res.push(`  - ${c}`));
    return res;
  },
  contact: () => [
    'Contact Information:',
    `  Email:    ${personalInfo.email}`,
    `  LinkedIn: ${personalInfo.linkedin}`
  ],
  github: () => [
    `GitHub Profile: ${personalInfo.github}`
  ],
  themes: () => [
    'Available themes:',
    ...THEME_KEYS.map((theme, i) => `  ${theme}${i === 0 ? '  (default)' : ''}`),
    '',
    'Use "theme <name>" to change theme.',
  ]
};

const processCommand = (input: string): TerminalLine[] => {
  const trimmed = input.trim();
  const lines: TerminalLine[] = [{ type: 'input', content: `$ ${trimmed}` }];

  if (!trimmed) {
    return lines;
  }

  const parts = trimmed.split(' ');
  const cmd = parts[0].toLowerCase();
  const args = parts.slice(1);

  if (cmd === 'clear') {
    return [];
  }

  if (cmd === 'theme' && args[0]) {
    if ((THEME_KEYS as string[]).includes(args[0])) {
      document.documentElement.setAttribute('data-theme', args[0]);
      localStorage.setItem('theme', args[0]);
      lines.push({ type: 'output', content: `Theme changed to ${args[0]}` });
    } else {
      lines.push({ type: 'error', content: `Unknown theme: ${args[0]}. Type "themes" for available options.` });
    }
    return lines;
  }

  if (cmd === 'theme') {
    lines.push({ type: 'error', content: 'Usage: theme <name>. Type "themes" for available options.' });
    return lines;
  }

  if (commands[cmd]) {
    const output = commands[cmd]();
    output.forEach(line => {
      lines.push({ type: 'output', content: line });
    });
  } else {
    lines.push({ type: 'error', content: `Command not found: ${cmd}. Type "help" for available commands.` });
  }

  return lines;
};

interface TerminalProps {
  onToggle: () => void;
}

const Terminal = ({ onToggle }: TerminalProps) => {
  const [lines, setLines] = useState<TerminalLine[]>([
    { type: 'output', content: 'Welcome to the interactive terminal!' },
    { type: 'output', content: 'Type "help" for available commands.' },
    { type: 'output', content: '' },
  ]);
  const [input, setInput] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim();

    if (trimmed === 'clear') {
      setLines([]);
    } else {
      const newLines = processCommand(input);
      setLines(prev => [...prev, ...newLines]);
    }

    if (trimmed) {
      setCommandHistory(prev => [...prev, trimmed]);
    }
    setHistoryIndex(-1);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex < commandHistory.length - 1 ? historyIndex + 1 : historyIndex;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex] || '');
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex] || '');
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  const handleTerminalClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className={styles.terminal}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <VscTerminal className={styles.terminalIcon} />
          <span>Terminal</span>
        </div>
        <div className={styles.headerRight}>
          <button onClick={onToggle} className={styles.headerBtn} title="Close">
            <VscClose size={14} />
          </button>
        </div>
      </div>
      <div className={styles.body} ref={terminalRef} onClick={handleTerminalClick}>
        {lines.map((line, index) => (
          <div
            key={index}
            className={`${styles.line} ${
              line.type === 'error' ? styles.error : line.type === 'input' ? styles.input : ''
            }`}
          >
            {line.content}
          </div>
        ))}
        <form onSubmit={handleSubmit} className={styles.inputLine}>
          <span className={styles.prompt}>$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className={styles.input}
            autoComplete="off"
            spellCheck={false}
          />
        </form>
      </div>
    </div>
  );
};

export default Terminal;
