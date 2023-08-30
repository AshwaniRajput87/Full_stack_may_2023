import Navbar from "../navbar/Navbar";
import './header.css';

const Header = () => {
   return (
      <header className="header">
         <div className="container">
            <Navbar />
         </div>
      </header>
   );
}

export default Header;