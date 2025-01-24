import ListHeroSection from "./list-hero-section/list_hero_section";
import Slider from "./slider/slider";

export default function HeroSection() {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <ListHeroSection />
        <div>
          <Slider />
        </div>
      </div>
    </div>
  );
}
