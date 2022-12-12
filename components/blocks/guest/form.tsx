import React, { useState } from "react";
import InputMask from "react-input-mask";
import Select from "../../select";
import clsx from "clsx";
import Image from "next/image";
import { uzAirway } from "../../../assets/images/logos";
const Form = () => {
  const [openSelect, setOpenSelect] = useState(false);
  return (
    <form className={"flex gap-2 z-10"}>
      <div className={"flex bg-[#488FFB] rounded-xl"}>
        <div
          className={
            "flex flex-col  py-4 px-5 border-r-[3px] border-primary-blue"
          }
        >
          <label
            htmlFor={"ticketNumber"}
            className={"font-inter text-sm text-white mb-[5px]"}
          >
            Chipta raqami
          </label>
          <InputMask
            mask={"999 9999999999"}
            defaultValue={"9989807789698"}
            className={
              "bg-transparent focus:outline-none text-white font-medium text-[22px]"
            }
          />
        </div>
        <div
          className={
            " flex flex-col  py-4 px-5 border-r-[3px] border-primary-blue"
          }
        >
          <label
            htmlFor={"ticketNumber"}
            className={"font-inter text-sm text-white mb-[5px]"}
          >
            Familya
          </label>
          <input
            type="text"
            defaultValue={"Kurbanov"}
            className={
              "bg-transparent focus:outline-none text-white font-medium text-[22px]"
            }
          />
        </div>
        <div className={" flex flex-col  py-4 px-5"}>
          <label
            htmlFor={"ticketNumber"}
            className={
              "font-inter text-sm text-white mb-[5px] flex items-center gap-2 cursor-pointer"
            }
            onClick={() => {
              setOpenSelect(!openSelect);
            }}
          >
            Aeroport
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className={clsx(
                "transition-all duration-300",
                openSelect ? "-rotate-180" : "rotate-0"
              )}
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
          <Select
            menuIsOpen={openSelect}
            options={[
              {
                label: (
                  <div className={"flex"}>
                    <Image src={uzAirway} alt={"logo"} />
                    asdasd
                  </div>
                ),
                value: "uz",
              },
            ]}
          />
        </div>
      </div>
      <div className={"flex flex-col"}>
        <button
          className={
            "bg-primary-yellow h-full rounded-[15px] font-inter font-middle text-[20px] px-8"
          }
        >
          Izlash
        </button>
      </div>
    </form>
  );
};

export default Form;
