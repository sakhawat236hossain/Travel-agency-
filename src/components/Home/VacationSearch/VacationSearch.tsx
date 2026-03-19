import React from "react";
import { FaSearch, FaMapMarkerAlt, FaListUl } from "react-icons/fa";

const VacationSearch = () => {
  return (
    <section className="py-9 bg-white dark:bg-slate-950 select-none transition-colors duration-300">
      <div className="container mx-auto px-6">
        
        {/* --- Text Content Section --- */}
        <div className="text-center mb-16 max-w-2xl mx-auto flex flex-col items-center gap-2">
          <span className="text-blue-600 dark:text-blue-400 font-medium text-lg italic tracking-wide">
            Choose your Trip
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
            Start your Vacation Now
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-4 leading-relaxed font-light text-base">
            Looking for your dream vacation destination but don&apos;t know where
            to start? With the help of experienced and knowledgeable travel
            agents, you can plan the trip of a lifetime with ease.
          </p>
        </div>

        {/* --- The Rounded Search Bar Section --- */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl md:rounded-full shadow-2xl dark:shadow-blue-900/10 p-4 flex flex-col md:flex-row items-center justify-between gap-4 max-w-6xl mx-auto border border-slate-100 dark:border-slate-800">
          
          {/* 1. Search (Keyword) Area */}
          <div className="flex items-center gap-4 px-6 py-2 w-full md:w-[30%] border-r-0 md:border-r border-slate-100 dark:border-slate-800 last:border-r-0">
            <FaSearch className="text-2xl text-blue-600 dark:text-blue-500 flex-shrink-0" />
            <div className="flex-grow">
              <span className="block text-slate-900 dark:text-slate-200 font-bold text-sm uppercase tracking-wider">
                Search
              </span>
              <input
                type="text"
                placeholder="Insert keyword"
                className="block text-sm text-slate-500 dark:text-slate-400 placeholder:text-slate-300 dark:placeholder:text-slate-600 bg-transparent outline-none w-full"
              />
            </div>
          </div>

          {/* 2. Destinations Area */}
          <div className="flex items-center gap-4 px-6 py-2 w-full md:w-[30%] border-r-0 md:border-r border-slate-100 dark:border-slate-800 last:border-r-0">
            <FaMapMarkerAlt className="text-2xl text-blue-600 dark:text-blue-500 flex-shrink-0" />
            <div className="flex-grow">
              <span className="block text-slate-900 dark:text-slate-200 font-bold text-sm uppercase tracking-wider">
                Destinations
              </span>
              <select className="block text-sm text-slate-500 dark:text-slate-400 bg-transparent outline-none w-full appearance-none cursor-pointer">
                <option className="dark:bg-slate-900">All Destinations</option>
                <option className="dark:bg-slate-900">Asia</option>
                <option className="dark:bg-slate-900">Europe</option>
                <option className="dark:bg-slate-900">Africa</option>
              </select>
            </div>
          </div>

          {/* 3. Typologies Area */}
          <div className="flex items-center gap-4 px-6 py-2 w-full md:w-[30%]">
            <FaListUl className="text-2xl text-blue-600 dark:text-blue-500 flex-shrink-0" />
            <div className="flex-grow">
              <span className="block text-slate-900 dark:text-slate-200 font-bold text-sm uppercase tracking-wider">
                Typologies
              </span>
              <select className="block text-sm text-slate-500 dark:text-slate-400 bg-transparent outline-none w-full appearance-none cursor-pointer">
                <option className="dark:bg-slate-900">All Typologies</option>
                <option className="dark:bg-slate-900">Adventure</option>
                <option className="dark:bg-slate-900">Beach</option>
                <option className="dark:bg-slate-900">Family</option>
              </select>
            </div>
          </div>

          {/* 4. SEARCH Button Area */}
          <div className="w-full md:w-auto p-1">
            <button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-extrabold text-base px-10 py-4 rounded-xl md:rounded-full shadow-lg hover:shadow-blue-500/30 transition-all duration-300 w-full md:w-auto uppercase tracking-widest active:scale-95">
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VacationSearch;