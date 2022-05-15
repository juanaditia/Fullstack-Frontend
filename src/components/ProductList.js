import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    const response = await axios.get("http://localhost:5000/");
    console.log(response.data);
  };

  return (
    <>
      <div className="bg-white shadow-md rounded my-6">
        <table className="text-left w-full border-collapse">
          <thead>
            <tr>
              <th className="py-4 px-6 bg-gray-100 font-bold uppercase text-sm text-gray-600 border-b border-gray-100">
                No
              </th>
              <th className="py-4 px-6 bg-gray-100 font-bold uppercase text-sm text-gray-600 border-b border-gray-100">
                Name
              </th>
              <th className="py-4 px-6 bg-gray-100 font-bold uppercase text-sm text-gray-600  border-b border-gray-100">
                Qtc
              </th>
              <th className="py-4 px-6 bg-gray-100 font-bold uppercase text-sm text-gray-600  border-b border-gray-100">
                Picture
              </th>
              <th className="py-4 px-6 bg-gray-100 font-bold uppercase text-sm text-gray-600  border-b border-gray-100">
                ExpiredAt
              </th>
              <th className="py-4 px-6 bg-gray-100 font-bold uppercase text-sm text-gray-600  border-b border-gray-100">
                IsActive
              </th>
              <th className="py-4 px-6 bg-gray-100 font-bold uppercase text-sm text-gray-600  border-b border-gray-100">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.id} className="hover:bg-grey-lighter">
                <td className="py-4 px-6 border-b border-gray-100">
                  {" "}
                  {index + 1}{" "}
                </td>
                <td className="py-4 px-6 border-b border-gray-100">
                  {" "}
                  {product.name}{" "}
                </td>
                <td className="py-4 px-6 border-b border-gray-100">
                  {" "}
                  {product.qtc}{" "}
                </td>
                <td className="py-4 px-6 border-b border-gray-100">
                  {product.picture}
                </td>
                <td className="py-4 px-6 border-b border-gray-100">
                  {" "}
                  {product.expiredAt}{" "}
                </td>
                <td className="py-4 px-6 border-b border-gray-100">
                  {" "}
                  {product.isActive}{" "}
                </td>
                <td className="py-4 px-6 border-b border-gray-100">
                  <a
                    href="#"
                    className="text-gray-50 font-bold py-1 px-3 rounded text-xs bg-green-600 hover:bg-green-700"
                  >
                    Edit
                  </a>
                  <a
                    href="#"
                    className="text-gray-50 font-bold py-1 px-3 rounded text-xs bg-red-600 hover:bg-red-700"
                  >
                    Deleted
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link
        to="/add"
        className="py-2 px-4 mb-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
      >
        Add Product
      </Link>
    </>
  );
};

export default ProductList;
