// import React from 'react'
import ClientBanner from "./ClientBanner";

function Hero() {
  return (
    <header className='md:grid md:grid-cols-2 flex flex-col-reverse gap-5  md:gap-14 md:max-w-[1000px]   lg:max-w-[1150px] mx-auto mt-8'>
      <div className='flex flex-col gap-4 md:mt-28  text-center md:text-left p-4'>
        <h1 className='text-3xl md:text-6xl font-bold'>
          Make <br className='hidden md:block' /> Remote Work
        </h1>

        <p className='text-gray-500 md:text-lg text-base md:pr-10 p-0'>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>

        <button className='bg-black w-fit mx-auto md:mx-0 px-4 py-2 rounded-2xl text-white border-2 border-transparent hover:border-black hover:text-black transition hover:bg-transparent'>
          Learn More
        </button>

        <ClientBanner />
      </div>
      <div>
        <img
          className='h-3/4 ml-20 hidden md:block'
          src='/image-hero-desktop.png'
          alt='Hero Image of our mascot'
        />

        <img
          className='block md:hidden mt-10'
          src='/image-hero-mobile.png'
          alt='Hero Image of our mascot'
        />
      </div>
    </header>
  );
}

export default Hero;
