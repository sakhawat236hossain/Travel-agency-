import Image from "next/image";
import React from "react";
import { FaClock, FaEnvelope, FaLink, FaMapMarkerAlt } from "react-icons/fa";
import { LuMedal, LuShoppingBag, LuPartyPopper } from "react-icons/lu";

const categories = [
  {
    id: 1,

    image: "https://i.ibb.co.com/sJQ0Tz6v/Section.png", // Electric Bike Image
  },
  {
    id: 2,

    image: "https://i.ibb.co.com/C3hd3QmX/Section-1.png", // Mountain Bike Image
  },
  {
    id: 3,
    image: "https://i.ibb.co.com/vvD4sCqk/Section-2.png", // Travel Bag/Gear Image
  },
];

const travelData = [
  {
    id: 1,
    image: "https://i.ibb.co.com/vvD4sCqk/Section-2.png",
    duration: "1 Week",
    title: "Chiang Mai",
    location: "Thailand",
    description:
      "Visit the temples and the Chiang Mai Night Bazaar, a huge market located on Chang Klan Road.",
    price: 490,
    isSale: false,
  },
  {
    id: 2,
    image: "https://i.ibb.co.com/sJQ0Tz6v/Section.png",
    duration: "5 Days",
    title: "Chao Phraya",
    location: "Thailand",
    description:
      "Boat tour in the capital of Thailand, Bangkok, to see the beautiful palaces and monuments from the water.",
    price: 98,
    oldPrice: 134,
    isSale: true,
  },
  {
    id: 3,
    image: "https://i.ibb.co.com/C3hd3QmX/Section-1.png",
    duration: "10 Days",
    title: "Bangkok",
    location: "Thailand",
    description:
      "Marvelous culinary and cultural trip to the Thai capital with its wonderful monuments and Buddha statues.",
    price: 1000,
    oldPrice: 1023,
    isSale: true,
  },
];

const Destinations = () => {
  return (
    <section className="py-12 md:py-20 select-none w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- Header Section --- */}
        <div className="mb-10 md:mb-12">
          <span className="text-blue-500 font-medium italic tracking-wide text-sm md:text-base">
            Dream Vacation Destination
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1a2e6e] mt-2 mb-4 md:mb-6 leading-tight px-4 md:px-0">
            Plan the Trip of a Lifetime <br /> with Ease
          </h2>
          <p className="text-slate-500 max-w-xl leading-relaxed px-4 md:px-0 text-sm md:text-base">
            Whether you&apos;re looking for a romantic getaway, a
            family-friendly adventure, or a solo journey, our agency provides
            custom-tailored itineraries.
          </p>
          <button className="mt-6 md:mt-8 bg-blue-600 text-white px-6 md:px-8 py-2.5 md:py-3 cursor-pointer rounded-md font-bold text-sm md:text-base hover:bg-blue-700 transition-all shadow-lg active:scale-95 w-full sm:w-auto">
            More Info
          </button>
        </div>

        {/* --- 1. Category Cards (Top Section - Fixed Links) --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
          {categories.map((category) => (
            <div
              key={category.id}
              className="rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 border border-slate-50 w-full"
            >
              <Image
                src={category.image}
                alt={`Category ${category.id}`}
                width={400}
                height={300}
                className="object-cover w-full h-auto"
              />
            </div>
          ))}
        </div>
        {/* --- 2. Destination Cards (Bottom Section) --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {travelData.map((trip) => (
            <div
              key={trip.id}
              className="rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 border border-slate-50 w-full"
            >
              <div className="relative h-48 sm:h-56 md:h-64 w-full overflow-hidden">
                <Image
                  src={trip.image}
                  alt={trip.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {trip.isSale && (
                  <span className="absolute top-4 right-4 bg-blue-500 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase z-20 shadow-md">
                    Sale
                  </span>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between text-blue-500 mb-3 md:mb-4 p-2 rounded-lg">
                  <div className="flex items-center gap-1.5 md:gap-2 text-[8px] sm:text-[10px] font-bold uppercase tracking-wider">
                    <FaClock className="text-xs md:text-sm" /> {trip.duration}
                  </div>
                  <div className="flex gap-2 md:gap-3">
                    <FaEnvelope className="cursor-pointer hover:text-blue-700 transition-colors text-sm md:text-base" />
                    <FaLink className="cursor-pointer hover:text-blue-700 transition-colors text-sm md:text-base" />
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-extrabold text-[#1a2e6e] mb-1 px-2 md:px-0">
                  {trip.title}
                </h3>
                <div className="flex items-center gap-1 text-blue-500 mb-3 md:mb-4 text-[9px] sm:text-[11px] font-bold uppercase px-2 md:px-0">
                  <FaMapMarkerAlt className="text-xs md:text-sm" />{" "}
                  {trip.location}
                </div>

                <p className="text-slate-500 text-xs sm:text-sm mb-6 md:mb-8 line-clamp-3 leading-relaxed px-2 md:px-0">
                  {trip.description}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 md:gap-4 border-t border-slate-100 pt-3 md:pt-4 w-full">
                  <button className="bg-blue-600 text-white px-4 sm:px-6 py-2 rounded-md font-bold text-xs hover:bg-blue-700 transition-all shadow-md active:scale-95 w-full sm:w-auto">
                    DETAILS
                  </button>
                  <div className="text-right w-full sm:w-auto">
                    <span className="block text-slate-400 text-[8px] sm:text-[10px] font-bold uppercase leading-none">
                      From
                    </span>
                    <div className="flex items-center gap-1.5 md:gap-2">
                      <span className="text-lg sm:text-xl font-black text-[#1a2e6e]">
                        ${trip.price}
                      </span>
                      {trip.oldPrice && (
                        <span className="text-xs sm:text-sm text-slate-300 line-through font-medium">
                          ${trip.oldPrice}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
