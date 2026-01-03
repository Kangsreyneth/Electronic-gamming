import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import { categoriesAllInButton } from '../../../Data';
import { useNavigate } from 'react-router-dom';

const BestStellers = () => {
  const [ActiveTap, setActiveTap] = useState("cpus");

  const ResultProdctShow = categoriesAllInButton.find((c) => c.id === ActiveTap);
  const Navigate = useNavigate();

  return (
    <div className="w-full h-auto px-4 md:px-10 lg:px-14">
      {/* title + category buttons */}
      <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between h-auto py-5 gap-4">
        {/* title */}
        <h1 className="text-3xl md:text-4xl font-bold">
          <span className="me-3 text-red-500">BEST</span>
          STELLERS
        </h1>

        {/* button category */}
        <div className="flex flex-wrap gap-3 md:gap-5">
          {categoriesAllInButton.map((b) => (
            <button
              key={b.id}
              className={`${
                b.id === ActiveTap ? "bg-red-500 text-white" : "bg-gray-400 text-white"
              } px-4 md:px-8 py-2 rounded-md hover:bg-red-500 hover:text-white font-bold cursor-pointer text-sm md:text-base`}
              onClick={() => setActiveTap(b.id)}
            >
              {b.category}
            </button>
          ))}
        </div>

        {/* view more */}
        <a
          href="#"
          className="bg-pink-500 px-6 md:px-10 py-2 rounded-sm text-white font-bold cursor-pointer text-sm md:text-base text-center"
        >
          View More
        </a>
      </div>

      <hr />

      {/* Product cards */}
      <div className="w-full h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-10">
        {ResultProdctShow.products.map((p) => (
          <div
            key={p.id}
            onClick={() => Navigate(`/category/product/${p.id}`)}
            className="w-full h-[420px] shadow shadow-black/70 rounded-xl overflow-hidden transition-all hover:scale-105 cursor-pointer"
          >
            {/* image */}
            <div className="w-full h-[60%]">
              <img
                src={p.image}
                className="w-full h-full object-cover"
                alt={p.title}
              />
            </div>

            {/* detail */}
            <div className="w-full h-[40%] p-4">
              <h1 className="text-lg md:text-xl font-bold">{p.title}</h1>
              <p className="py-2 flex gap-1">
                <FaStar color="red" />
                <FaStar color="red" />
                <FaStar color="red" />
                <FaStar color="red" />
                <FaRegStar />
              </p>
              <div className="w-full flex justify-between items-center">
                <span className="text-lg md:text-xl">
                  {p.priceDiscount} <br />
                  <del className="text-sm text-gray-500">{p.priceOld}</del>
                </span>
                <button className="bg-red-500 py-2 px-4 md:px-6 rounded-xl text-white text-sm md:text-base">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestStellers;
