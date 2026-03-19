import "@/app/globals.css";
import HeroBanner from "@/components/Home/HeroBanner/HeroBanner";
import Destinations from "@/components/Home/Destinations/Destinations";
import VacationSearch from "@/components/Home/VacationSearch/VacationSearch";
import TopDestinations from "@/components/Home/TopDestinations/TopDestinations";
import EmbraceAdventure from "@/components/Home/EmbraceAdventure/EmbraceAdventure";
import Testimonial from "@/components/Home/Testimonial/Testimonial";
import Pricing from "@/components/Home/Pricing/Pricing";
import TravelBlog from "@/components/Home/TravelBlog/TravelBlog";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black w-full">
      <div className="w-full">

        {/* 1️⃣ First Impression */}
        <HeroBanner />

        {/* 2️⃣ Search (user action start) */}
        <VacationSearch />

        {/* 3️⃣ Popular places */}
        <TopDestinations />

        {/* 4️⃣ More exploration */}
        <Destinations />

        {/* 5️⃣ Why choose us / Experience */}
        <EmbraceAdventure />

        {/* 6️⃣ Pricing (decision phase) */}
        <Pricing />

        {/* 7️⃣ Trust build */}
        <Testimonial />

        {/* 8️⃣ Extra content / SEO */}
        <TravelBlog />

      </div>
    </div>
  );
}