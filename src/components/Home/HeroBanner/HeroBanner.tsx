import Image from "next/image";
import React from "react";
import { FaPlay } from "react-icons/fa"; 

const HeroBanner = () => {
  return (
    <section className="bg-[#E6F0FF] min-h-[85vh] flex items-center select-none overflow-hidden">
      <div className="container mx-auto px-6 py-12 md:py-20 flex flex-col-reverse md:flex-row items-center gap-12">
        
        {/* --- Left Part: Text & Buttons --- */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1E3A8A] leading-tight max-w-[500px]">
            Begin Your <br />
            <span className="font-bold text-blue-700">Fantastic Travel</span> <br />
            Experience <span className="font-light text-blue-500">Here</span>
          </h1>
          
          <p className="text-slate-600 mt-6 max-w-[450px]">
            Explore the world with ease. Find the best destinations, book your tickets, and start your dream journey today.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6 mt-10">
            {/* Dark Button */}
            <button className="bg-slate-900 text-white px-10 py-3.5 rounded-full font-bold text-lg shadow-lg hover:bg-slate-800 transition-all duration-300">
              Discover Now
            </button>
            
            {/* Play Button */}
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="bg-blue-600 text-white p-4 rounded-full shadow-md group-hover:scale-110 group-hover:bg-blue-700 transition-all duration-300">
                <FaPlay className="text-xl" />
              </div>
              <span className="text-lg font-semibold text-blue-700 group-hover:text-blue-900 transition-colors">
                How It Work?
              </span>
            </div>
          </div>
        </div>

        {/* --- Right Part: Image --- */}
        <div className="w-full md:w-1/2 relative flex justify-center md:justify-end">
          <Image
            src="/banner.png" 
            alt="Travel Couple Banner"
            width={700}
            height={600}
            className="object-contain"
            priority 
          />
        </div>

      </div>
    </section>
  );
};

export default HeroBanner;