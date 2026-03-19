import "@/app/globals.css";
import HeroBanner from "@/components/Home/HeroBanner/HeroBanner";
import Destinations from "@/components/Home/Destinations/Destinations";
import VacationSearch from "@/components/Home/VacationSearch/VacationSearch";
import TopDestinations from "@/components/Home/TopDestinations/TopDestinations";
import EmbraceAdventure from "@/components/Home/EmbraceAdventure/EmbraceAdventure";
import Testimonial from "@/components/Home/Testimonial/Testimonial";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black w-full">
      <div className="w-full">
        <HeroBanner></HeroBanner>
        <Destinations></Destinations>
        <VacationSearch></VacationSearch>
        <TopDestinations></TopDestinations>
        <EmbraceAdventure></EmbraceAdventure>
        <Testimonial></Testimonial>
      </div>
    </div>
  );
}
