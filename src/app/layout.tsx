import type { Metadata, Viewport } from "next";
import { Jost } from "next/font/google";
import { Nav } from "@/components/custom/nav";
import "./globals.css";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alquin Suedad — Full-Stack Developer",
  description:
    "Alquin Suedad, also known as Quin, is a full-stack developer from the Philippines with an interest in software development and cloud technologies.",
  authors: [{ name: "Alquin Suedad" }],
  creator: "Alquin Suedad",
  openGraph: {
    type: "website",
    title: "Alquin Suedad — Full-Stack Developer",
    description:
      "Alquin Suedad, also known as Quin, is a full-stack developer from the Philippines with an interest in software development and cloud technologies.",
    siteName: "Alquin Suedad",
  },
  twitter: {
    card: "summary",
    title: "Alquin Suedad — Full-Stack Developer",
    description:
      "Alquin Suedad, also known as Quin, is a full-stack developer from the Philippines with an interest in software development and cloud technologies.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#121310",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jost.variable} bg-background font-sans text-foreground antialiased`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-5 focus:top-5 focus:z-[60] focus:bg-foreground focus:px-4 focus:py-2.5 focus:text-sm focus:font-medium focus:text-background"
        >
          Skip to content
        </a>
        <Nav />
        {children}
      </body>
    </html>
  );
}
