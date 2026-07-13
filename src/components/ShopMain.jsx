import React from 'react'

const Tab = ["all", "Top", "Bottom", "accessories", "new in", "sale"];

const ShopMain = () => {
    return (
        <>
            <section>
                <div className='max-w-7xl mx-auto p-2'>
                    <div className='flex flex-wrap gap-x-5 gap-y-5'>
                        {Tab.map((Tab, key) => 
                            <div key={key}>
                                <button className='uppercase text-xs border font-[System-UI] border-white/20 hover:border-red-500/40 px-4 py-2 hover:bg-red-500/10 transition-all duration-200 cursor-pointer'>{Tab}</button>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}

export default ShopMain