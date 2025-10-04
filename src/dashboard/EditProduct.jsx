import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    image: ""
  });

  useEffect(() => {
    axios.get(`https://68b990866aaf059a5b57fd8d.mockapi.io/api/products/${id}`)
      .then(res => setProduct(res.data));
  }, [id]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`https://68b990866aaf059a5b57fd8d.mockapi.io/api/products/${id}`, product)
      .then(() => navigate("/products"));
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="w-full mb-2 p-2 border rounded"
          name="name"
          value={product.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          className="w-full mb-2 p-2 border rounded"
          name="description"
          value={product.description}
          onChange={handleChange}
          placeholder="Description"
        />
        <input
          className="w-full mb-2 p-2 border rounded"
          name="price"
          value={product.price}
          onChange={handleChange}
          placeholder="Price"
          type="number"
        />
        <input
          className="w-full mb-2 p-2 border rounded"
          name="image"
          value={product.image}
          onChange={handleChange}
          placeholder="Image URL"
        />
        <button className="px-4 py-2 bg-blue-500 text-white rounded" type="submit">
          Save
        </button>
      </form>
    </div>
  );
};

export default EditProduct;