import React from "react";
import BgImage from "../../../assets/bg-shadow.png";
import HeroImage from "../../../assets/banner-main.png";

const Hero = () => {
  return (
    <div
      className="bg-no-repeat bg-[#131313] w-full max-w-[1320px]  mx-auto rounded-3xl mt-6 bg-cover bg-center h-[545px]"
      style={{
       
        backgroundImage: `url(${BgImage})`
      }}
    >
      <div className="flex flex-col items-center h-full justify-center ">
        <img src={HeroImage} alt="" />
        <h1 className="mt-6 my-4 text-base sm:text-2xl md:text-3xl lg:text-[40px] font-bold text-white">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>
        <p className="font-medium sm:text-lg md:text-xl lg:text-2xl text-white">
          Beyond Boundaries Beyond Limits
        </p>
        <div className="border-2 mt-6 border-yellow-400 rounded-lg">
          <button
            className="btn btn-warning rounded-lg text-black w-[184px] h-12 border-transparent m-1
          "
          >
            Claim Free Credit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
