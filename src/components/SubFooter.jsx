import React from 'react'

const SubFooter = () => {
    return (
        <section class="mt-10 overflow-hidden">
            <div class="bg-[#c0392b] w-full h-80 flex flex-wrap">
                <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center md:justify-between w-full">
                    <div class="p-2">
                        <p class="text-[#ffffffd5] text-sm IBM-plex-sans">Limited Drops <i class="ri-arrow-right-long-line"></i> While Stocks Lost</p>
                        <h1 class="changa-one text-5xl sm:text-8xl">
                            VOID 
                            <br />
                            SERIES
                        </h1>
                    </div>
                    <h3 class="text-[8rem] md:text-[11rem] text-[#ffffff1e] md:ml-25 lg:ml-100 -mt-30 -ml-10 md:mt-0 bebas-neue">SABOTAGE</h3>
                    <div class="flex justify-center">
                        <div>
                            <button class="bg-white text-[#c0392b] px-10 py-3 text-sm hover:bg-black hover:text-white transition-all duration-200 cursor-pointer z-100 lg:ml-20">
                                SHOP THE DROP
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SubFooter