import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero';
import NavMovingText from './components/NavMovingText';
import Categories from './components/Categories';
import ShopHeading from './components/ShopHeading';
import ShopMain from './components/ShopMain';
import { ProductProvider } from './context/PorductContext';

const App = () => {

    return (
        <>
            <ProductProvider>
                <Nav />
                <NavMovingText />
                <Hero />
                <Categories />
                <ShopHeading />
                <ShopMain />
            </ProductProvider>
        </>
    )
}

export default App