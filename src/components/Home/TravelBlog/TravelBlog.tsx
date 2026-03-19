"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const featuredPost = {
  id: 1,
  date: "April 7, 2023",
  title: "Plan the Perfect Vacation",
  description:
    "Planning a vacation can be overwhelming, but this post offers a step-by-step guide to help readers create a comprehensive travel itinerary. From choosing a destination to booking accommodations and activities, readers will learn how to plan a stress-free and enjoyable trip.",
  image: "/Travel-agency.jpg", 
};

const otherPosts = [
  { 
    id: 2, 
    date: "April 7, 2023", 
    title: "Discover the Hidden Gems", 
    description: "Benefits of traveling alone, from the freedom to discover new places with new friends." 
  },
  { 
    id: 3, 
    date: "April 7, 2023", 
    title: "Must-See Landmarks", 
    description: "Iconic landmarks that make Europe one of the world's most popular travel destinations." 
  },
  { 
    id: 4, 
    date: "April 7, 2023", 
    title: "Traveling on a Budget", 
    description: "Practical advice for travelers who want to see the world without breaking the bank." 
  },
  { 
    id: 5, 
    date: "April 7, 2023", 
    title: "Explore the Wonders", 
    description: "Must-see destinations and experiences, including wildlife and cultural experiences." 
  },
];

const TravelBlog = () => {
  return (
    <section className="bg-slate-50 dark:bg-slate-950 py-24 transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* --- Header Section --- */}
        <div className="text-center mb-16">
          <span className="text-blue-500 dark:text-blue-400 font-semibold text-lg italic tracking-wide">
            Roaming Tales
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mt-2 leading-tight uppercase tracking-tighter">
            Travel Blog
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-6 max-w-3xl mx-auto font-light leading-relaxed text-base md:text-lg">
            We share our experiences, tips, and travel stories to inspire and guide our readers in their own wanderlust adventures. From hidden gems to popular destinations, we showcase the beauty and diversity of the world.
          </p>
        </div>

        {/* --- Blog Posts Grid --- */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          
          {/* --- Featured Large Post --- */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-[55%] flex flex-col gap-8 group"
          >
            {/* Image Container */}
            <div className="relative aspect-[16/10] rounded-[32px] overflow-hidden shadow-xl border border-slate-100 dark:border-slate-800">
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                sizes="(max-width: 1024px) 100vw, 700px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
            </div>
            
            {/* Content */}
            <div className="flex flex-col gap-4 items-start pl-2 lg:pl-10">
              <span className="bg-[#1a2e6e] text-white text-[11px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                {featuredPost.date}
              </span>
              
              <h3 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white leading-tight uppercase tracking-tighter mt-1">
                {featuredPost.title}
              </h3>
              
              <p className="text-slate-500 dark:text-slate-400 max-w-xl font-light leading-relaxed">
                {featuredPost.description}
              </p>
              
              <Link 
                href="/travel" 
                className="mt-6 flex justify-center items-center h-11 w-[136.13px] bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-[0.15em] rounded-full shadow-lg transition duration-300 transform active:scale-95 text-center"
              >
                Read More
              </Link>
            </div>
          </motion.div>

          {/* --- Other Smaller Posts List  --- */}
          <div className="w-full lg:w-[45%] flex flex-col gap-8 border-l border-slate-100 dark:border-slate-800 pl-6 md:pl-10">
            {otherPosts.map((post) => (
              <motion.div 
                key={post.id} 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col gap-2.5 group cursor-pointer border-b border-slate-100 dark:border-slate-800 pb-8 last:border-b-0 last:pb-0"
              >
                <span className="self-start bg-[#1a2e6e] text-white text-[11px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                  {post.date}
                </span>
                
                <h3 className="text-2xl font-black text-slate-900 dark:text-white leading-tight mt-1 transition-colors group-hover:text-blue-600">
                  {post.title}
                </h3>
                
                <p className="text-slate-500 dark:text-slate-400 font-light leading-relaxed max-w-md">
                  {post.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default TravelBlog;