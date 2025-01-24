import Navbar from "./ui/header/navbar";
import HeroSection from "./ui/hero/hero-holder";

export default function Home() {
  return (
    <div className="w-full container px-4">
      <Navbar />
      <HeroSection />
    </div>
  );
}
