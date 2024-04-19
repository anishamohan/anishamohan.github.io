'use client'

import { useState, useEffect } from "react";
import MoonIcon from "../ui/icons/moon-icon";
import SunIcon from "../ui/icons/sun-icon";

export default function ThemeSwitcher() {
  const [ theme, setTheme ] = useState(
    typeof window !== "undefined" ? localStorage.theme : "dark"
  );

  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(colorTheme);
    root.classList.add(theme);

    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
    }
  }, [theme])

  return (<div className="absolute top-0 right-0 m-4">
    <button onClick={() => {(theme === "dark") ? setTheme("light") : setTheme("dark")}} title="Toggle Dark/Light Mode">
      {theme === "dark" && <SunIcon />}
      {theme === "light" && <MoonIcon />}
    </button>
  </div>)
}