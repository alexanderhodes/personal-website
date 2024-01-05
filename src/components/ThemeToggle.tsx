import { type FunctionComponent, useEffect, useState } from "react";

interface ThemeToggleProps {
  children: React.ReactNode;
}

const ThemeToggle: FunctionComponent<ThemeToggleProps> = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light");

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button onClick={handleClick} aria-label="theme-toggle">
      {children}
    </button>
  );
};

export default ThemeToggle;
