import { ArrowUpRight } from "lucide-react";
import { Footer } from "@/components/custom/footer";

const links = [
  {
    label: "GitHub",
    href: "https://github.com/quin1sue",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/alquin-suedad/",
  }
];

export function Contact() {
  return (
    <>
      <section
        id="contact"
        aria-labelledby="contact-title"
        className="shell border-t border-line py-20 sm:py-28"
      >
        <h2
          id="contact-title"
          className="text-[clamp(1.75rem,3vw,2.25rem)] font-medium tracking-[-0.03em]"
        >
          Contact
        </h2>

        <div className="mt-8 max-w-[60ch]">
          <p className="text-pretty text-[17px] leading-[1.75] text-foreground/85">
            I’m open to conversations about software, collaboration, and
            opportunities to learn. If you have an idea or a role in mind, I’d
            be glad to hear about it.
          </p>

          <address className="not-italic">
            <a
              href="mailto:suedadken@gmail.com"
              className="mt-8 inline-block break-all text-[clamp(1.35rem,4vw,2.25rem)] tracking-[-0.02em] text-foreground underline decoration-line-strong underline-offset-[0.3em] transition-colors duration-200 hover:text-accent hover:decoration-accent"
            >
              suedadken@gmail.com
            </a>
          </address>

          <ul className="mt-9 flex flex-wrap gap-x-8 gap-y-3 text-[15px]">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-inline group"
                >
                  {link.label}
                  <ArrowUpRight
                    className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Footer />
    </>
  );
}
