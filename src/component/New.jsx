import React from "react";

const Sk8Banner = () => {
  return (
    <div
      className="w-full h-screen rounded-lg bg-cover bg-center flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: "url('https://i.postimg.cc/gchKmthr/1391602.jpg')",
      }}
    >
      {/* Left Text */}
      <div className="absolute left-10 top-1/2 transform -translate-y-1/2 text-white z-10">
        <h1 className="hidden lg:block lg:text-[50px] text-black font-bold leading-none">
          SOLO LEVELLING
        </h1>
      </div>

      {/* Right Button */}
      <div className="absolute right-10 top-1/2 transform -translate-y-1/2 z-10 text-center">
        <button className="bg-[#ff4b7d] hover:bg-[#e9406e] text-white font-bold px-8 py-3 rounded shadow-lg text-xl transition duration-300">
          WATCH NOW
        </button>

        
      </div>

      {/* Optional Confetti Effect – Static representation */}
      <div className="absolute inset-0 pointer-events-none z-0"></div>
    </div>
  );
};

export default Sk8Banner;
