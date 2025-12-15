'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
  const links = [
    { href: '#home', label: 'Home' },
    { href: '#research', label: 'Research' },
    { href: '#people', label: 'People' },
    { href: '#publications', label: 'Publications' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-cyan-500/20"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="#home" className="text-2xl font-bold">
            <span className="text-cyan-500">AIM</span>
            <span className="text-violet-500"> Lab</span>
          </Link>
          
          <div className="flex gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-300 hover:text-cyan-500 transition-colors duration-300 font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
