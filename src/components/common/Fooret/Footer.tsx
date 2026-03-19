"use client";

import Link from "next/link";
import React from "react";
import { 
  FaFacebookF, 
  FaGithub, 
  FaLinkedinIn, 
  FaTwitter, 
  FaEnvelope, 
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt
} from "react-icons/fa";
import Logo from "../Logo/Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Half Board Plan", href: "#" },
    { name: "All Inclusive", href: "#" },
    { name: "Excursions Tour", href: "#" },
    { name: "Family Packages", href: "#" },
  ];

  const quickLinks = [
    { name: "About Us", href: "#" },
    { name: "Travel Blog", href: "#" },
    { name: "Terms & Conditions", href: "#" },
    { name: "Privacy Policy", href: "#" },
  ];

  return (
    <footer className="bg-white dark:bg-slate-950 pt-20 pb-10 transition-colors duration-300 border-t border-slate-100 dark:border-slate-900">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="flex flex-col gap-6">
            <Logo />
            <p className="text-slate-500 dark:text-slate-400 text-sm font-light leading-relaxed">
              Discover the world with RoamingTales. We provide premium travel experiences and 
              unforgettable memories across the globe since 2023.
            </p>
            <div className="flex gap-3">
              <Link href="https://linkedin.com/in/md-sakhawat-hossain-web-developer/" target="_blank" className="footer-social-link"><FaLinkedinIn size={14} /></Link>
              <Link href="https://github.com/sakhawat236hossain" target="_blank" className="footer-social-link"><FaGithub size={14} /></Link>
              <Link href="https://facebook.com/md.sakhawth.hossain" target="_blank" className="footer-social-link"><FaFacebookF size={14} /></Link>
              <Link href="https://x.com/MdSakhawat21005" target="_blank" className="footer-social-link"><FaTwitter size={14} /></Link>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-slate-900 dark:text-white">
              Our Services
            </h3>
            <ul className="flex flex-col gap-4">
              {services.map((item, idx) => (
                <li key={idx}>
                  <Link href={item.href} className="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-slate-900 dark:text-white">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-4">
              {quickLinks.map((item, idx) => (
                <li key={idx}>
                  <Link href={item.href} className="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-slate-900 dark:text-white">
              Contact Us
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-blue-600 mt-1" size={16} />
                <span className="text-sm text-slate-500 dark:text-slate-400">Dhaka, Bangladesh</span>
              </div>
              <a href="mailto:hmdsakhawat236@gmail.com" className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 transition-colors">
                <FaEnvelope className="text-blue-600" size={16} />
                hmdsakhawat236@gmail.com
              </a>
              <a href="https://wa.me/8801851121472" className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400 hover:text-green-500 transition-colors">
                <FaWhatsapp className="text-green-500" size={18} />
                +880 18511 21472
              </a>
            </div>
          </div>
        </div>

        {/* --- বটম বার --- */}
        <div className="pt-10 border-t border-slate-100 dark:border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 dark:text-slate-500 text-xs font-light text-center">
            © {currentYear} <span className="font-bold text-slate-600 dark:text-slate-300">Md Sakhawat Hossain</span>. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-[10px] text-slate-400 uppercase tracking-widest">Privacy Policy</span>
            <span className="text-[10px] text-slate-400 uppercase tracking-widest">Terms of Service</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer-social-link {
          @apply w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-900 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-300;
        }
      `}</style>
    </footer>
  );
};

export default Footer;