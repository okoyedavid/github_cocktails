"use client";
import Image from "next/image";

export default function Contact() {
  return (
    <footer id="contact">
      <Image
        height={400}
        width={400}
        src="/images/footer-right-leaf.png"
        alt="leaf-right"
        id="f-right-leaf"
      />

      <Image
        height={400}
        width={400}
        src="/images/footer-left-leaf.png"
        alt="leaf-left"
        id="f-left-leaf"
      />

      <div className="content">
        <h2>Where to Find Us</h2>

        <div>
          <h3>Visit Our Bar</h3>
          <p></p>
        </div>
      </div>
    </footer>
  );
}
