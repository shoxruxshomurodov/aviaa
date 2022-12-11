import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Index = ({ children }: LayoutProps) => {
  return <div>{children}</div>;
};

export default Index;
