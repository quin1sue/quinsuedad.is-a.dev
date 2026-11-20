import { About } from "@/components/custom/about";
import { Contact } from "@/components/custom/contact";
import { Hero } from "@/components/custom/hero";
import { Projects } from "@/components/custom/projects";

export default function Home() {
  return (
    <main id="main" tabIndex={-1}>
      <Hero />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}
