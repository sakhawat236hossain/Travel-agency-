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
    <section className="py-20 select-none">
      <div className="container mx-auto px-6">
        {/* --- Header Section --- */}
        <div className="mb-12">
          <span className="text-blue-500 font-medium italic tracking-wide">
            Dream Vacation Destination
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#1a2e6e] mt-2 mb-6 leading-tight">
            Plan the Trip of a Lifetime <br /> with Ease
          </h2>
          <p className="text-slate-500 max-w-xl leading-relaxed">
            Whether you're looking for a romantic getaway, a family-friendly
            adventure, or a solo journey, our agency provides custom-tailored
            itineraries.
          </p>
          <button className="mt-8 bg-blue-600 text-white px-8 py-3 cursor-pointer rounded-md font-bold hover:bg-blue-700 transition-all shadow-lg active:scale-95">
            More Info
          </button>
        </div>

        {/* --- 1. Category Cards (Top Section - Fixed Links) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {categories.map((category) => (
            <div
              key={category.id}
              className=" rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 border border-slate-50"
            >
              <Image
                src={category.image}
                alt={`Category ${category.id}`}
                width={400}
                height={300}
                className="object-cover"
              />
            </div>
          ))}
        </div>
        {/* --- 2. Destination Cards (Bottom Section) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {travelData.map((trip) => (
            <div
              key={trip.id}
              className="rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 border border-slate-50"
            >
              <div className="relative h-64 w-full overflow-hidden">
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
                <div className="flex items-center justify-between text-blue-500 mb-4  p-2 rounded-lg">
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider">
                    <FaClock /> {trip.duration}
                  </div>
                  <div className="flex gap-3">
                    <FaEnvelope className="cursor-pointer hover:text-blue-700 transition-colors" />
                    <FaLink className="cursor-pointer hover:text-blue-700 transition-colors" />
                  </div>
                </div>

                <h3 className="text-xl font-extrabold text-[#1a2e6e] mb-1">
                  {trip.title}
                </h3>
                <div className="flex items-center gap-1 text-blue-500 mb-4 text-[11px] font-bold uppercase">
                  <FaMapMarkerAlt /> {trip.location}
                </div>

                <p className="text-slate-500 text-sm mb-8 line-clamp-3 leading-relaxed">
                  {trip.description}
                </p>

                <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-md font-bold text-xs hover:bg-blue-700 transition-all shadow-md active:scale-95">
                    DETAILS
                  </button>
                  <div className="text-right">
                    <span className="block text-slate-400 text-[10px] font-bold uppercase leading-none">
                      From
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-black text-[#1a2e6e]">
                        ${trip.price}
                      </span>
                      {trip.oldPrice && (
                        <span className="text-sm text-slate-300 line-through font-medium">
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
