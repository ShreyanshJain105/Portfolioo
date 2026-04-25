import { useEffect, useState } from "react";

const NAV_SECTIONS = [
  "hero",
  "about",
  "skills",
  "experience",
  "projects",
  "certifications",
  "education",
  "testimonials",
  "contact",
];

export function useScrollSpy(offset = 100) {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + offset;

      for (let i = NAV_SECTIONS.length - 1; i >= 0; i--) {
        const section = document.getElementById(NAV_SECTIONS[i]);
        if (section && section.offsetTop <= scrollY) {
          setActive(NAV_SECTIONS[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [offset]);

  return active;
}
