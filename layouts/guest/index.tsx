import React, {Fragment, ReactNode} from "react";
import { Footer, Header } from "./components";

interface LayoutProps {
  children: ReactNode;
}

const Index = ({ children }: LayoutProps) => {
  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
};

export default Index;
