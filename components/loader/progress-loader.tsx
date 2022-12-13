import React, { useEffect, useState } from "react";
import Image from "next/image";
import { bgBottom, bgCenter, uzPlane } from "../../assets/images/loading";

const ProgressLoader = () => {
  const [percent, setPercent] = useState(0);

  // setInterval(() => {
  //   if (percent < 100) {
  //     setPercent((prevCount) => prevCount + 10);
  //   }
  // }, 1000);

  return (
    <div
      className={
        "absolute h-screen z-10 w-full top-0 left-0 bg-primary-blue flex"
      }
    >
      <div className={"flex flex-col justify-between w-full"}>
        <div className={"border-b-2 max-w-3xl"}>
          <h3 className={"text-4xl font-semibold px-15 pt-15 pb-5 text-white"}>
            AVIAHELP
          </h3>
        </div>
        <div className={"grid grid-cols-12"}>
          <div className={"col-span-6 relative"}>
            <Image src={uzPlane} alt={"Plane"} />
            <div className={"absolute top-0 -z-10"}>
              <Image src={bgCenter} alt={"Plane"} />
            </div>
            <div className={"absolute bottom-0"}>
              <Image src={bgBottom} alt={"Plane"} />
            </div>
          </div>
          <div className={"col-span-6 flex items-end justify-end"}>
            <h1 className={"text-white text-[200px]"}>{percent}%</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressLoader;
