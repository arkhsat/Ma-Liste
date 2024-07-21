import { createContext, useState } from "react"

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [carts, setCarts] = useState([carts]);

    const addToCart = (item) => {
        const itemExist = carts.findIndex((cart) => cart && cart.id === item.id);
        if(itemExist === -1) {
            setCarts([...carts, item]);
        }

        console.log('Item:', item);
        console.log('Carts:', carts); 
    };

    const value={
        carts,
        addToCart,
    }


    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}