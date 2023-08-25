import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import Header from "../components/header/Header";
import About from '../pages/about/About';
import Contact from '../pages/contact/ContactUs';

const AppRoutes = () => {

    return (
        <>
          <Router>
            <Header /> 
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
            </Routes>
            {/* <Footer /> */}
          </Router>
        </>
    )

}

export default AppRoutes;