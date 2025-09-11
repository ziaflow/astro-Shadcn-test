import React, { useState, useEffect } from "react";
import { useTheme } from "@/components/theme-provider.tsx";

const goToTop = () => {
  window.scroll({
    top: 0,
    left: 0,
  });
};

const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  const targetId = event.target.value;
  const element = document.getElementById(targetId);
  if (element) {
    const yOffset = 0;
    const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};

export const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(event.target.value as "light" | "dark");
  };

  const themeValue = theme === "system"
      ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      : theme;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (window.scrollY < lastScrollY) {
        setIsScrolled(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
      <header className={`sticky top-0 z-40 w-full bg-card transition-all ${isScrolled ? "transform -translate-y-full" : ""}`}>
        <div className="md:py-4 py-6 md:px-8 w-[95vw] flex justify-between flex-col md:flex-row gap-4">
          <div>
            <h1 className="ml-8 my-auto font-bold md:text-4xl text-base text-snes-nature dark:text-snes-grey">
              <a rel="noreferrer noopener" onClick={goToTop}>
                TrstnJmn
              </a>
            </h1>
          </div>

          <div className="flex md:flex-row flex-col gap-8 ml-8">
            <div className="snes-form-group md:w-[400px] w-full">
              <div className="snes-input is-success dark:bg-snes-grey">
                <select onChange={handleChange} className="text-sm">
                  <option value="" disabled selected>Select Navi</option>
                  <option value="hero">Start</option>
                  <option value="skills">Skills</option>
                  <option value="projects">Projects</option>
                  <option value="chrismckenzie">ChrisMcKenzie</option>
                  <option value="gameboy">Gameboy</option>
                  <option value="certifications">Certifications</option>
                  <option value="footer">End</option>
                </select>
              </div>
            </div>

            <div className="snes-form-group md:w-[220px] w-full">
              <div className="snes-input is-warning dark:bg-snes-grey">
                <select onChange={handleThemeChange} value={themeValue}>
                  <option value="light">Light</option>
                  <option value="dark">Night</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <hr className="bg-black h-1" />
      </header>
  );
};
