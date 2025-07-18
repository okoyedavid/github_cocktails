"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { navLinks } from "../constants/index";

gsap.registerPlugin();
const Navbar = () => {
  useGSAP(() => {
    const navtween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottomo top",
      },
    });

    navtween.fromTo(
      "nav",
      {
        background: "transparent",
      },
      {
        backgroundColor: "#00000050",
        backgroundFilter: "blur(10px)",
        duration: 1,
        ease: "power1.inOut",
      }
    );
  }, []);

  return (
    <nav>
      <div>
        <a href="#home" className="flex items-center gap-2">
          <img src={"/images/logo.png"} alt="logo" />
          <p>Velvet Pour</p>
        </a>

        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
