"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useState } from "react";
import { sliderLists } from "../constants";

export default function Menu() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToSlide = (index: number) => {
    const newIndex = (index + sliderLists.length) % sliderLists.length;
    setCurrentIndex(newIndex);
  };

  const getCocktailAt = (indexOffset: number) => {
    return sliderLists[
      (currentIndex + indexOffset + sliderLists.length) % sliderLists.length
    ];
  };

  useGSAP(() => {
    gsap.fromTo("#title", { opacity: 0 }, { opacity: 1, duration: 1 });
    gsap.fromTo(
      ".cocktail img",
      { opacity: 0, xPercent: -100 },
      { xPercent: 0, duration: 1, opacity: 1, ease: "power1.inOut" }
    );
    gsap.fromTo(
      ".details h2",
      {
        yPercent: 100,
        opacity: 0,
      },
      { yPercent: 0, opacity: 1, ease: "power1.inOut" }
    );
    gsap.fromTo(
      ".details p",
      {
        yPercent: 100,
        opacity: 0,
      },
      { yPercent: 0, opacity: 1, ease: "power1.inOut" }
    );
  }, [currentIndex]);

  const currentCocktail = getCocktailAt(0);
  const prevCocktail = getCocktailAt(-1);
  const nextCocktail = getCocktailAt(1);
  return (
    <div id="menu" aria-label="menu-heading">
      <Image
        height={200}
        width={200}
        src="/images/slider-left-leaf.png"
        alt="left-leaf"
        id="m-left-leaf"
      />
      <Image
        height={200}
        width={200}
        src="/images/slider-right-leaf.png"
        alt="left-right"
        id="m-right-leaf"
      />

      <h2 id="menu-heading" className="sr-only">
        Cocktail Menu
      </h2>

      <nav className="cocktail-tabs" aria-label="Cocktail Navigation">
        {sliderLists.map((cocktail, index) => {
          const isActive = index === currentIndex;
          return (
            <button
              key={cocktail.id}
              onClick={() => goToSlide(index)}
              className={`${
                isActive
                  ? "text-white border-b-white"
                  : "text-white/50 border-b-white/50"
              }`}
            >
              {cocktail.name}
            </button>
          );
        })}
      </nav>

      <div className="content">
        <div className="arrows">
          <button
            className="text-left"
            onClick={() => goToSlide(currentIndex - 1)}
          >
            <span>{prevCocktail.name}</span>
            <Image
              height={30}
              width={30}
              src="/images/right-arrow.png"
              alt="right arrow"
              aria-hidden="true"
            />
          </button>
          <button
            className="text-right"
            onClick={() => goToSlide(currentIndex + 1)}
          >
            <span>{nextCocktail.name}</span>
            <Image
              height={30}
              width={30}
              src="/images/left-arrow.png"
              alt="left arrow"
              aria-hidden="true"
            />
          </button>
        </div>

        <div className="cocktail">
          <Image
            height={400}
            width={500}
            src={currentCocktail.image}
            className="object-contain"
            alt=""
          />
        </div>

        <div className="recipe">
          <div className="info">
            <p>Recipe for: </p>
            <p id="title">{currentCocktail.name}</p>
          </div>

          <div className="details">
            <h2>{currentCocktail.title}</h2>
            <p>{currentCocktail.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
