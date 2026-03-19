import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link
      href="/"
      className="flex flex-col leading-none select-none cursor-pointer group"
    >
      {/* Main Text Part */}
      <div className="flex items-center text-xl sm:text-2xl font-black tracking-tighter">
        <span className="text-slate-800 uppercase transition-colors group-hover:text-slate-600">
          Love
        </span>
        <span className="text-emerald-500 uppercase ml-[2px]">Trave</span>
      </div>

      {/* Subtitle Part */}
      <div className="flex items-center mt-[2px]">
        <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.4em] text-slate-500 font-bold">
          Travel Agency
        </span>
      </div>
    </Link>
  );
};

export default Logo;
