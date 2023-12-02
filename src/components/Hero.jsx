// import React from 'react'
import ClientBanner from "./ClientBanner";

function Hero() {
    return (
        <header className='md:grid md:grid-cols-2 flex flex-col-reverse gap-5 container max-w-6xl mx-auto md:mt-8 -mt-4 mb-8'>
            <div className='flex flex-col justify-between gap-4 md  text-center md:text-left'>
                <div className='md:space-y-10 space-y-5 max-w-xl md:mt-36 mt-4'>
                    <h1 className='text-3xl md:text-7xl font-bold px-2 md:p-3 '>
                        Make <br className='hidden md:block' /> Remote Work
                    </h1>

                    <p className='text-gray-500 md:text-lg text-base px-3 md:pr-10'>
                        Get your team in sync, no matter your location.
                        Streamline processes, create team rituals, and watch
                        productivity soar.
                    </p>

                    <button className='bg-black w-fit mx-auto md:mx-0 px-4 py-2 rounded-2xl text-white border-2 border-transparent hover:border-black hover:text-black transition hover:bg-transparent'>
                        Learn More
                    </button>
                </div>
                <ClientBanner />
            </div>
            <div>
                <img
                    className='w-[500px] ml-20 hidden md:block'
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
