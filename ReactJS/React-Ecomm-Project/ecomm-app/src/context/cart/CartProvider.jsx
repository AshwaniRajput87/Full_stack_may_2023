import { useState } from 'react'
import CartContext from './CartContext'

const CartProvider = ({children}) => {

    const [cartState, setCartState] = useState({});
    const [totalQty, setTotalQty] = useState(0);

    const addToCart = (product) => {
        const updatedCart = { ...cartState };

        if(updatedCart[product.id]) {
            updatedCart[product.id].quantity+=1;
        } else {
            updatedCart[product.id] = { ...product, quantity: 1 };
        }
        setTotalQty(totalQty + 1);
        setCartState(updatedCart);
    }

    const removeFromCart = (product) => {
        console.log(product);
    }

   const cartContextValue = {
       cart: cartState,
       totalQty,
       addToCart,
       removeFromCart
   }

   return (
       <CartContext.Provider value={cartContextValue}>
           {children}
       </CartContext.Provider>
   )
}

export default CartProvider;

