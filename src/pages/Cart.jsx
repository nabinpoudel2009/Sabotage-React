import React from 'react'
import { Link } from 'react-router';
import { useCart } from "../context/CartContext";
import Visa from '../assets/Visa.webp'
import MasterCard from '../assets/MasterCard.webp'
import esewa from '../assets/esewa.webp'
import fonePay from '../assets/fonePay.webp'
import emptyCart from '../assets/empty-cart.webp'

const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity, clearCart, itemCount, subtotal } = useCart();

    if (itemCount === 0) {
        return (
            <section className='min-h-screen max-w-7xl mx-auto px-4 py-12'>
                <div className='rounded-2xl border border-white/10 bg-neutral-900/70 p-10 text-center'>
                    <img 
                        src={emptyCart} 
                        alt="Image" 
                        className='mx-auto w-50 sm:w-60' 
                    />
                    <h1 className='text-3xl tracking-tight font-semibold Ubuntu'>OPSS!</h1>
                    <h1 className='text-2xl tracking-tight font-semibold Ubuntu'>Your cart is empty</h1>
                    <p className='mt-3 text-neutral-400'>Add a few products to get started.</p>
                    <Link to='/collection' className='mt-6 font-[System-UI] inline-flex text-sm sm:text-base md:text-lg rounded-md bg-[#d02e20eb] px-4 py-2 text-white transition hover:bg-[#c03a2bc6]'>
                        Continue Shopping
                    </Link>
                </div>
            </section>
        );
    }

    return (
        <section className='min-h-screen max-w-7xl mx-auto px-4 py-10'>
            <div className='flex items-center justify-between'>
                <div>
                    <h1 className='text-3xl font-semibold text-white bebas-neue tracking-wider'>Your Cart</h1>
                    <p className='mt-2 text-neutral-400'>{itemCount} item{itemCount > 1 ? "s" : ""}</p>
                </div>
                <button
                    onClick={clearCart}
                    className='rounded-md border font-[System-UI] border-white/20 px-3 py-2 text-sm text-neutral-300 transition hover:bg-white/10'
                >
                    Clear Cart
                </button>
            </div>

            <div className='mt-8 grid gap-8 lg:grid-cols-[1.4fr_0.6fr]'>
                <div className='space-y-4 overflow-auto max-h-120 no-scroll-bar border border-white/30 rounded-lg p-2'>
                    {cartItems.map((item) => (
                        <div key={item.productId} className='flex flex-col gap-4 rounded-2xl border border-white/10 bg-neutral-900/70 p-4 sm:flex-row sm:items-center'>
                            <img src={item.image} alt={item.title} className='h-24 w-24 rounded-lg object-cover' />
                            <div className='flex-1'>
                                <h2 className='text-lg font-semibold text-white'>{item.title}</h2>
                                <p className='mt-1 text-sm text-neutral-400'>${item.price.toFixed(2)} each</p>
                            </div>
                            <div className='flex items-center gap-3'>
                                <div className='flex items-center rounded-md border border-white/10'>
                                    <button
                                        onClick={() => updateQuantity(item.productId, -1)}
                                        className='px-3 py-2 text-xl text-neutral-200 transition hover:bg-white/10'
                                    >
                                        -
                                    </button>
                                    <span className='min-w-8 text-center text-white'>{item.quantity}</span>
                                    <button
                                        onClick={() => updateQuantity(item.productId, 1)}
                                        className='px-3 py-2 text-xl text-neutral-200 transition hover:bg-white/10'
                                    >
                                        +
                                    </button>
                                </div>
                                <button
                                    onClick={() => removeFromCart(item.productId)}
                                    className='text-sm text-red-400 transition hover:text-red-300'
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='rounded-2xl border border-white/10 bg-neutral-900/70 p-6'>
                    <h2 className='text-xl font-semibold text-white'>Order Summary</h2>
                    <div className='mt-4 space-y-3 text-sm text-neutral-300'>
                        <div className='flex justify-between'>
                            <span>Subtotal</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className='flex justify-between'>
                            <span>Shipping</span>
                            <span>Free</span>
                        </div>
                    </div>
                    <div className='mt-6 border-t border-white/10 pt-4'>
                        <div className='flex justify-between text-lg font-semibold text-white'>
                            <span>Total</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <button className='mt-6 w-full rounded-md bg-[#d02e20eb] px-4 py-3 text-white transition hover:bg-[#c03a2bc6]'>
                            Checkout
                        </button>
                    </div>
                    <div className='p-2 mt-2 flex gap-5 flex-wrap sm:flex-nowrap justify-center'>
                        <div>
                            <img 
                                src={Visa} 
                                alt="Visa"
                                className='w-20'
                            />
                        </div>
                        <div>
                            <img 
                                src={MasterCard}
                                alt="masterCard"
                                className='w-15'
                            />
                        </div>
                        <div>
                            <img 
                                src={esewa}
                                alt="masterCard"
                                className='w-8'
                            />
                        </div>
                        <div>
                            <img 
                                src={fonePay}
                                alt="masterCard"
                                className='w-20 mt-0.5'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Cart