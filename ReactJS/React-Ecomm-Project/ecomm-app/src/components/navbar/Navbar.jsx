import { Link, NavLink } from 'react-router-dom';
import { FaOpencart } from 'react-icons/fa';
import './navbar.css';

const Navbar = () => {
    return(
        <nav className='nav'>
            <div className='nav-left'>
                <ul className='nav-items'>
                    <li className='nav-item'>
                        <NavLink 
                          to='/about'
                          className="nav-link">
                            Home
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                    <NavLink 
                          to='/home'
                          className="nav-link">
                            About
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                    <NavLink 
                          to='/home'
                          className="nav-link">
                            Contact us
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className='nav-right'>
                <Link
                   to='/cart'
                   className='cart-icon-container'
                   >
                       <FaOpencart className="cart-icon"></FaOpencart>
                </Link>
            </div>

        </nav>
    )
}

export default Navbar;