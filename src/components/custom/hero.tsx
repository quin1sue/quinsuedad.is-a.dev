import { ArrowDown, ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="shell flex min-h-[calc(100svh-4rem)] flex-col justify-center py-20 sm:py-24"
    >
      <h1
        id="hero-title"
        className="max-w-[14ch] text-balance text-[clamp(3rem,8vw,6rem)] font-medium leading-[0.95] tracking-[-0.035em]"
      >
        Alquin Suedad<span className="text-accent">.</span>
      </h1>

      <p className="mt-6 text-[clamp(1.15rem,2vw,1.4rem)] leading-snug text-foreground/90">
        Full-Stack Developer, Philippines.
      </p>

      <p className="mt-4 max-w-[52ch] text-pretty text-[17px] leading-[1.7] text-muted">
        I build web applications and explore technologies across software
        development and cloud computing.
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-[15px]">
        <a href="#projects" className="link-inline group">
          View projects &#58;&#41;
        </a>
        <a href="#contact" className="link-inline">
          Get in touch
        </a>
        <a
          href="https://github.com/quin1sue"
          target="_blank"
          rel="noopener noreferrer"
          className="link-inline group"
        >
          GitHub
        
        </a>
        <a
          href="https://www.linkedin.com/in/alquin-suedad/"
          target="_blank"
          rel="noopener noreferrer"
          className="link-inline group"
        >
          LinkedIn
         
        </a>
      </div>
    </section>
  );
}
