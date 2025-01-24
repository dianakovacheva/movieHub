import Link from "next/link";
import Navbar from "./ui/header/navbar";
import HeroSection from "./ui/hero/hero-holder";
import FeaturedToday from "./ui/featured-today/featured_today";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-center content-center">
      <div className="shrink-0">
        <Navbar />
      </div>
      <div className="flex flex-col">
        <HeroSection />
        <FeaturedToday />
      </div>
    </main>
  );
}
