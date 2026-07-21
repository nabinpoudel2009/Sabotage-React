import React from 'react'
import Nav from './components/Nav'
import { ProductProvider } from './context/PorductContext';
import Login from "./pages/Login";
import { Route, Routes } from 'react-router';
import SignUp from './pages/SignUp';
import Home from "./pages/Home";
import Collection from './pages/Collection';
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';
import Cart from './pages/Cart'

const App = () => {

    return (
        <>
            <CartProvider>
                <ProductProvider>
                    <Nav />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signUp" element={<SignUp />} />
                        <Route path="/collection" element={<Collection />} />
                        <Route path='/cart' element={<Cart />} />
                    </Routes>
                    <Footer />
                </ProductProvider>
            </CartProvider>
        </>
    )
}

export default App