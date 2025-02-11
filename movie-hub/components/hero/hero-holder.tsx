import ListHeroSection from "./list-hero-section/list-hero-section";
import BrowseTrailersBtn from "../trailers-btn";

import Slider from "./slider/slider";

export default function HeroSection() {
  return (
    <div className="flex items-start hero-content w-full m-0 p-0">
      <div className="w-[70vw] m-0 p-0 size-full">
        <Slider />
      </div>
      <div className="flex-col items-start w-[40vw]">
        <div className="flex-col items-start m-0 p-0 hidden sm:flex">
          <p className="pb-5 text-xl text-[#f5c518] tracking-wide font-bold">
            Up next
          </p>
          <ListHeroSection />
        </div>
        {/* Browse Trailers Btn*/}
        <BrowseTrailersBtn />
      </div>
    </div>
  );
}
