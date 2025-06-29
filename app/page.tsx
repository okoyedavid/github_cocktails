import About from "./_components/About";
import Art from "./_components/Art";
import CockTails from "./_components/Cocktails";
import Hero from "./_components/Hero";
import Navbar from "./_components/Navbar";

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <CockTails />
      <About />
      <Art />
    </main>
  );
}
