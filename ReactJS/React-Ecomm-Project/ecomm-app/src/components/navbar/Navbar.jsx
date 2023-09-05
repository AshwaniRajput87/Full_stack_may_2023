import { Link, NavLink } from 'react-router-dom';
import { FaOpencart } from 'react-icons/fa';
import './navbar.css';
import { useCart } from '../../hooks/useCart';

const Navbar = ({categories}) => {
    const {totalQty} = useCart();

    return(
        <nav className='nav'>
            <div className='nav-left'>
                <ul className='nav-items'>
                    {
                        categories && categories.map((category, idx)=>{
                            return (
                                <li key={`category-${idx+1}`} 
                                    id={`category-${idx+1}`}
                                    className='nav-item'>
                                    <NavLink 
                                        to={`/products/${category}`}
                                        className="nav-link">
                                        {category}
                                    </NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className='nav-right'>
                <Link to="/cart" className="cart-icon-container">
                    <FaOpencart className="cart-icon" />
                    <div className="cart-badge">{totalQty}</div>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar;