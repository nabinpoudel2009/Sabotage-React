import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero';
import NavMovingText from './components/NavMovingText';
import Categories from './components/Categories';

const App = () => {

    return (
        <>
            <Nav />
            <NavMovingText />
            <Hero />
            <Categories />
        </>
    )
}

export default App