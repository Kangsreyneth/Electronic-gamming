import React from "react";
import logo from "../../assets/icon/logo.svg";
import {
  FaFacebook,
  FaFacebookMessenger,
  FaInstagramSquare,
  FaTiktok,
  FaTelegram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full mt-32 px-4 md:px-10 lg:px-14 relative bg-blue-950 text-white">
      {/* Subscribe section */}
      <div className="w-[95%] md:w-[90%] absolute left-[2.5%] md:left-[5%] rounded-2xl -top-20 h-auto py-6 md:py-0 md:h-[150px] bg-blue-500 flex flex-col md:flex-row gap-4 md:gap-0 items-center justify-between px-6 md:px-10">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center md:text-left">
          Subscribe to our news
        </h1>
        <div className="w-full md:w-[60%] flex flex-col md:flex-row gap-4">
          <input
            type="text"
            className="w-full md:w-[75%] py-3 border-0 bg-white/30 outline-0 shadow rounded-3xl px-6 text-sm md:text-lg text-white focus:bg-white focus:text-blue-500 transition-all duration-300 ease-in-out"
            placeholder="Enter your email..."
          />
          <button className="bg-white py-3 px-6 md:px-10 text-sm md:text-lg text-gray-800 hover:bg-red-500 hover:text-white transition-all duration-300 ease-in-out cursor-pointer rounded-3xl">
            Subscribe
          </button>
        </div>
      </div>

      {/* Footer Content */}
      <div className="w-full pt-48 md:pt-40 pb-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6 md:gap-0">
          {/* Logo */}
          <div>
            <a href="/">
              <img src={logo} alt="logo" className="h-12 md:h-16 lg:h-20 w-auto" />
            </a>
          </div>
          {/* Social Icons */}
          <div className="flex items-center gap-4 md:gap-5">
            <FaFacebook size={28} className="cursor-pointer text-blue-400" />
            <FaFacebookMessenger size={28} className="cursor-pointer text-blue-600" />
            <FaInstagramSquare size={28} className="cursor-pointer text-pink-400" />
            <FaTiktok size={28} className="cursor-pointer text-white" />
            <FaTelegram size={28} className="cursor-pointer text-cyan-500" />
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 text-sm md:text-base">
          <div>
            <h3 className="text-base md:text-lg font-bold mb-3">RESOURCES</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#">Application</a></li>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Systems</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-base md:text-lg font-bold mb-3">PRICING</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#">Overview</a></li>
              <li><a href="#">Premium Plans</a></li>
              <li><a href="#">Affiliate Program</a></li>
              <li><a href="#">Promotions</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-base md:text-lg font-bold mb-3">COMPANY</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Partnerships</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-base md:text-lg font-bold mb-3">SOCIAL</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 text-center text-gray-400 text-xs md:text-sm">
          © 2025 BY <span className="text-amber-200 font-bold">K.NETH</span>. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
