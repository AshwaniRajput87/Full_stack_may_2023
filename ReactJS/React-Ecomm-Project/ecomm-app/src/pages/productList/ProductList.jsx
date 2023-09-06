import { useParams } from 'react-router-dom';
import Loader from '../../components/loader/Loader';
import useFetchData from '../../hooks/useFetchData';
import Product from '../../components/product';

import './productList.css';
import Pagination from '../../components/pagination/pagination';
import { useState } from 'react';

const ProductList = () => {
    const { categoryName } = useParams();
    
    const { data: products, error, isLoading } = useFetchData(`https://fakestoreapi.com/products/category/${categoryName}`, []);

    const itemsPerPage = 2;
    const [currentPage, setCurrentPage]=useState(1);

    const lastIndex = currentPage * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;
    const currentProducts = products.slice(firstIndex, lastIndex);

    // console.log(currentProducts);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    
    const totalPages = Math.ceil(products.length/itemsPerPage);

    return (
        // if(isLoading){

        // }

        // if(error) {

        // }
        <div className="container">
           {
               isLoading ? (
                   <Loader />
               ): 
               (   
                   <>
                    <div className='product-list'>
                        {
                            currentProducts && currentProducts.map((product)=>{
                                return <Product product={product}/>
                            }) 
                        }
                    </div>
                    <Pagination totalPages={totalPages} currentPage={currentPage} paginate={paginate}/>
                   </>
               )
           }
        </div>
    )
}

export default ProductList;