import axios from 'axios';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const params = useParams();
  console.log(params.id);

  axios.get(`https://68b990866aaf059a5b57fd8d.mockapi.io/api/products/${params.id}`)
  .then((res)=>{
    setProduct(res.data);  
  })
  .catch((err)=>{
    console.log(err);
  })

  return (
    <div className='text-center w-full p-6'>
        <h2 className="text-2xl font-bold mb-4">View Product Details</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-center mb-4">
          <img src={product.image} alt="Product" className="w-80 h-80 object-cover" />
        </div>
          <h3 className="text-xl font-semibold mb-2">Product Name: {product.name}</h3>
        <p className="mb-2">Price : {product.price + "$"}</p>
        <p className="mb-2">Rating : {product.rating}</p>
        <p className="mb-2">Description: {product.description}</p>
      </div>
        
    </div>
  )
}

export default ProductDetails