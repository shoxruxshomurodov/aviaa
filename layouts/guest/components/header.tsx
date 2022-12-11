import React from "react";
import Image from "next/image";
import { logoImg } from "../../../assets/images/logos";
import Button from "../../../components/button";
import { Variant, Shape, Size } from "../../../enum";
import { cabinCareIcon, gamburgerIcon } from "../../../assets/images/icons";
import { bgLeft, bgRight, borderBottom } from "../../../assets/images/header";
import ReactSelect from "react-select";
import Select from "../../../components/select";

const Header = () => {
  return (
    <header className={"bg-primary-blue"}>
      <nav className={"flex justify-between items-center px-15 pt-10"}>
        <Image src={logoImg} alt={"Logo Image"} />
        <div className="flex gap-3.5">
          <Button
            variant={Variant.outlined}
            shape={Shape.round}
            className="text-white text-lg py-2 px-10 font-inter font-medium border-white"
          >
            Kirish
          </Button>
          <Button
            className="bg-white py-4 px-4"
            variant={Variant.outlined}
            shape={Shape.round}
          >
            <Image src={gamburgerIcon} alt="Menu icon" />
          </Button>
        </div>
      </nav>
      <div>
        <div>
          <header className="bg-primary-blue flex flex-col items-center justify-center py-24">
            <div className={"max-w-3xl"}>
              <h1 className="header-title">
                Qulay{" "}
                <span
                  className={
                    "ml-20 text-primary-yellow relative bottom-image inline"
                  }
                >
                  <span
                    className={
                      "absolute bg-primary-yellow w-[70px] h-[70px] rounded-full  bottom-1/3 translate-y-1/3 -left-20"
                    }
                  >
                    <span className={"flex justify-center items-center h-full"}>
                      <Image src={cabinCareIcon} alt={"logo"} />
                    </span>
                  </span>
                  avia
                  <span className={"absolute -bottom-1 w-full left-0"}>
                    <Image src={borderBottom} alt={"logo"} />
                  </span>
                </span>{" "}
                yordamchingiz
              </h1>
              <p className="text-center text-2xl text-white mt-2.5 mb-11">
                Joy band qiling, mos ovqat tanlang va boshqalar xizmatlardan
                foydalaning
              </p>{" "}
            </div>
            <div className={"flex items-center gap-2.5"}>
              <div className={"flex-grow flex rounded-[15px] bg-[#488FFB]"}>
                <div
                  className={
                    "flex flex-col py-4 px-4  w-1/3 border-r-[3px] border-primary-blue"
                  }
                >
                  <label className={"mb-[5px] text-white"}>Chipta raqami</label>
                  <input
                    className={
                      "border-transparent bg-transparent focus:border-transparent focus:outline-0 text-[22px] text-white font"
                    }
                    value={"250 2103163081"}
                  />
                </div>
                <div
                  className={
                    "flex flex-col  py-4 pl-6 px-4  w-1/3 border-r-[3px] border-primary-blue"
                  }
                >
                  <label className={"mb-[5px] text-white"}>Familya</label>
                  <input
                    className={
                      "border-transparent bg-transparent focus:border-transparent focus:outline-0 text-[22px] text-white"
                    }
                    value={"Kurbanov"}
                  />
                </div>
                <div className={"flex flex-col w-1/3 max-w-1/3  py-4  pl-6 px-4 w-full"}>
                  <label
                    className={"mb-[5px] text-white flex items-center gap-2"}
                  >
                    Aeroport
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_150_2735)">
                        <path
                          d="M10.0001 10.9766L14.1251 6.85156L15.3034 8.0299L10.0001 13.3332L4.69678 8.0299L5.87511 6.85156L10.0001 10.9766Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_150_2735">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </label>
                  <Select />
                </div>
              </div>
              <div className={"flex"}>
                <Button
                  shape={Shape.round}
                  variant={Variant.primary}
                  className="text-primary-black font-inter font-medium text-xl py-7 px-12 z-10"
                >
                  Izlash
                </Button>
              </div>
            </div>
            <div className={"absolute top-0 left-0"}>
              <Image src={bgLeft} alt={"cloud"} />
            </div>
            <div className={"absolute bottom-0 right-0"}>
              <Image src={bgRight} alt={"cloud"} />
            </div>
          </header>
        </div>
      </div>
    </header>
  );
};

export default Header;
