import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsApp from "@/components/WhatsApp";

export const metadata: Metadata = {
  title: "Jofebs Global Concept Ltd | Marine & Engineering Solutions in Nigeria",
  description:
    "Jofebs Global Concept Ltd. delivers professional marine engineering, dredging, equipment leasing and vessel construction services across Nigeria and the Niger Delta.",
  keywords:
    "marine engineering, dredging, tugboat, barge, houseboat, equipment leasing, Nigeria, Delta State, Effurun, Jofebs",
  openGraph: {
    title: "Jofebs Global Concept Ltd",
    description:
      "Engineering & marine solutions you can trust — vessel construction, dredging, equipment leasing and engineering support in Nigeria.",
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
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsApp />
      </body>
    </html>
  );
}
