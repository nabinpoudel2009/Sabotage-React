import React, { useState } from 'react'

const SabotageGlow = () => {

    const [pos, setPos] = useState({ x: 350, y: 10 });

    return (
        <div
                onMouseMove={(e) =>
                    setPos({
                        x: e.nativeEvent.offsetX,
                        y: e.nativeEvent.offsetY,
                    })
                }
                className="relative flex items-center p-2 Ubuntu justify-center overflow-hidden"
            >
                <h3
                    className="uppercase text-[15rem] text-neutral-500/0 font-black backdrop-blur-3xl bg-clip-text select-none"
                    style={{
                        backgroundImage: `radial-gradient(
                            circle at ${pos.x}px ${pos.y}px,
                            rgba(225,23, 0,0.55) 0%,
                            rgba(255,5,5,0.55) 10%,
                            rgba(255,55,55,0.55) 10%,
                            rgba(255,5,5,0.55) 10%,
                            transparent 70%
                        )`
                    }}
                >
                    SABOTAGE
                </h3>
            </div>
    )
}

export default SabotageGlow