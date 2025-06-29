import About from "./_components/About";
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
    </main>
  );
}
