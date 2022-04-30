import React, { useEffect } from "react";
import { useState } from "react";

interface IToggle {
  // eslint-disable-next-line no-unused-vars
  onChange: (state: boolean) => void;
}

const Toggle: React.FC<IToggle> = ({ onChange }) => {
  const [active, setActive] = useState(false);

  const onToggleChange = () => {
    setActive(!active);
  };

  useEffect(() => {
    if (!!onChange && typeof onChange === "function") {
      onChange(active);
    }
  }, [active]);

  return (
    <div className="flex justify-center items-center">
      <div
        className={
          "w-8 h-4 outline outline-4  rounded-full relative transition-all cursor-pointer " +
          (active
            ? "bg-slate-500 outline-slate-500"
            : "bg-slate-200 outline-slate-200")
        }
        onClick={onToggleChange}
      >
        <div
          className={
            "absolute h-4 w-4 rounded-full transform transition-all bg-white " +
            (active ? " translate-x-full" : "")
          }
        ></div>
      </div>
    </div>
  );
};

export default Toggle;
