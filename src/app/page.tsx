import About from "@/components/About";
import Chat from "@/components/Chat";
import Contact from "@/components/Contact";
import CursorGlow from "@/components/CursorGlow";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import Marquee from "@/components/Marquee";
import Nav from "@/components/Nav";
import SiteBackground from "@/components/SiteBackground";
import Stack from "@/components/Stack";
import Work from "@/components/Work";

export default function Home() {
  return (
    <main className="relative min-h-screen grain">
      <SiteBackground />
      <CursorGlow />
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Journey />
      <Stack />
      <Work />
      <Contact />
      <Footer />
      <Chat />
    </main>
  );
}
