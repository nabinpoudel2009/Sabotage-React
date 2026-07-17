import React, { useState } from 'react'
import { useProducts } from '../context/PorductContext';
import { CiFilter } from "react-icons/ci";


const categories = ["all", "men", "women", "kids"];


const ShopMain = () => {

    
    const { products } = useProducts();
    const { loading } = useProducts();
    
    const [selectedCategory, setSelectedCategory] = useState("All");


    if (loading) {
        return (
            <section>
                <div className="max-w-7xl mx-auto p-2">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-7">
                        {Array.from({ length: 10 }).map((_, index) => (
                            <div
                                key={index}
                                className="rounded-lg p-4 bg-neutral-600/30 animate-pulse"
                            >
                                <div className="w-full h-64 bg-neutral-600 rounded-md"></div>
                                <div className="h-6 bg-neutral-600 rounded mt-4"></div>
                                <div className="h-6 w-2/3 bg-neutral-600 rounded-md mt-2"></div>
                                <div className="h-6 w-20 bg-neutral-600 rounded-md mt-4 mx-auto"></div>
                                <div className="h-10 bg-neutral-600 rounded-md mt-4"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
    
    return (
        <>
            <section>
                <div className='max-w-7xl mx-auto p-2'>
                    <div className='flex items-center p-2 gap-3'>
                        <span className='text-sm sm:text-base md:text-lg'>
                            <h3 className='flex font-[System-UI] font-semibold items-center'>
                                Filter
                                <CiFilter />
                            </h3>
                        </span>
                        <select
                            className='border font-[System-UI] border-red-500/50 text-neutral-300 px-3 py-1 rounded-lg outline-none'
                        >
                            {categories.map((category) => (
                                <option key={category} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5">
                        {products.map((product, key) => (
                            <div
                                key={key}
                                className="rounded-lg p-4 bg-neutral-500/30"
                            >
                                <div className="w-full h-64 group flex items-center justify-center">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        loading='lazy'
                                        className="w-full h-full object-cover md:grayscale-70 md:saturate-50 transition-all duration-500 group-hover:grayscale-0 group-hover:saturate-100"
                                    />
                                </div>
                        
                                <h2 className="mt-4 font-semibold flex justify-center text-lg Ubuntu line-clamp-2">
                                    {product.title}
                                </h2>
                        
                                <p className="mt-2 text-lg font-bold flex justify-center">
                                    ${product.price}
                                </p>
                                <button className='flex hover:bg-red-500/50 active:scale-95 transition-all ease-in-out duration-150 mt-1 items-center mx-auto font-[System-UI] px-2 py-1 rounded-md border border-white/30 bg-red-500/40'>
                                    Add To Cart
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default React.memo(ShopMain);