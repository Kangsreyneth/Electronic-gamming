import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import benner1 from "../../../assets/image/benner1.png";
import benner2 from "../../../assets/image/benner1.webp";
import benner3 from "../../../assets/image/benner2.jpg";
import keybenner from "../../../assets/image/keybenner.webp";

import 'animate.css';




export default function BannerSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false
  };

  return (
    // <div>
    //   <Slider {...settings}>
    //     <div className="w-full h-[90vh] md:h-[500px] lg:h-[95vh] relative ">
    //       {/* image */}
    //       <img className="w-full h-full object-cover" src={benner1} alt="Slide 1" />
    //       {/* detail on benner */}
    //       <div className="w-full h-full flex flex-wrap absolute z-10 top-0 left-0">
    //         {/* image */}
    //         <div className="w-full lg:w-1/2 h-1/2 md:h-full p-10 lg:p-24 flex justify-center items-center ">
    //           <img className="w-full h-full animate__animated animate__backInUp" src={benner2} alt="benner2" />
    //         </div>
    //         {/* detail */}
    //         <div className="w-full lg:w-1/2 px-4  h-1/2 md:h-full flex flex-col justify-center animate__animated animate__backInUp">
    //           <h3 className="text-white text-xl lg:text-3xl uppercase font-bold">wireless controller</h3>
    //           <h1 className="text-white text-5xl lg:text-8xl py-2 uppercase font-bold">evolve your <br />
    //             experience
    //           </h1>
    //           <button className="w-[50%] lg:w-[25%] bg-white mt-4 rounded-md text-base
    //                  hover:bg-red-500 hover:text-white cursor-pointer transition-all duration-300
    //                   ease-in-out lg:p-4 p-2">Shop Now</button>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="w-full h-[90vh] md:h-[500px] lg:h-[95vh] relative ">
    //       <img
    //         className="w-full h-full object-cover"
    //         src={benner3}
    //         alt="Slide 2"
    //       />
    //       <div className="absolute top-0 left-0 w-full h-full flex flex-wrap z-10">
    //         <div className="md:w-1/2 h-1/2 md:h-full  p-10 lg:p-24 flex justify-center items-center">
    //           <img
    //             className="w-full h-full animate__animated animate__backInUp"
    //             src={keybenner}
    //             alt="Keybenner"
    //           />
    //         </div>
    //         <div className="md:w-1/2 px-4 h-1/2 md:h-full flex flex-col justify-center animate__animated animate__fadeInRight">
    //           <h3 className="text-white text-xl lg:text-3xl uppercase font-bold">
    //             Wireless Controller
    //           </h3>
    //           <h1 className="text-white text-5xl lg:text-8xl py-2 uppercase font-bold">
    //             Next level gaming
    //           </h1>
    //           <button className="w-[50%] lg:w-[25%] bg-white mt-4 rounded-md text-base hover:bg-red-500 hover:text-white cursor-pointer transition-all duration-300 ease-in-out lg:p-4 p-2">
    //             Shop Now
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </Slider>
    // </div>

     <div>
      <Slider {...settings}>
        {/* slider 1 */}
        <div className="w-full h-[90vh] md:h-[500px] lg:h-[95vh] relative ">
          {/* image */}
          <img className="w-full h-full object-cover" src={benner1} alt="Slide 1" />
          {/* detail on benner */}
          <div className="w-full h-full flex flex-wrap absolute z-10 top-0 left-0">
              {/* image */}
              <div className="w-full md:w-1/2 h-1/2 md:h-full p-10 lg:p-24 flex justify-center items-center ">
                  <img className="w-full h-full animate__animated animate__backInUp" src={benner2}  alt="benner2" />
              </div>
              {/* detail */}
              <div className="w-full md:w-1/2 px-4  h-1/2  md:h-full flex flex-col justify-center animate__animated animate__backInUp">
                    <h3 className="text-white text-xl lg:text-3xl uppercase font-bold">wireless controller</h3>
                    <h1 className="text-white text-5xl lg:text-8xl py-2 uppercase font-bold">evolve your <br />                 
                        experience
                    </h1>
                    <button className="w-[50%] lg:w-[25%] bg-white mt-4 rounded-md text-base
                     hover:bg-red-500 hover:text-white cursor-pointer transition-all duration-300
                      ease-in-out lg:p-4 p-2">Shop Now</button>
              </div>
          </div>
        </div>
        {/* slider 2 */}
         <div className="w-full h-[90vh] md:h-[500px] lg:h-[95vh] relative ">
          {/* image */}
          <img className="w-full h-full object-cover" src={benner3} alt="Slide 1" />
          {/* detail on benner */}
          <div className="w-full h-full flex flex-wrap absolute z-10 top-0 left-0">
              {/* image */}
              <div className="w-full md:w-1/2 h-1/2 md:h-full p-10 lg:p-24 flex justify-center items-center ">
                  <img className="w-full h-full slideshow__text-wrapper animate__animated animate__backInUp " src={keybenner}  alt="controller" />
              </div>
              {/* detail */}
              <div className="w-full md:w-1/2 px-4  h-1/2 md:h-full flex flex-col justify-center animate__animated animate__backInUp">
                    <h3 className="text-white text-xl lg:text-3xl uppercase font-bold">Xlite x6 GAMING keyboard</h3>
                    <h1 className=" text-white text-5xl lg:text-8xl py-2 uppercase font-bold">tune up <br />                 
                        
                        your game
                    </h1>
                    <button className="w-[50%] lg:w-[25%] bg-white mt-4 rounded-md text-base
                     hover:bg-red-500 hover:text-white cursor-pointer transition-all duration-300
                      ease-in-out lg:p-4 p-2">Shop Now</button>
              </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
