import HeroSection from "../ui/hero/hero-holder";
import FeaturedToday from "../ui/featured-today/featured_today";
import Top10 from "../ui/top-10/top_10";

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
