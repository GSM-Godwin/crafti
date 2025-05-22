'use client'
import { useState } from 'react';
import Image from 'next/image';

const offers = [
  {
    number: '01',
    title: 'GRAPHICS DESIGN',
    description:
      'We create visually compelling graphics that communicate your brand message and captivate your audience.',
  },
  {
    number: '02',
    title: 'UI/UX DESIGN',
    description:
      'Our UI/UX designs are user-centric, ensuring seamless and enjoyable digital experiences.',
  },
  {
    number: '03',
    title: '3D ARCHITECTURAL MODELLING',
    description:
      'Bring your architectural visions to life with our detailed and realistic 3D models.',
  },
  {
    number: '04',
    title: '2D CHARACTER DESIGN',
    description:
      "We craft unique and memorable 2D characters tailored to your project's needs.",
  },
  {
    number: '05',
    title: 'MOTION GRAPHICS',
    description:
      'Engage your audience with dynamic motion graphics that tell your story in motion.',
  },
  {
    number: '06',
    title: 'WEB DEVELOPMENT',
    description:
      'We build robust, scalable, and beautiful websites tailored to your business goals.',
  },
];

export default function WhatWeOffer() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full max-w-5xl mx-auto mt-2 md:mt-5 px-4 md:px-0">
      <h2 className="text-center text-lg md:text-xl font-semibold mb-8 tracking-widest">WHAT WE OFFER</h2>
      <div className="flex flex-col space-y-16 md:space-y-24">
        {offers.map((offer, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={offer.number} className="relative overflow-hidden">
              {/* Main container with number and title */}
              <div className="relative">
                {/* Big Number */}
                <span 
                  className="font-extrabold text-black select-none whitespace-nowrap text-[5rem] md:text-[8rem] lg:text-[12rem] block" 
                  style={{lineHeight: "0.85"}}
                >
                  {offer.number}
                </span>
                
                {/* Title and Toggle Button - now properly constrained */}
                <div 
                  className={`absolute left-[40%] sm:left-[50%] right-4 transition-all duration-500 ease-in-out z-[1000] ${
                    isOpen ? 'top-0' : 'top-[70%] -translate-y-1/2'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-10 md:gap-4">
                    <h3 className="text-xs md:text-2xl lg:text-3xl font-normal tracking-wide whitespace-normal break-words max-w-[80%]">
                      {offer.title}
                    </h3>
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                      className="flex-shrink-0 h-5 w-5 md:h-8 md:w-8 rounded-full bg-black text-white flex items-center justify-center focus:outline-none"
                    >
                      {isOpen ? '−' : '+'}
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Description Text - closer to title on mobile */}
              <div 
                className={`transition-all duration-500 ease-in-out overflow-hidden mt-5 ${
                  isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                }`}
                style={{
                  position: 'absolute',
                  top: '3.5rem',
                  left: '40%',
                  right: '1rem',
                  transitionDelay: isOpen ? '200ms' : '0ms'
                }}
              >
                <p className="text-xs md:text-base text-justify text-gray-700 leading-tight md:leading-normal">
                  We offer visually compelling and <span className="text-blue-500">brand-centric</span> {offer.title.toLowerCase()} services that communicate your message with clarity and creativity. From logos and posters to full-scale branding packages, we deliver designs that leave a lasting impression.
                </p>
              </div>
              
              {/* Images Container - positioned closer on mobile */}
              <div 
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                }`}
                style={{
                  position: 'absolute',
                  top: '10rem',
                  left: 0,
                  right: 0,
                  transitionDelay: isOpen ? '300ms' : '0ms'
                }}
              >
                <div className="flex gap-2 md:gap-4 w-full">
                  {/* Left image */}
                  <div className="w-[50%] md:w-[60%] h-20 md:h-36 rounded-lg overflow-hidden shadow-lg bg-gray-100">
                    <Image
                      src="/assets/offer.png"
                      alt={offer.title}
                      width={400}
                      height={300}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  {/* Right image */}
                  <div className="flex-1 h-20 md:h-36 rounded-lg overflow-hidden shadow-lg bg-gray-100">
                    <Image
                      src="/assets/offer.png"
                      alt={offer.title}
                      width={400}
                      height={300}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>
              
              {/* Horizontal Line - starts lower */}
              <div 
                className={`w-full h-px bg-gray-300 transition-all duration-500 ease-in-out border-t border-gray-300 absolute ${
                  isOpen ? 'top-[calc(8rem+6rem)] md:top-[calc(12rem+9.5rem)]' : 'top-[80%]'
                }`}
              />
              
              {/* Spacer for expanded state */}
              <div className={`transition-all duration-500 ease-in-out ${isOpen ? 'h-60 md:h-96' : 'h-0'}`} />
            </div>
          );
        })}
      </div>
    </section>
  );
}