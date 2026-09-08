import { Project, SpecBlock, AcademicRecord } from '../types';

export const SPEC_BLOCKS: SpecBlock[] = [
  {
    specId: 'SPEC_01',
    title: 'PYTHON AUTOMATION INTERN',
    desc: 'Specializing in headless browser drivers, DOM lifecycle synchronizers, and resilient backend automation pipelines.',
    badge: 'ACTIVE_EXPERIENCE',
  },
  {
    specId: 'SPEC_02',
    title: 'TECH ENTHUSIAST',
    desc: 'Passionate about distributed system APIs, web scraping engineering, algorithmic workflows, and developer productivity tools.',
    badge: 'CORE_FOCUS',
  },
  {
    specId: 'SPEC_03',
    title: 'ENGINEERING STUDENT',
    desc: 'Pursuing undergraduate B.Tech with focused academic rigor in software architecture, computation theory, and data structures.',
    badge: 'FOUNDATION',
  },
];

export const TECH_STACK: string[] = [
  'Python',
  'C',
  'C++',
  'HTML',
  'Selenium',
  'REST APIs',
  'Web Scraping',
  'SMTP/SMS Alerts',
  'Speech Processing (pyttsx3)',
];

export const ACADEMIC_RECORDS: AcademicRecord[] = [
  {
    level: 'UNDERGRADUATE',
    degree: 'B.Tech (Pursuing)',
    institution: 'REVA University',
  },
  {
    level: 'PRE-UNIVERSITY',
    degree: 'PUC',
    institution: 'Trisha Vidya PU College',
  },
  {
    level: 'PRIMARY & SECONDARY',
    degree: 'Schooling',
    institution: 'KPS Bellare',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'whatsapp-automation',
    num: '01/',
    title: 'State-Aware WhatsApp Automation Engine',
    tags: ['Python', 'Browser Automation', 'State Machine Design'],
    summary: 'Engineered a modular pipeline featuring state tracking and error-resilient message routing.',
    architecture: 'Selenium WebDriver • Deterministic Finite Automaton (DFA) • Dynamic XPath Heuristics',
    keyFeatures: [
      'Self-healing selectors robust to frequent WhatsApp Web DOM updates',
      'Non-blocking message queues with automated exponential backoff retry algorithms',
      'Real-time session persistence ensuring zero re-authentication overhead',
      'Configurable throttles to avoid automated activity flags',
    ],
    githubUrl: 'https://github.com/bhavishkulal',
  },
  {
    id: 'linkedin-scraper',
    num: '02/',
    title: 'LinkedIn Content Interaction & Scraping Suite',
    tags: ['Python', 'Selenium', 'Web Scraping'],
    summary: 'Constructed an automated interaction framework handling dynamic DOM rendering, infinite scroll parsing, session persistence, and data extraction.',
    architecture: 'Headless Chromium • MutationObserver Emulation • Session Cookie Management',
    keyFeatures: [
      'Virtual scroll pagination parser handling lazily loaded feed elements',
      'Targeted payload extraction for posts, reactions, engagement analytics, and author metrics',
      'Anti-detection timing jitter and randomized mouse-vector movement patterns',
      'Structured export pipeline delivering normalized JSON, CSV, and SQLite datasets',
    ],
    githubUrl: 'https://github.com/bhavishkulal',
  },
  {
    id: 'iss-alerter',
    num: '03/',
    title: 'ISS Location Alerter',
    tags: ['Python', 'REST APIs', 'SMTP'],
    summary: 'Built a real-time orbital tracking script sending automated email alerts during dark sky visibility.',
    architecture: 'OpenNotify Orbital API • Sunrise-Sunset Ephemeris API • TLS-Encrypted SMTP Protocol',
    keyFeatures: [
      'Coordinate geodesic proximity math calculating line-of-sight elevation angles (+/- 5°)',
      'Solar angle astronomical calculation ensuring alerts trigger exclusively when the sky is dark',
      'Automated background daemon with scheduled polling intervals and lightweight memory footprint',
      'Templated MIME email notifications with real-time pass trajectory times',
    ],
    githubUrl: 'https://github.com/bhavishkulal',
  },
  {
    id: 'rain-alerter',
    num: '04/',
    title: 'Automated Rain Alert System',
    tags: ['Python', 'OpenWeatherMap API'],
    summary: 'Implemented an automated forecast monitoring engine querying 12-hour precipitation slices.',
    architecture: 'OpenWeatherMap One Call API v3 • Weather Condition Codes Parsing • Automated Dispatcher',
    keyFeatures: [
      'Parses forward 12-hour hourly forecast arrays filtering for meteorological WMO rain condition codes',
      'Early morning automated execution pipeline dispatching proactive status notifications',
      'Fault-tolerant HTTP client with network timeout recovery and offline logging',
      'Multi-channel dispatch support: SMS protocol and authenticated SMTP notifications',
    ],
    githubUrl: 'https://github.com/bhavishkulal',
  },
  {
    id: 'jerry-assistant',
    num: '05/',
    title: 'Jerry - Desktop Virtual Assistant',
    tags: ['Python', 'SpeechRecognition', 'OS Automation'],
    summary: 'Voice-controlled virtual assistant capable of speech-to-text processing, desktop task automation, and status reporting.',
    architecture: 'Google Speech API / CMU Sphinx • PyTTSx3 Offline Speech Engine • Subprocess OS Hooks',
    keyFeatures: [
      'Dual speech input pipeline with ambient noise auto-calibration and threshold adjustment',
      'System-level execution hooks for app launching, volume calibration, and terminal script triggering',
      'Automated web searching, Wikipedia summary audio readout, and live weather briefing',
      'Lightweight offline-first fallback capabilities for key system control routines',
    ],
    githubUrl: 'https://github.com/bhavishkulal',
  },
];
