import { Navigation } from "@/components/navigation";
import { ScrollProgressBar } from "@/components/scroll-progress-bar";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Skills } from "@/components/sections/skills";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      {/* <Projects /> */}
      <Skills />
      {/* <Blog />
      <Testimonials />
      <CaseStudies />
      <Newsletter /> */}
      <Contact />

      <ScrollProgressBar showPercentage strokeSize={4} />
    </main>
  );
}
