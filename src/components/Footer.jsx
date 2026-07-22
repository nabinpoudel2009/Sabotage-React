import React, { useState } from 'react'
import { NavLink } from 'react-router';

const Footer = () => {

    return (
        <footer class="bg-[#121212e6] text-[#ffffff] px-5 py-2 mt-5">
        <section class="px-4 flex gap-x-15">
            <div className=''>
                <NavLink to={'/'} className='flex text-neutral-200 tracking-widest font-bold items-center share-tech text-2xl sm:text-3xl'>
                        <h2>SAB</h2>
                        <span className='text-[#ff1900]'>.</span>
                        <h2>OTAGE</h2>
                    </NavLink>
                <div class="mt-3 max-w-90">
                    <p class="text-xs text-neutral-400 md:text-sm">Bold clothing for those who refuse to blend in. Full range streetwear built for the rebellious.</p>
                </div>
            </div>
        </section>

        {/* <!-- Copyright --> */}
        <div class="max-w-7xl mx-auto text-center text-xs mt-10 mb-3">
            <p class="text-[#424s242]">© 2025 <span class="text-[#c0392b]"> Sabotage Clothes.</span> All rights reserved.</p>
        </div>
    </footer>
    )
}

export default Footer