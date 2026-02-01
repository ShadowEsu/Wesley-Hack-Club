
import React from 'react';
import { Terminal, Globe, Cpu, Gamepad2, Brain, Code2 } from 'lucide-react';
import { Event, Project, Stat } from './types';

export const EVENTS: Event[] = [
  { id: '1', title: 'Capture the Flag Night', date: 'Oct 15', description: 'Solve cybersecurity puzzles and breach the firewall in our competitive hacking night.', type: 'Competition' },
  { id: '2', title: 'Mini Hackathon Sprint', date: 'Oct 22', description: 'Build a working prototype in just 3 hours based on a surprise theme.', type: 'Hackathon' },
  { id: '3', title: 'Intro to Web Dev', date: 'Oct 29', description: 'Learn the basics of HTML, CSS, and JS to build your first portfolio site.', type: 'Workshop' },
  { id: '4', title: 'Python Automation', date: 'Nov 5', description: 'Script away your repetitive tasks using Python libraries and smart logic.', type: 'Automation' },
  { id: '5', title: 'Game Jam', date: 'Nov 12', description: 'Create a mini arcade game using Kaboom.js or Three.js in a collaborative jam.', type: 'Creative' },
  { id: '6', title: 'Guest Speaker', date: 'Nov 19', description: 'Industry veteran from Big Tech shares insights on software engineering careers.', type: 'Talk' },
];

export const PROJECTS: Project[] = [
  { id: '1', title: 'CyberExtension', category: 'Chrome Extension', description: 'Injects neon themes into every website you visit.', image: 'https://picsum.photos/seed/p1/600/400', github: '#' },
  { id: '2', title: 'Neon Runner', category: 'Game', description: 'A fast-paced endless runner built with Three.js.', image: 'https://picsum.photos/seed/p2/600/400', github: '#' },
  { id: '3', title: 'Club Portal', category: 'Web App', description: 'Internal management tool for school clubs.', image: 'https://picsum.photos/seed/p3/600/400', github: '#' },
  { id: '4', title: 'ShellGPT', category: 'CLI Tool', description: 'Terminal-based AI assistant for bash scripting.', image: 'https://picsum.photos/seed/p4/600/400', github: '#' },
];

export const STATS: Stat[] = [
  { label: 'Members', value: 20, suffix: '+' },
  { label: 'Projects Shipped', value: 15, suffix: '+' },
  { label: 'Events Hosted', value: 10, suffix: '+' },
  { label: 'Hackathons Joined', value: 3, suffix: '+' },
];

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Events', href: '#events' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];
