import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";

const categories = [
    {
        title: "Tops",
        itemsNumber: 24,
        image: "https://imgs.search.brave.com/eC5j4ihrP3iSzKk1fXTisS1ydWKuXiY-Cxpe9FHvGgs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTkv/ODQxLzEwMC9zbWFs/bC9yZWQtdGFuay10/b3AtY2FydG9vbi1t/YXNjb3QtcG5nLnBu/Zw",
        href: "#tops"
    },
    {
        title: "Bottoms",
        itemsNumber: 24,
        image: "https://imgs.search.brave.com/RP5CJ54uGSoifXISsxpXQncuSxNM1LjrAydIPuGhzas/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDIv/NTczLzQ1OS9zbWFs/bC9haS1nZW5lcmF0/ZWQtYnJvd24tc3dl/YXRwYW50cy1mb3It/c3BvcnRzLWlzb2xh/dGVkLW9uLXRyYW5z/cGFyZW50LWJhY2tn/cm91bmQtcG5nLnBu/Zw",
        href: "#bottoms"
    },
    {
        title: "Accessories",
        itemsNumber: 24,
        image: "https://imgs.search.brave.com/u4nrp4Cx7kvjfpdYWuAcuIgkNkV3lrJgItA6hvJe6uQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNjAv/NTgxLzQ2My9zbWFs/bC9jb2xvcmZ1bC1h/c3NvcnRtZW50LW9m/LWZhc2hpb24tYWNj/ZXNzb3JpZXMtYW5k/LWpld2VscnktcG5n/LnBuZw",
        href: "#accessories"
    },
]

const Categories = () => {
    return (
        <>
            <section>
                <h1 className='text-center text-5xl md:text-7xl bebas-neue'>Categories</h1>
                <div className='p-2 my-5 max-w-7xl mx-auto grid grid-cols-1 gap-y-7 sm:grid-cols-2 md:grid-cols-3 gap-x-5'>
                    {categories.map((categories, key) => 
                        <div 
                            className='rounded-2xl p-2 hover:bg-linear-to-b hover:from-[#28282807] hover:to-[#fd15155c] transition-all duration-300 ease-in-out cursor-pointer hover:-translate-y-1 border border-white/30'
                            key={key}
                        >
                            <div className='flex border-b border-white/20 items-center justify-center p-2 overflow-hidden object-cover w-full h-64'>
                                <img src={categories.image} className='object-cover w-30' alt="" />
                            </div>
                            <div className='flex justify-between items-end'>
                                <div>
                                    <h3 className='uppercase text-3xl mt-5 font-bold bebas-neue'>{categories.title}</h3>
                                    <p className='md:ml-1 text-lg text-neutral-300'>{categories.itemsNumber} items</p>
                                </div>
                                <div>
                                    <div className='flex flex-row-reverse'>
                                        <a href={categories.href} className='source-code-pro text-2xl flex flex-row-reverse px-2 bg-gray-800 py-1 rounded-xl text-white'><FiArrowUpRight /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </>
    )
}

export default Categories