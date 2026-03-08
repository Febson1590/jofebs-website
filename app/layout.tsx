import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jofebs Global Concept Ltd | Marine Engineering Nigeria",
  description:
    "We build tugboats, barges, houseboats and dredgers in Effurun, Delta State Nigeria. Expert marine engineering and construction for over 20 years.",
  keywords:
    "marine engineering, barge building, tugboat, houseboat, dredger, Nigeria, Delta State, Effurun",
  openGraph: {
    title: "Jofebs Global Concept Ltd",
    description: "We build world-class marine vessels in Nigeria.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=DM+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
