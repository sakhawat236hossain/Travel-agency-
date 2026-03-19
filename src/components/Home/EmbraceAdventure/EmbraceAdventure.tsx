import Image from "next/image";
import React from "react";
import { FiCheck } from "react-icons/fi"; 

const EmbraceAdventure = () => {
  return (
    <section className="bg-slate-50 dark:bg-slate-950 py-24 transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row items-center gap-16 lg:gap-24">
        
        {/* --- Left Image Container (মাপ অনুযায়ী ৬১০x৬০০) --- */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <div className="relative w-full aspect-[610/600] max-w-[610px] rounded-3xl overflow-hidden shadow-2xl border border-white dark:border-slate-800">
            <Image
              src="/benner.png" 
              alt="Snowy mountain cable car"
              fill
              // sizes prop 
              sizes="(max-width: 768px) 100vw, 610px"
              className="object-cover transition-transform duration-700 hover:scale-105"
              priority 
            />
          </div>
        </div>

        {/* --- Right Text Content --- */}
        <div className="w-full md:w-1/2 flex flex-col gap-5 items-start">
          {/* Handwritten top text */}
          <span className="text-blue-600 dark:text-blue-400 font-semibold text-lg italic tracking-wide">
            Adventure Travel
          </span>
          
          {/* Main headline */}
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight uppercase tracking-tighter">
            Embrace the Thrill <br /> of the Unknown
          </h2>
          
          {/* Description text */}
          <p className="text-slate-500 dark:text-slate-400 mt-3 leading-relaxed font-light text-base md:text-lg">
            Are you tired of the typical tourist destinations and looking to step out of
            your comfort zone? Adventure travel may be the perfect solution for you!
            Here are four reasons why you should book an adventure travel experience:
          </p>
          
          {/* Checklist using react-icons for consistent design */}
          <ul className="space-y-4 mt-6 text-slate-700 dark:text-slate-300 font-medium">
            <li className="flex items-center gap-3">
              <FiCheck className="text-blue-600 dark:text-blue-400 text-xl flex-shrink-0" />
              <span>Connect with nature</span>
            </li>
            <li className="flex items-center gap-3">
              <FiCheck className="text-blue-600 dark:text-blue-400 text-xl flex-shrink-0" />
              <span>Experience other cultures</span>
            </li>
            <li className="flex items-center gap-3">
              <FiCheck className="text-blue-600 dark:text-blue-400 text-xl flex-shrink-0" />
              <span>Create unforgettable memories</span>
            </li>
          </ul>
          
          {/* Button */}
          <button className="mt-10 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-10 rounded-full shadow-lg transition duration-300 transform active:scale-95 uppercase tracking-widest text-sm">
            All Services
          </button>
        </div>

      </div>
    </section>
  );
};

export default EmbraceAdventure;