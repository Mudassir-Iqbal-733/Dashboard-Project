import { Spin } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigator = useNavigate();

  
  // Dummy handlers for actions
  const handleView = (id) => {
   navigator(`/products/details/${id}`);
  };

  const handleEdit = (id) => {
    navigator(`/products/edit/${id}`);
  };

  const handleDelete = (id) => {
    axios.delete(`https://68b990866aaf059a5b57fd8d.mockapi.io/api/products/${id}`)
    .then((res)=>{
      getAllProducts()
     alert(`Delete product with ID: ${id}`);
    })
   
  };

  const getAllProducts = ()=>{
    setLoading(true)
    axios
      .get("https://68b990866aaf059a5b57fd8d.mockapi.io/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error fetching products:", err))
      .finally(()=>{
        setLoading(false)
      })
  }

  useEffect(() => {
    getAllProducts()
  }, []);

  

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Products Table</h2>
      <div className="overflow-x-auto">
        {
          (products.length > 0 ) ? <table className="min-w-full border border-gray-300 rounded-lg shadow">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left border">Image</th>
              <th className="px-4 py-2 text-left border">Name</th>
              <th className="px-4 py-2 text-left border">Description</th>
              <th className="px-4 py-2 text-left border">Price</th>
              <th className="px-4 py-2 text-center border">Actions</th>
            </tr>
           </thead>
           
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-16 object-contain"
                  />
                </td>
                <td className="px-4 py-2 border">{product.name}</td>
                  <td className="px-4 py-2 border">{product.description}</td>
                <td className="px-4 py-2 border font-semibold text-green-600">
                  ${product.price}
                </td>
                
                <td className="px-4 py-2 border text-center space-x-2">
                  <button
                    onClick={()=>handleView(product.id)}
                    className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    View
                  </button>
                  <button
                    onClick={() => handleEdit(product.id)}
                    className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="mt-2 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table> : <div className="w-full h-screen text-center py-24"><Spin size="large" /></div>
        }
      </div>
    </div>
  );
};

export default Products;
