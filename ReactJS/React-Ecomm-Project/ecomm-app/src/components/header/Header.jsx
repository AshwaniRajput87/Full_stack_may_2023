import Navbar from "../navbar/Navbar";
import './header.css';

const Header = ({categories}) => {
   return (
      <header className="header">
         <div className="container">
            <Navbar categories={categories}/>
         </div>
      </header>
   );
}

export default Header;