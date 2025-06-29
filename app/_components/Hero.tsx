"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(SplitText, ScrollTrigger);

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    const heroSplit = new SplitText(".title", { type: "chars, words" });
    const paragraphSplit = new SplitText(".subtitle", { type: "lines" });

    heroSplit.chars.forEach((char) => {
      char.classList.add("text-gradient");
    });

    const tl = gsap.timeline();

    tl.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.05,
    });

    tl.from(
      paragraphSplit.lines,
      {
        opacity: 0,
        yPercent: 100,
        duration: 1.8,
        ease: "expo.out",
        stagger: 0.06,
      },
      "-=1.5"
    );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      .to(".right-leaf", { y: 400 }, 0)
      .to(".left-leaf", { y: -400 }, 0);

    return () => {
      heroSplit.revert();
      paragraphSplit.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Animate video playback with scroll after metadata loads
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onReady = () => {
      const startValue = isMobile ? "top 50%" : "center 60%";
      const endValue = isMobile ? "120% top" : "bottom top";

      gsap
        .timeline({
          scrollTrigger: {
            trigger: video,
            start: startValue,
            end: endValue,
            scrub: true,
          },
        })
        .to(video, {
          currentTime: video.duration,
          ease: "none",
        });
    };

    if (video.readyState >= 1) {
      onReady(); // already loaded
    } else {
      video.addEventListener("loadedmetadata", onReady);
      return () => video.removeEventListener("loadedmetadata", onReady);
    }
  }, [isMobile]);

  return (
    <>
      <section id="hero" className="noisy relative z-10">
        <h1 className="title">MOJITO</h1>

        <img
          className="left-leaf"
          src="/images/hero-left-leaf.png"
          alt="left-leaf-image"
        />
        <img
          className="right-leaf"
          src="/images/hero-right-leaf.png"
          alt="right-leaf-image"
        />

        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block">
              <p>Cool. Crisp. Classic.</p>
              <p className="subtitle">
                Sip the Spirit <br /> of Summer
              </p>
            </div>

            <div className="view-cocktails">
              <p className="subtitle">
                Every cocktail on our menu is a blend of premium ingredients,
                creative flair, and timeless recipes — designed to delight your
                senses.
              </p>
              <a href="#cocktails">View Cocktails</a>
            </div>
          </div>
        </div>
      </section>

      <div className="video absolute inset-0 z-0">
        <video
          src="/videos/output.mp4"
          muted
          playsInline
          preload="auto"
          ref={videoRef}
        />
      </div>
    </>
  );
};

export default Hero;
