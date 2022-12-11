import React from "react";

interface HeadingProps {
  title: string;
  subTitle: string;
}

const Index = ({ title = "", subTitle = "" }: HeadingProps) => {
  return (
    <div className="max-w-sm">
      <h3 className="text-[50px] font-semibold tracking-tight">{title}</h3>
      <p className="text-base text-primary-gray tracking-tight leading-6">
        {subTitle}
      </p>
    </div>
  );
};

export default Index;
