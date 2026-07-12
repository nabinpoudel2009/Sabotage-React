import React from 'react'
import { FaArrowDown } from "react-icons/fa";

const Home = () => {
    return (
        <section className='overflow-hidden'>
            <div className="h-screen -mt-17 sm:min-h-130 md:min-h-140 w-full flex flex-col items-center justify-center">
                <p className='uppercase text-[#d02e20eb] source-code-pro mb-5 text-xs sm:text-sm md:text-base'>New Drop — Spring 2025</p>
                <h1 className="scale-y-120 absolute bebas-neue select-none pointer-events-none text-[17vw] overflow-hidden sm:text-[13vw] mt-10 font-black uppercase tracking-[0.3em] text-white/15 sm:text-white/10 ml-5 sm:ml-10 whitespace-nowrap">
                    SABOTAGE
                </h1>
                <div className='text-center bebas-neue tracking-widest scale-y-120 z-50'>
                    <h3 className="uppercase text-6xl sm:text-[9rem]  text-neutral-200">wear the</h3>
                    <h3 className='uppercase text-7xl sm:text-[10rem] -mt-2 sm:-mt-4 md:-mt-6 text-[#d02e20eb]'>Rebellion</h3>
                </div>
                <div>
                    <p className='text-[#cccccc9e] uppercase mt-2 text-xs sm:text-sm'>Full range — tops · bottoms · accessories</p>
                </div>
                <div className='flex gap-x-5 mt-5 source-code-pro'>
                    <a href='' className='uppercase bg-white px-4 hover:bg-[#d02e20eb] transition-all duration-400 ease-in-out hover:text-white py-2 text-black '>Shop now</a>
                    <a href='' className='flex items-center justify-center uppercase border px-2 text-neutral-200 border-white/20 hover:border-white/50 transition-all duration-400 sm:text-base text-sm ease-in-out'>View Collection</a>
                </div>
                <div className='mt-10 grid justify-center'>
                    <FaArrowDown  className='animate-bounce text-neutral-500 text-sm sm:text-base md:text-lg'/>
                </div>
            </div>
        </section>
    )
}

export default Home