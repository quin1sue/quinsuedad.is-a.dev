"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import {
  SECTION_IDS,
  SECTION_LABELS,
  isSectionId,
  type SectionId,
} from "@/lib/section-navigation";

const links = SECTION_IDS.filter((id) => id !== "home").map((id) => ({
  id,
  label: SECTION_LABELS[id],
}));

export function Nav() {
  const [active, setActive] = useState<SectionId>("home");

  useEffect(() => {
    const sections = SECTION_IDS.map((id) =>
      document.getElementById(id)
    ).filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && isSectionId(entry.target.id)) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    for (const section of sections) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background">
      <div className="shell flex h-16 items-center justify-between gap-6">
        <a
          href="#home"
          className="text-[15px] font-medium tracking-[-0.01em] text-foreground transition-colors duration-200 hover:text-accent"
        >
          Alquin Suedad
        </a>

        <nav aria-label="Primary">
          <ul className="flex items-center gap-5 sm:gap-7">
            {links.map((link) => {
              const isActive = active === link.id;

              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    aria-current={isActive ? "location" : undefined}
                    className={cn(
                      "text-[13px] transition-colors duration-200 sm:text-sm",
                      isActive
                        ? "text-foreground"
                        : "text-muted hover:text-foreground"
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
