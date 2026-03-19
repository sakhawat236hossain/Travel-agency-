"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
// Swiper components and styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const TopDestinationsSlider = () => {
  const destinations = [
    {
      id: 1,
      name: "Greece",
      img: "/Section → Section → Section (1).png",
      desc: "Ancient history & beaches",
    },
    {
      id: 2,
      name: "Egypt",
      img: "/Section → Section → Section (2).png",
      desc: "Pharaohs & pyramids",
    },
    {
      id: 3,
      name: "Africa",
      img: "/Section → Section → Section (3).png",
      desc: "Embark on a journey",
    },
    {
      id: 4,
      name: "France",
      img: "/Section → Section → Section.png",
      desc: "Art, culture, and cuisine",
    },
    {
      id: 5,
      name: "Italy",
      img: "/Section → Section → Section (1).png",
      desc: "Romantic canals & food",
    },
  ];

  return (
    <section className="bg-white dark:bg-slate-950 py-16 md:py-24 transition-colors duration-300 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* --- Header Section --- */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-12 text-center md:text-left px-4 md:px-0"
        >
          <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm md:text-lg italic tracking-wide">
            Next Adventure
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mt-2">
            Explore Top Worldwide Destinations
          </h2>
        </motion.div>

        {/* --- Swiper Slider --- */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="pb-14"
        >
          {destinations.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-xl dark:shadow-blue-900/5 group bg-slate-100 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px]">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80" />

                {/* Card Content */}
                <div className="absolute bottom-6 left-6 right-6 z-20 text-left">
                  <span className="text-blue-300 font-medium text-[10px] sm:text-xs uppercase tracking-widest mb-1 block">
                    Discovery
                  </span>
                  <h3 className="text-white font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl mb-1">
                    {item.name}
                  </h3>
                  <p className="text-white/80 text-xs sm:text-sm font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Pagination Dot কালার কাস্টমাইজ করার জন্য (Global CSS এ দিতে পারেন) */}
      <style jsx global>{`
        .swiper-pagination-bullet-active {
          background: #2563eb !important;
          width: 25px !important;
          border-radius: 5px !important;
        }
        .swiper-pagination-bullet {
          background: #94a3b8;
        }
      `}</style>
    </section>
  );
};

export default TopDestinationsSlider;
