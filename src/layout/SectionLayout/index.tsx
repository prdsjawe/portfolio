import classNames from "classnames";
import React from "react";
import NumberLabel from "../../components/NumberLabel";

interface ISectionLayout {
  className?: string;
  sectionNumber: string;
  children: React.ReactNode;
  isCenterAligned?: boolean;
}
const SectionLayout: React.FC<ISectionLayout> = ({
  children,
  className,
  sectionNumber,
  isCenterAligned,
}) => {
  return (
    <section
      className={classNames(
        className,
        "flex w-full",
        isCenterAligned ? "items-center" : ""
      )}
    >
      <NumberLabel number={sectionNumber} />
      {children}
    </section>
  );
};

export default SectionLayout;
