import Link from "next/link";
import Navbar from "./ui/header/navbar";
import HeroSection from "./ui/hero/hero-holder";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="shrink-0">
        <Navbar />
      </div>
      <div className="flex flex-col md:flex-row">
        <HeroSection />
      </div>
    </main>
  );
}
