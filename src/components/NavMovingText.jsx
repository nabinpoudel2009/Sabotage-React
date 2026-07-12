import React from 'react'
import Marquee from 'react-fast-marquee';

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

const NavMovingText = () => {
    return (
        <>
            <div className="bg-[#d02e20eb] py-1">
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
        </>
    )
}

export default NavMovingText