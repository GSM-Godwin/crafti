'use client'

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full flex items-center justify-between px-4 md:px-12 py-4 bg-white z-50 relative">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        <Image src="/assets/logo.png" alt="Crafti Logo" width={120} height={40} priority />
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-8">
        {navLinks.map(link => (
          <Link key={link.name} href={link.href} className="text-black font-medium hover:underline transition">
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Chat Button */}
      <button className="ml-4 px-4 py-2 bg-black text-white rounded-full text-sm font-semibold hidden md:block">
        Chat
      </button>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block h-0.5 w-6 bg-black mb-1 transition-transform ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`block h-0.5 w-6 bg-black mb-1 ${menuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block h-0.5 w-6 bg-black transition-transform ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center py-6 md:hidden animate-fade-in z-40">
          {navLinks.map(link => (
            <Link
              key={link.name}
              href={link.href}
              className="py-2 text-lg font-medium text-black hover:underline w-full text-center"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <button className="mt-4 px-4 py-2 bg-black text-white rounded-full text-sm font-semibold">
            Chat
          </button>
        </div>
      )}
    </header>
  );
} 