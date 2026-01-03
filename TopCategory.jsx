import React from 'react'
import mask2 from "../../../assets/image/mask2.jpg";
import { Topcategories } from '../../../Data';
import mask from '../../../assets/image/Mask.jpg';
import mask1 from '../../../assets/image/mask1.jpg';
import { useNavigate } from 'react-router-dom';
import Cate_Controller from './Cate_Controller';


const TopCategory = () => {
    // const Navigate = useNavigate();
    return (
        <div className='w-full h-auto py-16 px-14 '>
            <h1 className='text-3xl font-bold'>
                <span className='text-red-600 me-2'>TOP</span>
                CATEGORY
            </h1>
            {/* main-card */}
            <div className='w-full h-auto py-10 flex gap-5 md:gap-7 flex-wrap '>
                {/* card */}
                {Topcategories.map((cate) => (
                    // console.log(cate);
                    <div
                    onClick={()=>Navigate(Cate_Controller)} 
                    className='w-full md:w-[48%] lg:w-[32%] relative group cursor-pointer rounded-xl overflow-hidden shadow-lg'>
                        {/* image */}
                        <img
                            className='w-full h-[300px] object-cover transform group-hover:scale-105 transition-all duration-500 ease-in-out'
                            src={cate.image}
                            alt="Mask"
                        />
                        {/* gradient overlay */}
                        <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent'></div>

                        {/* content */}
                        <div className='absolute bottom-5 left-5 text-white justify-end'>
                            <button className='bg-white/30 px-4 py-1 text-sm rounded-md text-white group-hover:bg-red-500 transition-all duration-300'>
                                {cate.products} Product
                            </button>
                            <h1 className='text-2xl md:text-4xl mt-2 font-bold group-hover:text-red-500 transition-all duration-300'>
                                {cate.title1} <br />
                                <span>{cate.title2}</span>
                            </h1>
                        </div>
                    </div>
                ))}

            </div>

            {/* bottom benner */}
            <div className='w-full h-auto flex flex-wrap gap-7 mt-16'>

                {/* left */}
                <div className=" w-full lg:w-[49%] h-[280px] relative group bg-red-300 rounded-3xl  overflow-hidden">
                    <div className='w-full h-full'>
                        <img className="w-full h-full transform group-hover:scale-110 transition-all duration-300 ease-in-out object-cover" src={mask} alt="Mask" />

                    </div>
                    <div className="w-full h-full absolute top-0 left-0 p-5 bg-black/20">
                        <h3 className="text-2xl text-white font-bold hover:text-blue-400">THE ULTIMATE PLAY</h3>
                        <h1 className="text-5xl py-2 font-bold text-white">
                            GEFORCE RTX <br /> 3060TI
                        </h1>
                        <h2 className="text-green-400 text-2xl font-bold">$599.99</h2>
                        <div className="w-full flex justify-end">
                            <button className="bg-white py-2 px-7 font-bold rounded-xl hover:bg-red-500 hover:text-white cursor-pointer transition-all duration-300 ease-in-out">
                                Shop Now
                            </button>
                        </div>
                    </div>
                </div>
                {/* right */}

                <div className="w-full lg:w-[49%] h-[280px] relative group bg-red-300 rounded-3xl overflow-hidden">
                    <div className='w-full h-full'>
                        <img className="w-full h-full transform group-hover:scale-110 transition-all duration-300 ease-in-out object-cover" src={mask1} alt="Mask" />

                    </div>
                    <div className="w-full h-full absolute top-0 left-0 p-5 bg-black/20">
                        <h3 className="text-2xl text-white font-bold hover:text-blue-400 ">THE ULTIMATE PLAY</h3>
                        <h1 className="text-5xl py-2 font-bold text-white">
                            GEFORCE RTX <br /> 3060TI
                        </h1>
                        <h2 className="text-sky-400 text-2xl font-bold">$599.99</h2>
                        <div className="w-full flex justify-end">
                            <button className="bg-white py-2 px-7 font-bold rounded-xl hover:bg-red-500 hover:text-white cursor-pointer transition-all duration-300 ease-in-out">
                                Shop Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default TopCategory