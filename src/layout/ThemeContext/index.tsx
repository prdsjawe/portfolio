import React, { useEffect, useState } from "react";

const getInitialTheme = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem("color-theme");
    if (typeof storedPrefs === "string") {
      return storedPrefs;
    }

    const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
    if (userMedia.matches) {
      return "dark";
    }
  }

  return "light";
};

interface IThemeContextState {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

const contextInitialState: IThemeContextState = {
  theme: "",
  setTheme: () => {},
};

export const ThemeContext = React.createContext(contextInitialState);

interface IThemeProvider {
  initialTheme?: string;
  children?: React.ReactNode;
}

export const ThemeProvider: React.FC<IThemeProvider> = (
  props: IThemeProvider
) => {
  const [theme, setTheme] = useState(getInitialTheme);

  const rawSetTheme = (rawTheme: string) => {
    const root = window.document.documentElement;
    const isDark = rawTheme === "dark";

    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(rawTheme);

    localStorage.setItem("color-theme", rawTheme);
  };

  if (props.initialTheme) {
    rawSetTheme(props.initialTheme);
  }

  useEffect(() => rawSetTheme(theme), [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <>{props.children}</>
    </ThemeContext.Provider>
  );
};
