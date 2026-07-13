import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero';
import NavMovingText from './components/NavMovingText';
import Categories from './components/Categories';
import ShopHeading from './components/ShopHeading';
import ShopMain from './components/ShopMain';

const App = () => {

    return (
        <>
            <Nav />
            <NavMovingText />
            <Hero />
            <Categories />
            <ShopHeading />
            <ShopMain />
        </>
    )
}

export default App