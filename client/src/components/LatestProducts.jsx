import React from 'react';
import useFetch from '../hooks/useFetch.js';
import ProductSlider from '../components/ProductSlider';

const LatestProducts = () => {
  const {data} = useFetch('/products?populate=*&filters[isNew]=true');
  return (
    <div className='mb-16'>
      <div className="container mx-auto">
        <h2 className='h2 mb-6 text-center x1:text-left uppercase font-semibold text-primary'>Latest Books</h2>
    </div>
    <ProductSlider data={data} />
  </div>
  )
};

export default LatestProducts;
