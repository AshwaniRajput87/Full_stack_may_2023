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

    const removeFromCart = (productId) => {
        const updatedCart = {...cartState};

        if(updatedCart[productId]) {
            updatedCart[productId].quantity-=1;
        }

        if(updatedCart[productId].quantity <=0){
            delete updatedCart[productId];
        }

        setTotalQty(totalQty-1);
        setCartState(updatedCart);
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

