import ListHeroSection from "../list-hero-section/list_hero_section";
import Slider from "../slider/slider";

export default function HeroSection() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <ListHeroSection />
        <div>
          <Slider />
        </div>
      </div>
    </div>
  );
}
