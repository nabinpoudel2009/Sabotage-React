import { createContext, useContext, useEffect, useMemo, useState } from "react";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        if (typeof window === "undefined") return [];

        try {
            return JSON.parse(localStorage.getItem("sabotage-cart") || "[]");
        } catch {
            return [];
        }
    });

    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem("sabotage-cart", JSON.stringify(cartItems));
        }
    }, [cartItems]);

    const addToCart = (product) => {
        const productId = product._id ?? product.id ?? `${product.title}-${product.price}`;

        setCartItems((prevItems) => {
            const existingItem = prevItems.find((item) => item.productId === productId);

            if (existingItem) {
                return prevItems.map((item) =>
                    item.productId === productId
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }

            return [...prevItems, { ...product, productId, quantity: 1 }];
        });
    };

    const removeFromCart = (productId) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.productId !== productId));
    };

    const updateQuantity = (productId, amount) => {
        setCartItems((prevItems) =>
            prevItems.flatMap((item) => {
                if (item.productId !== productId) return [item];

                const nextQuantity = item.quantity + amount;
                return nextQuantity > 0 ? [{ ...item, quantity: nextQuantity }] : [];
            })
        );
    };

    const clearCart = () => setCartItems([]);

    const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const value = useMemo(
        () => ({
            cartItems,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            itemCount,
            subtotal,
        }),
        [cartItems, itemCount, subtotal]
    );

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }

    return context;
};