import React from "react";
import clsx from "clsx";

interface HeadingProps {
  title: string;
  subTitle: string;
  className?: string;
  titleClass?: string;
  subTitleClass?: string;
}

const Index = ({
  title = "",
  subTitle = "",
  className = "max-w-md mt-[120px] mb-10",
  titleClass = "text-[50px]",
  subTitleClass = "text-base",
}: HeadingProps) => {
  return (
    <div className={clsx(className)}>
      <h3 className={clsx("font-semibold font-graphik", titleClass)}>
        {title}
      </h3>
      <p
        className={clsx(
          "text-[#7C7C7C] font-inter tracking-tight",
          subTitleClass
        )}
      >
        {subTitle}
      </p>
    </div>
  );
};

export default Index;
