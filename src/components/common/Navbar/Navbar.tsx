'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { HiMenuAlt3 } from 'react-icons/hi'; // Mobile Menu Icon
import Logo from '../Logo/Logo';

// Navigation links data
const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Travel', href: '/travel' },
  { name: 'Pages', href: '/pages' },
  { name: 'Shop', href: '/shop' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact Us', href: '/contact' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Separator Dot Component
  const DotSeparator = () => (
    <span className="text-emerald-500 font-bold mx-2 hidden lg:inline">•</span>
  );

  return (
    <nav className="w-full bg-[#f3f4f6] shadow-sm sticky top-0 z-50">
      {/* Main container with fixed width for large screens */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          
          {/* 1. Logo (Left) */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* 2. Navigation Links & Search Button (Right) */}
          <div className="flex items-center gap-8">
            
            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center text-slate-700 font-medium text-sm">
              {navLinks.map((link, index) => (
                <React.Fragment key={link.name}>
                  <Link href={link.href} className="hover:text-emerald-500 transition-colors">
                    {link.name}
                  </Link>
                  {/* Show separator dot except after the last link */}
                  {index < navLinks.length - 1 && <DotSeparator />}
                </React.Fragment>
              ))}
            </div>

            {/* Hamburger Menu (visible on mobile/tablet) */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-3xl text-slate-700 p-1 rounded-md hover:bg-slate-200"
            >
              <HiMenuAlt3 />
            </button>

            {/* Blue Search Button */}
            <button className="bg-[#568bf5] text-white px-6 py-2 rounded-lg font-semibold text-sm hover:bg-[#4a7de0] transition-colors">
              Dashboard
            </button>
          </div>
        </div>

        {/* --- Mobile Menu --- */}
        {isMenuOpen && (
          <div className="lg:hidden mt-3 border-t border-slate-200 pt-3 pb-1 space-y-1 animate-fadeIn">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block text-slate-700 hover:text-emerald-500 hover:bg-slate-100 px-3 py-2 rounded-md font-medium text-base transition-colors"
                onClick={() => setIsMenuOpen(false)} // Close menu on link click
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;