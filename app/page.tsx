import Image from "next/image";
import HeroSection from "./components/HeroSection";
import FadeIn from "./components/FadeIn";

export default function Home() {
  return(
  <main className="flex min-h-screen flex-col bg-[#121212] pt-24">
    <div className="container mx-auto px-6 py-12">
      <FadeIn>
        <HeroSection />
      </FadeIn>
    </div>
  </main>
  );
}
