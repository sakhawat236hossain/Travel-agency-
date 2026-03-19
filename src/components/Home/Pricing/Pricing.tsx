"use client";
import Link from "next/link";
import React from "react";
import { FiCheck } from "react-icons/fi";

const Pricing = () => {
  const plans = [
    {
      id: 1,
      title: "Half Board",
      price: 50,
      features: [
        "Transfers from Airport",
        "Minimum 3 Star Hotel",
        "Alcoholic Beverages",
        "Incl. Museum Tickets",
        "Meals in Restaurants",
      ],
      button: "VIEW TRIPS",
      highlight: false,
    },
    {
      id: 2,
      title: "All Inclusive",
      price: 32,
      features: [
        "Meals in Restaurants",
        "Alcoholic Beverages",
        "Minimum 3 Star Hotel",
        "Transfers from Airport",
        "Incl. Museum Tickets",
      ],
      button: "VIEW ALL",
      highlight: true,
    },
    {
      id: 3,
      title: "Excursions Included",
      price: 68,
      features: [
        "Minimum 3 Star Hotel",
        "Meals in Restaurants",
        "Incl. Museum Tickets",
        "Meals in Restaurants",
        "Alcoholic Beverages",
      ],
      button: "VIEW MORE",
      highlight: false,
      popular: true,
    },
  ];

  return (
    <section className="bg-slate-50 dark:bg-slate-950 py-24 px-6 transition-colors duration-300">
      <div className="container mx-auto max-w-7xl">
        {/* --- Header Section --- */}
        <div className="text-center mb-16">
          <span className="text-blue-600 dark:text-blue-400 font-semibold italic text-lg">
            Clean Price
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mt-3 uppercase tracking-tighter">
            Affordable Travel Packages
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-2xl mx-auto font-light leading-relaxed">
            We believe that everyone deserves to experience their dream vacation
            without breaking the bank. Choose the plan that fits you.
          </p>
        </div>

        {/* --- Pricing Cards Grid --- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-[20px] p-10 transition-all duration-500 hover:-translate-y-3 shadow-xl group ${
                plan.highlight
                  ? "bg-blue-600 text-white scale-105 z-10 shadow-blue-500/20 shadow-2xl"
                  : "bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-100 dark:border-slate-800"
              }`}
            >
              {/* Popular / Badge */}
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-400 text-slate-900 text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                  Most Popular
                </span>
              )}

              {/* Card Title */}
              <h3 className={`text-sm font-bold uppercase tracking-[0.2em] mb-8 ${
                plan.highlight ? "text-blue-100" : "text-blue-600 dark:text-blue-400"
              }`}>
                {plan.title}
              </h3>

              {/* Price */}
              <div className="mb-8">
                <span className="text-5xl font-black tracking-tighter">${plan.price}</span>
                <span className={`text-sm font-medium ml-2 ${
                  plan.highlight ? "text-blue-100" : "text-slate-400"
                }`}>
                  / Per Day
                </span>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-10">
                {plan.features.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-sm font-medium">
                    <FiCheck className={`text-lg flex-shrink-0 ${
                      plan.highlight ? "text-white" : "text-blue-600 dark:text-blue-400"
                    }`} />
                    <span className={plan.highlight ? "text-blue-50" : "text-slate-600 dark:text-slate-400"}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Action Button Fixed */}
              <Link 
                href="/travel" 
                className={`block w-full py-4 text-center cursor-pointer rounded-full font-black text-xs uppercase tracking-[0.15em] transition-all duration-300 transform active:scale-95 shadow-lg ${
                  plan.highlight
                    ? "bg-white text-blue-600 hover:bg-slate-100 shadow-white/10"
                    : "bg-blue-600 text-white hover:bg-blue-700 shadow-blue-500/20"
                }`}
              >
                {plan.button}
              </Link>
            </div>
          ))}
        </div>

        {/* --- Footer Note --- */}
        <p className="text-center text-slate-400 dark:text-slate-500 text-xs mt-12 italic font-light">
          * All travel packages include basic medical insurance and 24/7 support.
        </p>
      </div>
    </section>
  );
};

export default Pricing;