import React from "react";

interface INumberLabel {
  number: string;
}

const NumberLabel: React.FunctionComponent<INumberLabel> = ({ number }) => {
  return (
    <div className="flex z-10">
      <div className="rounded-full border-3 border-slate-700 bg-white w-5 h-5 flex items-center justify-center text-xs font-bold">
        {number}
      </div>
    </div>
  );
};

export default NumberLabel;
