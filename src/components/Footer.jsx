import React from 'react'
import { NavLink } from 'react-router';

const Footer = () => {
    return (
        <footer class="bg-[#121212e6] text-[#8d8d8d] px-5 py-2 mt-5">
        <section class="px-4 grid grid-cols-2 md:grid-cols-4  gap-x-15">
            <div>
                <NavLink to={'/'} className='flex text-neutral-200 tracking-widest font-bold items-center share-tech text-2xl sm:text-3xl'>
                        <h2>SAB</h2>
                        <span className='text-[#ff1900]'>.</span>
                        <h2>OTAGE</h2>
                    </NavLink>
                <div class="mt-3">
                    <p class="text-xs md:text-sm">Bold clothing for those who refuse to blend in. Full range streetwear built for the rebellious.</p>
                </div>
            </div>
            <div>
                <h3 class="text-[#424242] font-bold text-xl">SHOP</h3>
                <ul class="grid grid-cols-1 -mb-5 mt-3 source-code-pro">
                    <li class="text-[#949494] hover:text-white transition-all ease-in-out duration-300 cursor-pointer">Tops</li>
                    <li class="text-[#949494] hover:text-white transition-all ease-in-out duration-300 cursor-pointer">Bottoms</li>
                    <li class="text-[#949494] hover:text-white transition-all ease-in-out duration-300 cursor-pointer">Accessories</li>
                    <li class="text-[#949494] hover:text-white transition-all ease-in-out duration-300 cursor-pointer">Sale</li>
                </ul>
            </div>
            <div class="mt-15 md:mt-0">
                <h3 class="text-[#424242] font-semibold text-xl">HELP</h3>
                <ul class="grid grid-cols-1 -mb-5 mt-3 source-code-pro">
                    <li class="text-[#949494] hover:text-white transition-all ease-in-out duration-300 cursor-pointer">Sizing Guide</li>
                    <li class="text-[#949494] hover:text-white transition-all ease-in-out duration-300 cursor-pointer">Returns & Exchanges</li>
                    <li class="text-[#949494] hover:text-white transition-all ease-in-out duration-300 cursor-pointer">Shipping</li>
                    <li class="text-[#949494] hover:text-white transition-all ease-in-out duration-300 cursor-pointer">Contact Us</li>
                </ul>
            </div>
            <div class="mt-15 md:mt-0">
                <h3 class="text-[#424242] font-mono font-semibold text-xl">BRAND</h3>
                <ul class="grid grid-cols-1 -mb-5 mt-3 source-code-pro">
                    <li class="text-[#949494] hover:text-white transition-all ease-in-out duration-300 cursor-pointer">About</li>
                    <li class="text-[#949494] hover:text-white transition-all ease-in-out duration-300 cursor-pointer">LootBook</li>
                    <li class="text-[#949494] hover:text-white transition-all ease-in-out duration-300 cursor-pointer">Careers</li>
                    <li class="text-[#949494] hover:text-white transition-all ease-in-out duration-300 cursor-pointer">Press</li>
                </ul>
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