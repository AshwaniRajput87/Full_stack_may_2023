import { useParams } from 'react-router-dom';
import Loader from '../../components/loader/Loader';
import useFetchData from '../../hooks/useFetchData';
import Product from '../../components/product';

import './productList.css';

const ProductList = () => {
    const { categoryName } = useParams();
    
    const { data: products, error, isLoading } = useFetchData(`https://fakestoreapi.com/products/category/${categoryName}`, []);
    return (
        <div className="container">
           {
               isLoading ? (
                   <Loader />
               ): 
               (
                   <div className='product-list'>
                       {
                            products && products.map((product)=>{
                                return <Product product={product}/>
                            }) 
                       }
                    
                   </div>
               )
           }
        </div>
    )
}

export default ProductList;