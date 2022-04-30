import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "@/images";
import { Toggle } from "@components";
import { paths } from "@/config/paths";
import { capitalize } from "@/utils/commons";
import { ThemeContext } from "@/layout/ThemeContext";

const Navigation = () => {
  const { setTheme } = React.useContext(ThemeContext);

  const toggleDarkMode = (state: boolean) => {
    setTheme(state ? "dark" : "light");
  };

  return (
    <nav className="flex items-center py-8">
      <div className="flex-grow">
        <div className="flex">
          <Logo className="w-40 h-20" />
        </div>
      </div>
      <ul className="flex gap-2 font-medium">
        {paths.map((path, index) => {
          return (
            <li className="p-3" key={index}>
              <Link
                className="px-3 py-2 rounded-lg hover:bg-slate-300 hover:bg-opacity-50"
                to={path.href}
              >
                {capitalize(path.name)}
              </Link>
            </li>
          );
        })}
        <li className="p-3 flex items-center justify-center">
          <Toggle onChange={toggleDarkMode} />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
