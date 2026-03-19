import Image from "next/image";
import React from "react";
import { FaPlay } from "react-icons/fa";

const HeroBanner = () => {
  return (
    <section className="min-h-[85vh] flex items-center select-none overflow-hidden w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
        {/* --- Left Part: Text & Buttons --- */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left gap-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#4285F4] leading-tight max-w-full md:max-w-[500px] px-4 md:px-0">
            Begin Your <br />
            <span className="text-blue-700">Fantastic Travel</span> <br />
            Experience <span className="font-light text-blue-700">Here</span>
          </h1>

          <p className="text-slate-600 mt-4 max-w-full md:max-w-[450px] px-4 md:px-0 text-sm md:text-base">
            Explore the world with ease. Find the best destinations, book your
            tickets, and start your dream journey today.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 mt-6 md:mt-10 w-full justify-center md:justify-start">
            {/* Dark Button */}
            <button className="bg-slate-900 text-white px-8 sm:px-10 py-3 rounded-full font-bold text-base sm:text-lg shadow-lg hover:bg-slate-800 transition-all duration-300 w-full sm:w-auto">
              Discover Now
            </button>

            {/* Play Button */}
            <div className="flex items-center gap-2 sm:gap-3 cursor-pointer group">
              <div className="bg-blue-600 text-white p-3 sm:p-4 rounded-full shadow-md group-hover:scale-110 group-hover:bg-blue-700 transition-all duration-300">
                <FaPlay className="text-lg sm:text-xl" />
              </div>
              <span className="text-sm sm:text-lg font-semibold text-blue-700 group-hover:text-blue-900 transition-colors">
                How It Work?
              </span>
            </div>
          </div>
        </div>

        {/* --- Right Part: Image --- */}
        <div className="w-full md:w-1/2 relative flex justify-center md:justify-end px-4 md:px-0">
          <Image
            src="/banner.png"
            alt="Travel Couple Banner"
            width={700}
            height={600}
            className="object-contain max-w-full h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
