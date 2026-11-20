import Image from "next/image";

type Project = {
  slug: string;
  name: string;
  designation: "Personal project" | "Collaborated project";
  description: string;
  contribution?: string;
  href?: string;
  displayUrl?: string;
  linkLabel?: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

const projects: Project[] = [
  {
    slug: "priceguides",
    name: "PriceGuides",
    designation: "Personal project",
    description:
      "PriceGuides is an economic and financial data platform designed to promote transparency and awareness. It collects, parses, and shares financial and economic information such as gas prices, market prices, currency exchange rates, and more.",
    href: "https://price-guides.bettergov.ph",
    displayUrl: "price-guides.bettergov.ph",
    linkLabel: "Visit the PriceGuides website",
    image: {
      src: "/price-guides-proj.png",
      alt: "PriceGuides dashboard listing Philippine economic indicators and charts",
      width: 1575,
      height: 702,
    },
  },
  {
    slug: "school-recruitment-system",
    name: "School Organization Recruitment System",
    designation: "Collaborated project",
    description:
      "A school organization recruitment system for City College of Tagaytay. I worked with the project team across frontend development, quality assurance, and security testing.",
    contribution:
      "I contributed to responsive UI implementation, quality assurance, frontend testing, identifying security-related edge cases, documenting findings, and coordinating fixes with the project lead.",
    href: "https://pcs.citycollegeoftagaytay.edu.ph",
    displayUrl: "pcs.citycollegeoftagaytay.edu.ph",
    linkLabel: "Visit the School Organization Recruitment System website",
    image: {
      src: "/pcs_web.png",
      alt: "Pixel and Code Society recruitment website homepage with navigation and an introduction section",
      width: 1582,
      height: 819,
    },
  },
  {
    slug: "hotlines-bettergov",
    name: "Hotlines PH",
    designation: "Collaborated project",
    description:
      "A progressive web application (PWA) for quick access to emergency hotlines across the Philippines. Users can search by region, province, city, and hotline type (police, fire, medical, government, etc.), and instantly get the right numbers for their area.",
    contribution: "",
    href: "https://hotlines.bettergov.ph",
    displayUrl: "hotlines.bettergov.ph",
    linkLabel: "Visit Hotlines Ph by BetterGov",
    image: {
      src: "/hotlines-ph.png",
      alt: "hotlines ph website homepage with navigation and an introduction section",
      width: 1582,
      height: 819,
    },
  },
];

function ProjectEntry({ project }: { project: Project }) {
  const imageContent = (
    <div className="group/image relative overflow-hidden bg-surface">
      <Image
        src={project.image.src}
        alt={project.image.alt}
        width={project.image.width}
        height={project.image.height}
        quality={90}
        sizes="(min-width: 1088px) 1088px, 100vw"
        className="h-auto w-full transition-transform duration-500 ease-out group-hover/image:scale-[1.01]"
      />

      {project.displayUrl ? (
        <span className="pointer-events-none absolute bottom-3 tracking-wide left-3 rounded-full border border-line bg-surface/90 px-3 py-1 text-xs font-medium text-ink backdrop-blur-sm">
          {project.displayUrl}
        </span>
      ) : null}
    </div>
  );

  return (
    <article aria-labelledby={`${project.slug}-title`}>
      <figure className="m-0">
        {project.href ? (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={project.linkLabel}
            className="block"
          >
            {imageContent}
          </a>
        ) : (
          imageContent
        )}
      </figure>

      <div className="mt-6 grid gap-x-10 gap-y-4 sm:mt-7 sm:grid-cols-12">
        <div className="sm:col-span-5">
          <h3
            id={`${project.slug}-title`}
            className="text-balance text-[clamp(1.35rem,2.2vw,1.75rem)] font-medium leading-tight tracking-[-0.025em]"
          >
            {project.name}
          </h3>
          <p className="mt-2 text-sm">{project.designation}</p>
        </div>

        <div className="sm:col-span-7">
          <p className="max-w-[62ch] text-pretty text-[15px] leading-[1.75] text-muted">
            {project.description}
          </p>

          {project.contribution ? (
            <p className="mt-3 max-w-[62ch] text-pretty text-[15px] leading-[1.75] text-muted">
              {project.contribution}
            </p>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="shell border-t border-line py-20 sm:py-28"
    >
      <h2
        id="projects-title"
        className="text-[clamp(1.75rem,3vw,2.25rem)] font-medium tracking-[-0.03em]"
      >
        Projects
      </h2>
      <p className="mt-3 max-w-[55ch] text-[15px] leading-[1.7] ">
        Selected work, both independent and collaborative.
      </p>

      <div className="mt-14 space-y-20 sm:mt-16 sm:space-y-28">
        {projects.map((project) => (
          <ProjectEntry key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}