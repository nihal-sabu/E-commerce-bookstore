import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <div className='grad w-full h-[362px] rounded-[10px] overflow-hidden relative group'>
        {/* badge*/}
        {product.attributes.isNew ? (

<div className="absolute bg-accent text-primary text-[12px] font-extrabold uppercase top-4 right-4 px-2 rounded-full z-10">new</div>
        ) : (
          ''
        )}
        
        {/* image */}
        <div className="w-full h-[200px] flex items-center justify-center relative">
          <img 
            src={`http://localhost:1337${product.attributes.image.data.attributes.url}`}
            className="w-[150px] h-[190px] group-hover:scale-90 transition-all"
            alt="" />
        </div>
        {/* details*/}
        <div className="flex flex-col px-6 pb-8">
          <div className="mb-2 text-sm capitalize text-accent">
            {product.attributes.categories.data[0].attributes.title}
          </div>

          {/* title */}
          <div className="text-[15px] mb-4 lg:mb-4">
            {product.attributes.title.substring(0, 35)}
            ...
          </div>

          {/* price */}
          <div className="text-lg text-accent">₹ {product.attributes.price}</div>
          </div>
      </div>
    </Link>
    
  )
}

export default Product