import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { categoriesAllInButton } from '../../../Data';
import CartContext from '../../CartContext';

const DetailBestSeller = () => {
  const { id } = useParams(); // e.g., { id: "cpu3" }

  let product;
  for (const cate of categoriesAllInButton) {
    product = cate.products.find((p) => String(p.id) === id);
    if (product) break;
  }

  const { AddToCart } = useContext(CartContext);

  // If product not found
  if (!product) {
    return (
      <div className="w-full px-4 md:px-12 lg:px-48 py-8 text-center text-red-500">
        <h1>⚠️ Product not found</h1>
        <Link to="/" className="text-blue-600 underline">Back to Products</Link>
      </div>
    );
  }

  return (
    <div className="w-full px-4 md:px-12 lg:px-48 py-8">
      <div className="w-full flex flex-col md:flex-row shadow-md shadow-green-700 hover:shadow-lime-900 overflow-hidden rounded-xl">

        {/* image */}
        <div className="w-full md:w-1/2 h-64 md:h-[430px] p-2 border-b-2 md:border-b-0 md:border-r-2 border-white">
          <img 
            src={product.image} 
            className="w-full h-full rounded-xl object-cover hover:scale-105 transition-transform duration-300" 
            alt={product.title} 
          />
        </div>

        {/* detail */}
        <div className="w-full md:w-1/2 h-auto text-cyan-800 p-6 md:p-10">
          <h1 className="text-2xl md:text-2xl text-pink-950 font-bold">Category</h1>
          <h1 className="text-3xl md:text-4xl text-purple-950 font-bold py-3">{product.title}</h1>
          <p className="text-base md:text-lg">{product.description}</p>

          {/* buttons */}
          <div className="w-full flex flex-col sm:flex-row justify-around gap-4 mt-8 md:mt-14">
            <button
              onClick={() => AddToCart(product)}
              className="bg-blue-700 hover:translate-y-1 hover:shadow-xl shadow-blue-400/80 transition-all duration-300 ease-in-out cursor-pointer px-6 md:px-8 py-3 text-white rounded-xl"
            >
              Add To Cart
            </button>
            <Link 
              to={'/'}
              className="bg-red-700 hover:translate-y-1 hover:shadow-xl shadow-red-300/80 transition-all duration-300 ease-in-out cursor-pointer px-6 md:px-8 py-3 text-white rounded-xl text-center"
            >
              Back To Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailBestSeller
