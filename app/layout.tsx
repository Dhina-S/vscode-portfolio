import type { Metadata } from 'next';
import Script from 'next/script';

import Layout from '@/components/Layout';

import '@/styles/globals.css';
import '@/styles/themes.css';

export const metadata: Metadata = {
  title: {
    default: 'Dhina S | Software Engineer | Java Backend Developer',
    template: 'Dhina S | %s',
  },
  description:
    "Dhina S is an ECE Engineer building backend systems, REST APIs and full-stack applications with a focus on Java.",
  keywords: [
    'dhina s.',
    'java backend developer',
    'software engineer',
    'full stack developer',
    'spring boot',
    'rest api',
    'portfolio'
  ],
  openGraph: {
    title: "Dhina S | Portfolio",
    description:
      "A Software Engineer focusing on Java backend development.",
    images: [''],
    url: 'https://dhinas-portfolio.vercel.app',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

const themeScript = `
  (function() {
    const theme = localStorage.getItem('theme');
    if (theme) {
      document.documentElement.setAttribute('data-theme', theme);
    }
  })();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="theme-script" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
