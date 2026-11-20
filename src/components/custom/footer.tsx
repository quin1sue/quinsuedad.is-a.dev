import { ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="shell flex flex-col gap-3 py-8 text-sm text-faint sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Alquin Suedad</p>
        <a href="#home" className="link-inline group w-fit text-sm">
          Back to top
          <ArrowUp
            className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5"
            strokeWidth={1.5}
            aria-hidden="true"
          />
        </a>
      </div>
    </footer>
  );
}
