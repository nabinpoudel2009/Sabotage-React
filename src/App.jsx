import React, { useEffect, useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero';
import NavMovingText from './components/NavMovingText';

const App = () => {

    const [mousePosition, setMousePosition] = useState({x:0, y:0})

    useEffect(() => {
        function mouseMove(e) {
            setMousePosition({x: e.clientX, y: e.clientY});
        }

        window.addEventListener("mousemove", mouseMove)
        return () => window.removeEventListener("mousemove", mouseMove)
    }, [])

    return (
        <>
            <div
                className="absolute z-150 h-6 w-6 rounded-full border border-[#d02e20eb] flex items-center justify-center pointer-events-none"
                style={{
                    left: `${mousePosition.x}px`,
                    top: `${mousePosition.y}px`,
                    transform: "translate(-50%, -50%)",
                    transition: "all"
                }}
            >
                <div className="h-2 w-2 bg-[#d02e20eb] rounded-full" />
            </div>
            <Nav />
            <NavMovingText />
            <Hero />
        </>
    )
}

export default App