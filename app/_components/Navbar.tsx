import Image from "next/image";
import { navLinks } from "../constants/index";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

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
        backgroundColor: "#0000050",
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
          <div className="relative">
            <Image
              src={"/images/logo.png"}
              fill
              className="object-cover"
              alt="logo"
            />
          </div>
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
