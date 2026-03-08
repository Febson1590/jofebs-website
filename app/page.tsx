import Navbar   from "@/components/Navbar";
import Hero     from "@/components/Hero";
import About    from "@/components/About";
import Stats    from "@/components/Stats";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Gallery  from "@/components/Gallery";
import Contact  from "@/components/Contact";
import Footer   from "@/components/Footer";
import WhatsApp from "@/components/WhatsApp";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Projects />
      <Gallery />
      <Contact />
      <Footer />
      <WhatsApp />
    </>
  );
}
