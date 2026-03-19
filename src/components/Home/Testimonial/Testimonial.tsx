"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";

// Swiper Styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Jennifer and Mark",
      feedback:
        "My husband and I have been using this travel agency for years and they have never disappointed us. Their attention to detail is remarkable.",
    },
    {
      id: 2,
      name: "Dylan and Emily",
      feedback:
        "This travel agency made my dream trip to Europe a reality. They worked with me every step of the way to plan the perfect itinerary.",
    },
    {
      id: 3,
      name: "Sakhawat Hossain",
      feedback:
        "The booking process was incredibly smooth. I highly recommend their services for anyone looking for a hassle-free vacation.",
    },
    {
      id: 4,
      name: "Sarah Jenkins",
      feedback:
        "Amazing experience! The tour guides were knowledgeable and the accommodations exceeded our expectations.",
    },
    {
      id: 5,
      name: "Michael Chen",
      feedback:
        "Best travel agency I've ever dealt with. They found us the best deals and the most beautiful hidden gems in Asia.",
    },
    {
      id: 6,
      name: "Emma Thompson",
      feedback:
        "I was hesitant to travel alone, but they planned a safe and exciting solo trip for me. Truly an unforgettable experience.",
    },
    {
      id: 7,
      name: "David Miller",
      feedback:
        "From start to finish, everything was perfect. The communication was excellent and every detail was handled professionally.",
    },
    {
      id: 8,
      name: "Sophia Rodriguez",
      feedback:
        "They turned our honeymoon into a fairytale. We didn't have to worry about a single thing. Thank you so much!",
    },
    {
      id: 9,
      name: "James Wilson",
      feedback:
        "Top-notch service! They went above and beyond to make sure our family vacation was fun for everyone.",
    },
    {
      id: 10,
      name: "Linda Garcia",
      feedback:
        "Highly professional and very responsive. They handled a last-minute change to our flight with ease and no extra stress.",
    },
    {
      id: 11,
      name: "Robert Taylor",
      feedback:
        "The safari trip they organized for us in Africa was life-changing. Everything was timed perfectly.",
    },
    {
      id: 12,
      name: "Olivia Martinez",
      feedback:
        "I've tried many agencies, but this one is by far the best. Their local insights made all the difference.",
    },
    {
      id: 13,
      name: "William Brown",
      feedback:
        "Exceptional value for money. They managed to fit so many experiences into our budget without compromising quality.",
    },
    {
      id: 14,
      name: "Isabella Davis",
      feedback:
        "Their customer support is available 24/7, which was very helpful when we had a question during our trip.",
    },
    {
      id: 15,
      name: "Christopher Lee",
      feedback:
        "A truly personalized experience. They really listened to what we wanted and delivered exactly that.",
    },
    {
      id: 16,
      name: "Mia Anderson",
      feedback:
        "I loved the curated list of restaurants and local spots they provided. It felt like traveling with a local friend.",
    },
    {
      id: 17,
      name: "Alexander White",
      feedback:
        "Smooth, reliable, and trustworthy. I will definitely be booking my next adventure with them again.",
    },
    {
      id: 18,
      name: "Charlotte Harris",
      feedback:
        "The hiking tour in Switzerland was organized to perfection. The views were breathtaking.",
    },
    {
      id: 19,
      name: "Benjamin Clark",
      feedback:
        "They saved us so much time and effort. Planning a multi-city trip was made so simple.",
    },
    {
      id: 20,
      name: "Amelia Lewis",
      feedback:
        "Every recommendation they made was spot on. Our group trip was a huge success thanks to them.",
    },
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">
            What Our Customers Say
          </h2>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 1500, disableOnInteraction: false }}
          pagination={{ clickable: true, dynamicBullets: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-16"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id} className="h-full">
              <div className="bg-white dark:bg-slate-900 p-8 md:p-10 rounded-[40px] shadow-xl border border-slate-100 dark:border-slate-800 h-full flex flex-col relative group transition-all duration-300 hover:border-blue-500">
                {/* Quote Icon */}
                <FaQuoteLeft className="text-blue-100 dark:text-slate-800 text-5xl absolute top-6 right-8 transition-colors group-hover:text-blue-500/20" />

                <div className="relative z-10 flex flex-col h-full">
                  <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed italic mb-10">
                    "{item.feedback}"
                  </p>

                  <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                      {item.name}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest mt-1">
                      Verified Traveler
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Pagination Dot Customization */}
      <style jsx global>{`
        .swiper-pagination-bullet-active {
          background: #2563eb !important;
          width: 30px !important;
          border-radius: 5px !important;
        }
      `}</style>
    </section>
  );
};

export default Testimonial;
