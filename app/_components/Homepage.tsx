"use client";

import gsap from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";
import Navbar from "./Navbar";
import Hero from "./Hero";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Home = () => {
  return (
    <main>
      <Navbar />
      <Hero />
    </main>
  );
};

export default Home;
