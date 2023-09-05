import AddToCart from '../addToCart/AddToCart';
import './product.css';
const Product = ({ product }) => {

    const {id, title, price, image} = product;
    
    return (
        <div className="product-item">
            <div className="product-image">
                <img src={image} alt={title}/>
            </div>
            <div className="product-title">
                {title}
            </div>
            <div className="buy-item">
                <div className="product-price">${price}</div>
                <AddToCart product={product}/> 
            </div>

        </div>
    )
}

export default Product;