import React from "react";
import { GuestLayout } from "../layouts";
import Heading from "../components/heading";
const Index = () => {
  return (
    <>
      <GuestLayout>
        <section className={"px-[60px]"}>
          <Heading
            title={"Bizning Xizmatlar"}
            subTitle={
              "Engage active clients at the right time and save time" +
              "chasing unqualified leads"
            }
          />
          <div className={"grid grid-cols-12 gap-6"}>
            <div className={'col-span-5 h-60 bg-primary-yellow'}></div>
            <div className={'col-span-7 h-60 bg-primary-yellow'}></div>
            <div className={'col-span-7 h-60 bg-primary-yellow'}></div>
            <div className={'col-span-5 h-60 bg-primary-yellow'}></div>
          </div>
        </section>
      </GuestLayout>
    </>
  );
};

export default Index;
