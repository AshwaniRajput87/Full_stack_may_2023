import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import Header from "../components/header/Header";
import About from '../pages/about/About';
import Contact from '../pages/contact/ContactUs';
import useFetchData from '../hooks/useFetchData';
import Loader from '../components/loader/Loader';
import ProductList from '../pages/productList';
import NotFound from '../pages/notFound/NotFound';


const AppRoutes = () => {
   const {data: categories, isLoading } = useFetchData('https://fakestoreapi.com/products/categories',[]);
   

    return (
        <>
          <Router>
            {/* <Loader /> */}
            <Header categories={categories}/> 
            {
              isLoading ? (<Loader />) :
              (
                <Routes>
                  <Route path="/products/:categoryName" element={<ProductList />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              )
            }

            {/* <Footer /> */}
          </Router>
        </>
    )

}

export default AppRoutes;