import './addToCart.css';
import { useCart } from '../../hooks/useCart';

const AddToCart = ({ product }) => {
    // console.log(product);

    const {cart, addToCart, removeFromCart } = useCart();

    const itemInCart = cart[product.id];
    const qty = itemInCart ? itemInCart.quantity : 0;

    const handleRemoveFromCart = () => {
        removeFromCart(product.id);

        console.log(product.id);
    }

    const handleAddtoCart = () => {
        addToCart(product);
    }

    return (
        <div className="add-to-cart">
            {
                itemInCart ? (
                    <>
                        <button onClick={handleRemoveFromCart} className="add remove">-</button>
                        <div className="quantity">{qty}</div>
                        <button onClick={handleAddtoCart} className="add">+</button>
                    </>

                ): (
                    <button onClick={handleAddtoCart} className="add add-to-cart">
                        Add to cart
                    </button>
                )
            }        
        </div>
    )
}

export default AddToCart;