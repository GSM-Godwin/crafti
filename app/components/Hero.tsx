'use client'

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { BsChat } from 'react-icons/bs';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
];

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section
      className="flex flex-col items-center w-full h-fit bg-white overflow-hidden"
      style={{
        backgroundImage: 'url(/assets/hero.gif)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <header className="w-full flex items-center justify-between bg-transparent z-50 relative px-5 md:px-10 lg:px-20 mt-5 md:mt-10">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/assets/logo.png" alt="Crafti Logo" width={120} height={40} priority />
        </Link>

        <div className='flex items-center gap-6'>
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link key={link.name} href={link.href} className="text-black text-[16px] font-normal leading-[130%] hover:underline transition">
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Chat Button */}
          <button className="ml-4 px-4 py-1 bg-black text-white rounded-full md:flex items-center justify-center gap-1 hidden">
            <BsChat />
            <span className='text-[16px] pt-[2px] font-normal'>Chat</span>
          </button>
        </div>


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
            <button className="mt-4 px-4 py-1 bg-black text-white flex items-center justify-center gap-1 rounded-full">
              <BsChat />
              <span className='text-[16px] pt-[2px] font-normal'>Chat</span>
            </button>
          </div>
        )}
      </header>
      <section
        className="w-full flex flex-col justify-between py-4 md:py-8 px-5 md:px-10 lg:px-20">
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left z-10">
          <div className='flex w-full justify-between items-center'>
            <span className="block text-[50px] md:text-[100px] lg:text-[200px] font-normal tracking-[-6px] md:tracking-[-12px] lg:tracking-[-25px] leading-[100%]">DESIGN</span>
            <div className='w-[90px] h-[37px] md:w-[180px] md:h-[85px] lg:w-[369px] lg:h-[146px] bg-[#EDEDED] rounded-[91px]'></div>
          </div>
          <div className='flex w-full justify-between items-center'>
            <div className='w-[90px] h-[37px] md:w-[180px] md:h-[85px] lg:w-[369px] lg:h-[146px] bg-transparent cursor-pointer rounded-[91px] overflow-hidden'>
              <Image
                src="/assets/develop.png"
                alt="Placeholder"
                className="object-cover cursor-pointer z-50"
                width={369}
                height={146}
                priority
              />
            </div>
            <span className="block text-[50px] md:text-[100px] lg:text-[200px] font-normal tracking-[-6px] md:tracking-[-12px] lg:tracking-[-25px] leading-[100%]">DEVELOP</span>
          </div>
          <div className='flex w-full justify-between items-center'>
            <span className="block text-[50px] md:text-[100px] lg:text-[200px] font-normal tracking-[-6px] md:tracking-[-12px] lg:tracking-[-25px] leading-[100%]">INSPIRE</span>
            <div className='w-[90px] h-[37px] md:w-[180px] md:h-[85px] lg:w-[369px] lg:h-[206px] bg-transparent rounded-[91px] cursor-pointer overflow-hidden'>
              <Image
                src="/assets/inspire.png"
                alt="Placeholder"
                className="lg:object-cover flex items-center justify-center cursor-pointer z-50"
                width={369}
                height={206}
                priority
              />
            </div>
          </div>
          <div className='flex flex-col md:flex-row w-full items-start justify-between mt-5 md:gap-5'>
            <button className="mt-4 mb-6 px-6 w-full md:w-fit py-2 bg-black text-white rounded-full text-base font-semibold hover:bg-gray-900 transition">
              GET IN TOUCH
            </button>
            <p className="max-w-[720px] leading-[120%] text-[10px] text-justify md:text-base">
              Crafti Studio is a multidisciplinary creative and technology studio that combines data and exceptional digital experiences. We deliver innovative solutions across graphics design, UI/UX, 3D modeling, character design, motion graphics, and web development.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
} 