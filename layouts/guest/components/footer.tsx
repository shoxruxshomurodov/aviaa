import React from "react";
import { get, map } from "lodash";
import Image from "next/image";
import { logoImg } from "../../../assets/images/logos";
import { footer, footerLinks } from "../../../mock";

const Footer = () => {
  return (
    <footer className="grid grid-cols-12 gap-5 px-5 md:px-16">
      <div className="col-span-12 md:col-span-5 xl:col-span-4 bg-primary-black xl:px-14 pt-5 lg:pt-14 pb-7 text-white rounded-2xl flex flex-col items-center">
        <Image src={logoImg} alt={"logo"} />
        <p className="mb-3 mt-6 md:mt-14 text-center">
          Mijozlarga xizmat ko‘rsatish bo‘limi
        </p>
        <a className="px-6 py-3 bg-primary-gray rounded-[10px] font-semibold text-base md:text-lg lg:text-2xl mb-4 md:mb-10">
          (+998 78) 100-00-00
        </a>
        <ul className="inline-flex gap-7 mb-5 md:mb-14">
          {map(footerLinks, (link) => (
            <li key={get(link, "id")} className="cursor-pointer">
              <Image src={get(link, "image")} alt="social icon" />
            </li>
          ))}
        </ul>
        <a>&copy; aviahelp.uz, 2022</a>
      </div>
      <div className="col-span-12 md:col-span-7 xl:col-span-8 bg-primary-lightGray rounded-2xl px-14 pt-8 md:pt-14 pb-7 text-[#202020]">
        <div className="flex flex-col md:flex-row md:justify-between flex-wrap  gap-4">
          {map(footer, (item) => (
            <div key={get(item, "title")}>
              <h3 className="text-2xl font-bold mb-5 md:mb-7">
                {get(item, "title")}
              </h3>
              <ul>
                {map(get(item, "children"), (child) => (
                  <li className="mb-2 max-w-[250px]" key={get(child, "title")}>
                    {get(child, "title")}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
