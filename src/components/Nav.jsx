import React from 'react'
import { FaCartArrowDown } from "react-icons/fa";
import Marquee from 'react-fast-marquee';


const navLinks = [
    {
        name: "Home",
        href: '/'
    },
    {
        name: "Collection",
        href: "/collection",
    },
    {
        name: "Categories",
        href: "/categories",
    },
    {
        name: "sale",
        href: "/sale",
    },
]

const movingText = [
    {
        title: 'Limited edition pieces'
    },
    {
        title: "Streetwear redefined"
    },
    {
        title : "New drop — Void Series"
    },
    {
        title: "Free returns on all orders"
    },
]

const Nav = () => {
    return (
        <nav className='overflow-hidden'>
            <div className='max-w-7xl mx-auto'>
                <div className='flex items-center p-3 sm:p-5 justify-between'>

                    {/* Logo But with Text */}
                    <div className='flex text-neutral-200 tracking-widest font-bold items-center share-tech text-2xl sm:text-3xl'>
                        <h2>SAB</h2>
                        <span className='text-[#ff1900]'>.</span>
                        <h2>OTAGE</h2>
                    </div>

                    {/* Nav Links */}
                    <div className='items-center gap-x-5 hidden md:flex'>
                        {navLinks.map((links, key) => 
                            <div
                                key={key}
                                className='roboto-mono text-[#ffffff72] duration-200 hover:text-neutral-300 transition-colors uppercase'
                            >
                                <a href={links.href} className='relative inline-block after:absolute after:left-0 after:bottom-0 after:h-px after:w-full after:bg-[#ff1900cb] after:scale-x-0 after:origin-center after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100'>{links.name}</a>
                            </div>
                        )}
                    </div>

                    {/* Cart and More */}
                    <div className='flex items-center gap-x-2'>
                        <button className=' px-3 py-2 rounded-sm border border-gray-800/90 hover:shadow-xs shadow-white/40 hover:border-gray-400/50 transition-all cursor-pointer duration-300 ease-in-out'>LOGIN</button>
                        <button className='hidden md:block bg-[#c0392b] px-3 py-2 hover:bg-[#c03a2bc6] transition-all duration-200 cursor-pointer'>SIGN UP</button>
                        <FaCartArrowDown className='fill-[#b8b8b8d1] hover:fill-[#c9c9c9] cursor-pointer transition-all duration-200 text-3xl' />
                    </div>
                </div>
            </div>
            <div className="bg-[#c0392b] py-1">
                <Marquee
                    speed={60}
                    gradient={false}
                    autoFill={true}
                >
                    {movingText.map((text, index) => (
                        <p
                            key={index}
                            className="mx-16 whitespace-nowrap font-[System-UI] text-gray-100 "
                        >
                            {text.title}
                        </p>
                    ))}
                </Marquee>
            </div>
        </nav>
    )
}


export default Nav


// c0392b 
// this is the color

// Share Tech