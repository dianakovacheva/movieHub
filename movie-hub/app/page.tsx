import HeroSection from "../components/hero/hero-holder";
import FeaturedToday from "../components/featured-today/featured-today";
import Top10 from "../components/top-10/top-10";

export default function Page() {
  return (
    <div className="home-page flex min-h-screen flex-col">
      <div className="flex flex-col">
        <div className="mb-10">
          <HeroSection />
        </div>
        <div className="mb-10">
          <FeaturedToday />
        </div>
        <div className="mb-10">
          <Top10 />
        </div>
      </div>
    </div>
  );
}
