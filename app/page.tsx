import { Navigation } from "@/components/navigation";
import { ScrollProgressBar } from "@/components/scroll-progress-bar";
import { About } from "@/components/sections/about";
import { Blog } from "@/components/sections/blog";
import { CaseStudies } from "@/components/sections/case-studies";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Newsletter } from "@/components/sections/newsletter";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Testimonials } from "@/components/sections/testimonials";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Blog />
      <Testimonials />
      <CaseStudies />
      <Newsletter />
      <Contact />

      <ScrollProgressBar showPercentage strokeSize={4} />
    </main>
  );
}
