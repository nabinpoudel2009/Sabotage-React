import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero';
import NavMovingText from './components/NavMovingText';
import Categories from './components/Categories';
import ShopHeading from './components/ShopHeading';
import ShopMain from './components/ShopMain';
import { ProductProvider } from './context/PorductContext';
import SubFooter from './components/SubFooter';
import Login from "./pages/Login";
import { Route, Routes } from 'react-router';
import SignUp from './pages/SignUp';
import Home from "./pages/Home";
import Collection from './pages/Collection';
import Footer from './components/Footer';

const App = () => {

    return (
        <>
            <ProductProvider>
                <Nav />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signUp" element={<SignUp />} />
                    <Route path="/collection" element={<Collection />} />
                </Routes>
                <Footer />
            </ProductProvider>
        </>
    )
}

export default App