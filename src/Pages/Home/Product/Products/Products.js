import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    
   

    return (
        <>
        <div className='mt-5 mb-5'>
            <h1 className='text-3xl text-grey font-medium text-center'>Our Products</h1>
            <h1 className='text-2xl text-lime-500 font-bold text-center'>Best Collection Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-10">
                
            {
                        products.map(product => <Product
                         key={product.id}
                         product={product}
                        ></Product>)
                    }
            </div>
            
        </div>
        </>
       
    );
};

export default Products;