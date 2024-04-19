'use client'

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import MoonIcon from "../ui/icons/moon-icon";
import SunIcon from "../ui/icons/sun-icon";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [ hasMounted, setHasMounted ] = useState(false)

  useEffect(() => setHasMounted(true), []);

  if (hasMounted == false) { return null; }

  return (<div className="absolute top-0 right-0 m-4">
    <button onClick={() => {(theme === "dark") ? setTheme("light") : setTheme("dark")}} title="Toggle Dark/Light Mode">
      {theme === "dark" && <SunIcon />}
      {theme === "light" && <MoonIcon />}
    </button>
  </div>)
}