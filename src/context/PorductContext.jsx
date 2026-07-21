import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const fetchProducts = async () => {
        try {
            setLoading(true);
            const response = await axios.get('https://fakestoreapi.noksha.dev/api/products');
            const data = response.data;
            setProducts(data.data);
            setLoading(false);
        } catch (error) {
            console.log(error);
        };
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <ProductContext.Provider
            value={{
                products,
                setProducts,
                loading
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};

export const useProducts = () => useContext(ProductContext);