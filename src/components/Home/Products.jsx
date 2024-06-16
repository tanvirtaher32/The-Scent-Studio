import React from 'react';
import SingleProduct from './SingleProduct';

const Products = () => {
    return (
        <div>
            <h1 className='m-6 text-2xl font-bold text-center'>Check Our Perfumes</h1>
            <div className='flex gap-4 '>
            <SingleProduct></SingleProduct>
            <SingleProduct></SingleProduct>
            <SingleProduct></SingleProduct>
            </div>
        </div>
    );
};

export default Products;