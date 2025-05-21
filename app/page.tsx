import Header from './components/Header';
import Hero from './components/Hero';
import WhatWeOffer from './components/WhatWeOffer';

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen max-w-[1440px]">
      {/* <Header /> */}
      <Hero />
      <WhatWeOffer />

    </div>
  );
}
