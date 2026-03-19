"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  FaEnvelope, 
  FaWhatsapp, 
  FaMapMarkerAlt, 
  FaLinkedinIn, 
  FaGithub, 
  FaFacebookF, 
  FaTwitter,
  FaChevronDown
} from "react-icons/fa";

const Contact = () => {
  const inputStyle = "w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl py-4 px-6 text-sm outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 shadow-sm";

  return (
    <main className="bg-white dark:bg-slate-950 min-h-screen transition-colors duration-300 selection:bg-blue-100 dark:selection:bg-blue-900/30">
      
      {/* --- Hero Section --- */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-50/50 via-transparent to-transparent dark:from-blue-900/10 dark:via-transparent pointer-events-none" />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 mb-6"
          >
            <span className="text-blue-600 dark:text-blue-400 font-bold tracking-[0.2em] uppercase text-[10px]">
              Contact Us
            </span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white uppercase tracking-tighter leading-[0.9]"
          >
            Let's Start Your <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Journey</span>
          </motion.h1>
        </div>
      </section>

      {/* --- Contact Content --- */}
      <section className="pb-24 pt-12">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            
            {/* --- Left: Info Cards --- */}
            <div className="lg:col-span-5 space-y-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
                  Contact Information
                </h2>
                <p className="text-slate-500 dark:text-slate-400 font-light leading-relaxed max-w-sm">
                  Have a specific destination in mind? Our travel experts are ready to help you plan.
                </p>
              </div>

              <div className="grid gap-4">
                {[
                  { 
                    icon: FaEnvelope, 
                    label: "Email Address", 
                    value: "hmdsakhawat236@gmail.com", 
                    href: "mailto:hmdsakhawat236@gmail.com",
                    color: "bg-blue-600" 
                  },
                  { 
                    icon: FaWhatsapp, 
                    label: "WhatsApp & Call", 
                    value: "+880 1851 121472", 
                    href: "https://wa.me/8801851121472",
                    color: "bg-green-500" 
                  },
                  { 
                    icon: FaMapMarkerAlt, 
                    label: "Our Location", 
                    value: "Dhaka, Bangladesh", 
                    href: "#",
                    color: "bg-orange-500" 
                  }
                ].map((item, idx) => (
                  <motion.a
                    key={idx}
                    href={item.href}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-6 p-5 rounded-[24px] bg-slate-50/50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-900 transition-all group"
                  >
                    <div className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                      <item.icon size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">{item.label}</p>
                      <p className="text-md font-bold text-slate-800 dark:text-white">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Socials */}
              <div className="pt-6">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6">Social Networks</p>
                <div className="flex gap-3">
                  {[
                    { icon: FaLinkedinIn, link: "https://linkedin.com/in/md-sakhawat-hossain-web-developer/", hover: "hover:bg-[#0077b5]" },
                    { icon: FaGithub, link: "https://github.com/sakhawat236hossain", hover: "hover:bg-slate-800" },
                    { icon: FaFacebookF, link: "https://facebook.com/md.sakhawth.hossain", hover: "hover:bg-[#1877f2]" },
                    { icon: FaTwitter, link: "https://x.com/MdSakhawat21005", hover: "hover:bg-black" }
                  ].map((s, i) => (
                    <a key={i} href={s.link} target="_blank" className={`w-11 h-11 rounded-full bg-slate-100 dark:bg-slate-900 flex items-center justify-center text-slate-500 dark:text-slate-400 transition-all duration-300 hover:text-white shadow-sm ${s.hover}`}>
                      <s.icon size={16} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* --- Right: Glassmorphism Form --- */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-7 bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[40px] shadow-2xl dark:shadow-blue-500/5 border border-slate-100 dark:border-slate-800 relative"
            >
              <form className="grid gap-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Full Name</span>
                    <input type="text" placeholder="John Doe" className={inputStyle} />
                  </div>
                  <div className="space-y-2">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Email</span>
                    <input type="email" placeholder="john@example.com" className={inputStyle} />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Phone</span>
                    <input type="text" placeholder="+880" className={inputStyle} />
                  </div>
                  <div className="space-y-2 relative">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Inquiry Subject</span>
                    <div className="relative">
                      <select className={`${inputStyle} appearance-none cursor-pointer`}>
                        <option>General Inquiry</option>
                        <option>Booking Request</option>
                        <option>Custom Tour</option>
                      </select>
                      <FaChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none size-3" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Message</span>
                  <textarea rows={4} placeholder="Tell us more about your trip..." className={`${inputStyle} resize-none`}></textarea>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black text-[11px] uppercase tracking-[0.2em] rounded-2xl shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all mt-4"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;