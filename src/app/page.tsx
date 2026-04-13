import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import MapSection from "@/components/MapSection";
import AboutSection from "@/components/AboutSection";
import SDGSection from "@/components/SDGSection";
import TeamSection from "@/components/TeamSection";
import ProgramsSection from "@/components/ProgramsSection";
import ProjectsCarouselSection from "@/components/ProjectsCarouselSection";
import FooterSection from "@/components/FooterSection";
import ScrollRevealClient from "@/components/ScrollRevealClient";

export default function Home() {
  return (
    <main>
      <ScrollRevealClient />
      <Navbar />
      <HeroSection />
      <StatsSection />
      <MapSection />
      <AboutSection />
      <SDGSection />
      <TeamSection />
      <ProgramsSection />
      <ProjectsCarouselSection />
      <FooterSection />
    </main>
  );
}
