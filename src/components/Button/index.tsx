import React from "react";
import { Link } from "react-router-dom";

const TYPES: any = {
  PRIMARY: "primary",
  ACCENT: "accent",
};

interface IButton {
  to: string;
  type: string;
  children: React.ReactNode;
}

const Button: React.FunctionComponent<IButton> = ({ to, type, children }) => {
  const checkButtonType = (type: string): string => {
    if (type === TYPES.PRIMARY) {
      return "bg-gradient-to-r from-blue-left to-blue-right text-white";
    } else if (type === TYPES.ACCENT) {
      return "bg-slate-200";
    }

    return "";
  };

  return (
    <Link
      to={to}
      className={"px-6 py-3 rounded-lg font-semibold " + checkButtonType(type)}
    >
      {children}
    </Link>
  );
};

export default Button;
