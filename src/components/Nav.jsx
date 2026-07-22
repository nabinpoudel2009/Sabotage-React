import React, { useState } from 'react'
import { FaBars, FaCartArrowDown, FaTimes } from 'react-icons/fa'
import { Link, NavLink } from 'react-router'
import { useCart } from '../context/CartContext'

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Collection', href: '/collection' },
    { name: 'Categories', href: '/categories' },
    { name: 'Sale', href: '/sale' },
]

const Nav = () => {
    const { itemCount } = useCart()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const closeMenu = () => setIsMenuOpen(false)

    return (
        <nav className='sticky top-0 z-5000 border-b border-white/10 bg-black/70 backdrop-blur-md'>
            <div className='mx-auto max-w-7xl'>
                <div className='flex items-center justify-between p-3 sm:p-5'>
                    <NavLink to='/' className='flex items-center share-tech text-2xl font-bold tracking-widest text-neutral-200 sm:text-3xl'>
                        <h2>SAB</h2>
                        <span className='text-[#ff1900]'>.</span>
                        <h2>OTAGE</h2>
                    </NavLink>

                    <div className='hidden items-center gap-x-5 md:flex'>
                        {navLinks.map((link, key) => (
                            <NavLink
                                to={link.href}
                                key={key}
                                className={({ isActive }) =>
                                    `relative inline-block font-[System-UI] text-lg transition-all after:absolute after:left-0 after:bottom-0 after:h-px after:w-full after:bg-[#ff1900cb] after:origin-center after:transition-transform after:duration-300 after:ease-out ${
                                        isActive
                                            ? 'text-neutral-100 after:scale-x-100'
                                            : 'text-neutral-400 hover:text-neutral-100 after:scale-x-0 hover:after:scale-x-100'
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </div>

                    <div className='hidden items-center gap-x-2 p-1 md:flex'>
                        <Link to='/login' className='rounded-sm border border-gray-800/90 px-3 py-2 text-sm text-neutral-100 transition-all duration-300 ease-in-out hover:border-gray-400/50 hover:shadow-xs hover:shadow-white/40'>LOGIN</Link>
                        <Link to='/signup' className='hidden bg-[#d02e20eb] px-3 py-2 text-sm text-white transition-all duration-200 hover:bg-[#c03a2bc6] md:block'>SIGN UP</Link>
                        <NavLink to='/cart' className='relative'>
                            <FaCartArrowDown className='cursor-pointer text-3xl fill-[#b8b8b8d1] transition-all duration-200 hover:fill-[#c9c9c9]' />
                            {itemCount > 0 && (
                                <span className='absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#d02e20eb] px-1 text-xs text-white'>
                                    {itemCount}
                                </span>
                            )}
                        </NavLink>
                    </div>

                    <div className='flex items-center gap-3 md:hidden'>
                        <NavLink to='/cart' className='relative' onClick={closeMenu}>
                            <FaCartArrowDown className='cursor-pointer text-2xl fill-[#b8b8b8d1] transition-all duration-200 hover:fill-[#c9c9c9]' />
                            {itemCount > 0 && (
                                <span className='absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#d02e20eb] px-1 text-xs text-white'>
                                    {itemCount}
                                </span>
                            )}
                        </NavLink>
                        <button
                            type='button'
                            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                            aria-expanded={isMenuOpen}
                            onClick={() => setIsMenuOpen((prev) => !prev)}
                            className='rounded-full border border-white/20 bg-white/10 p-2 text-xl text-neutral-100 transition hover:bg-white/20'
                        >
                            {isMenuOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>
            </div>

            <div className={`overflow-hidden absolute top-13 font-[System-UI] w-full border-t border-white/10 bg-black/90 transition-all duration-300 md:hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className='mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4'>
                    {navLinks.map((link, key) => (
                        <NavLink
                            to={link.href}
                            key={key}
                            onClick={closeMenu}
                            className={({ isActive }) =>
                                `rounded-md px-3 py-2 text-base font-medium transition-all ${
                                    isActive ? 'bg-[#d02e20eb] text-white' : 'text-neutral-300 hover:bg-white/10 hover:text-white'
                                }`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default Nav


// c0392b 
// this is the color

// Share Tech