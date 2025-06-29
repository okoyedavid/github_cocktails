import About from "./_components/About";
import Art from "./_components/Art";
import CockTails from "./_components/Cocktails";
import Contact from "./_components/Contact";
import Hero from "./_components/Hero";
import Menu from "./_components/Menu";
import Navbar from "./_components/Navbar";

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <CockTails />
      <About />
      <Art />
      <Menu />
      <Contact />
    </main>
  );
}
