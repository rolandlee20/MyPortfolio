import SiteHeader from "@/components/portfolio/header";
import Hero from "@/components/portfolio/hero";
import About from "@/components/portfolio/about";
import Work from "@/components/portfolio/work";
import Guestbook from "@/components/portfolio/guestbook";
import Contact from "@/components/portfolio/contact";
import SiteFooter from "@/components/portfolio/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <About />
        <Work />
        <Guestbook />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
