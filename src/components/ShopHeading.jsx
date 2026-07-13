import React from 'react'
import { CgArrowLongRight } from "react-icons/cg";

const ShopHeading = () => {
    return (
        <>
            <section className='mt-10' id='collection'>
                <div className='max-w-7xl mx-auto p-2'>
                    <div className='flex items-center gap-x-1 text-[#d23624fc]'>
                        <h6 className='uppercase text-xs sm:text-sm md:text-base source-code-pro'>The Collection</h6>
                        <CgArrowLongRight className='text-3xl' />
                    </div>
                    <h3 className='uppercase text-5xl text-neutral-100 bebas-neue tracking-wide sm:text-6xl md:text-7xl'>shop all</h3>
                </div>
            </section>
        </>
    )
}

export default ShopHeading