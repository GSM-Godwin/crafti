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
    <section className="w-full max-w-5xl mx-auto mt-2 md:mt-5 px-2 md:px-0">
      <h2 className="text-center text-lg md:text-xl font-semibold mb-8 tracking-widest">WHAT WE OFFER</h2>
      <div className="flex flex-col">
        {offers.map((offer, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={offer.number} className="relative mb-6">
              {/* Container with clipping */}
              <div className="relative">
                {/* Number container with overflow hidden */}
                <div className="relative overflow-hidden" style={{ height: isOpen ? 'auto' : '85%' }}>
                  {/* Large Number */}
                  <span
                    className="font-extrabold text-black select-none whitespace-nowrap text-[4rem] md:text-[8rem] lg:text-[300px] leading-none block transition-transform duration-500"
                    style={{ lineHeight: 0.8 }}
                  >
                    {offer.number}
                  </span>
                </div>
                
                {/* Button with title */}
                <button
                  className="absolute bottom-0 left-0 right-0 flex items-center justify-between pl-4 md:pl-8 pr-2 md:pr-8 pb-1 md:pb-2 focus:outline-none z-20"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                >
                  <span className="text-lg md:text-2xl lg:text-[40px] font-bold text-black tracking-wide select-none translate-y-[-5px] md:translate-y-[-10px]">
                    {offer.title}
                  </span>
                  <span
                    className="ml-4 w-4 h-4 lg:h-8 lg:w-8 lg:pb-1.5 lg:text-3xl text-center flex items-center justify-center bg-black font-bold text-white rounded-full select-none transition-transform duration-300 translate-y-[-5px] md:translate-y-[-10px]"
                  >
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                
                {/* Animated Border - now spans entire width and animates down */}
                <div 
                  className={`absolute left-0 right-0 bg-gray-300 transition-all duration-500 ease-in-out z-10 border-b-2 border-gray-300`}
                  style={{
                    top: isOpen ? 'auto' : '85%',
                    bottom: isOpen ? '0' : 'auto', 
                    width: '100%',
                    transform: `translateY(${isOpen ? '100%' : '0'})`,
                  }}
                />
              </div>
              
              {/* Reveal Content with increased z-index */}
              <div
                className={`relative z-30 transition-all duration-500 ease-in-out overflow-hidden ${
                  isOpen ? 'max-h-96 opacity-100 mt-8' : 'max-h-0 opacity-0 mt-0'
                }`}
              >
                <div className="grid grid-cols-1 md:grid-cols-[1fr_220px] items-center gap-6 md:gap-12 px-2 md:px-16 py-4">
                  <div>
                    <p className="text-base md:text-lg text-gray-700 mb-2">{offer.description}</p>
                  </div>
                  <div className="justify-self-center md:justify-self-end">
                    <div className="w-44 h-28 md:w-56 md:h-36 rounded-2xl overflow-hidden shadow-lg bg-gray-100">
                      <Image
                        src="/assets/offer.png"
                        alt={offer.title}
                        width={224}
                        height={144}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}