export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="shell border-t border-line py-20 sm:py-28"
    >
      <h2
        id="about-title"
        className="text-[clamp(1.75rem,3vw,2.25rem)] font-medium tracking-[-0.03em]"
      >
        About
      </h2>

      <div className="mt-8 max-w-[65ch] space-y-5 text-[17px] leading-[1.75] text-foreground/85">
        <p className="text-pretty">
          Hi! I am Alquin Suedad, also known as Quin. I started learning
          programming at the age of 17 (2023), beginning with the fundamentals
          in C++ and software development, along with HTML, CSS, and JavaScript.
          At the time, I didn’t yet realize that frameworks could make
          development much more efficient.
        </p>

        <p className="text-pretty">
          After a year of learning, I began exploring powerful libraries and
          frameworks such as React and Next.js. These tools made development
          more seamless and enjoyable, enabling me to design and build
          full-stack applications with greater efficiency.
        </p>
      </div>
    </section>
  );
}
