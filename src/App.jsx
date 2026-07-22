import React from 'react'
import Nav from './components/Nav'
import { ProductProvider } from './context/PorductContext';
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { Route, Routes } from 'react-router';
import Home from "./pages/Home";
import Collection from './pages/Collection';
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';
import Cart from './pages/Cart'
import Sale from './pages/Sale';
import Categories from './components/Categories';

const App = () => {

    return (
        <>
            <CartProvider>
                <ProductProvider>
                    <Nav />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/categories" element={<Categories />} />
                        <Route path="/collection" element={<Collection />} />
                        <Route path="/sale" element={<Sale />} />
                        <Route path='/cart' element={<Cart />} />
                    </Routes>
                    <Footer />
                </ProductProvider>
            </CartProvider>
        </>
    )
}

export default App