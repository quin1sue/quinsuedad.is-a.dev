export const SECTION_IDS = ["home", "projects", "about", "contact"] as const;

export type SectionId = (typeof SECTION_IDS)[number];

export const SECTION_LABELS: Record<SectionId, string> = {
  home: "Home",
  projects: "Projects",
  about: "About",
  contact: "Contact",
};

export function isSectionId(value: string): value is SectionId {
  return (SECTION_IDS as readonly string[]).includes(value);
}
