import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import Header from "../components/header/Header";
import About from '../pages/about/About';
import Contact from '../pages/contact/ContactUs';
import useFetchData from '../hooks/useFetchData';


const AppRoutes = () => {
   const {data, isLoading } = useFetchData('https://fakestoreapi.com/products/categories',[]);




    return (
        console.log(data),
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