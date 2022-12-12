import React, { Fragment } from "react";
import { GuestLayout } from "../layouts";
import Heading from "../components/heading";
import Card from "../components/card";
import Button from "../components/button";
import { Shape, Variant } from "../enum";
import Image from "next/image";
import {arrowRight, playIcon} from "../assets/images/icons";
import { bgServices } from "../assets/images/section";
import { newsOne, newsThree, newsTwo } from "../assets/images/news";
import {
  astanaAirway,
  azerAirway,
  chinaAirway,
  turkishAirway,
  uzAirway,
} from "../assets/images/logos";

const Index = () => {
  return (
    <>
      <GuestLayout>
        <section className={"px-[60px] mb-32"}>
          <Heading
            title={"Bizning Xizmatlar"}
            subTitle={
              "Engage active clients at the right time and save time" +
              "chasing unqualified leads"
            }
          />
          <div className={"grid grid-cols-12 gap-6"}>
            <Card className={"col-span-5 px-[35px] pt-[35px] h-[600px]"}>
              <Heading
                title={"O‘rindiqni tanlash"}
                subTitle={
                  "Engage active clients at the right timea nd save time chasing "
                }
                className={"max-w-sm mb-5"}
                titleClass={"text-[35px]"}
                subTitleClass={"text-base"}
              />
              <Button
                variant={Variant.outlined}
                className={"!border-black rounded-2xl px-5 py-2"}
              >
                <Image src={arrowRight} alt={"Arrow right"} />
              </Button>
            </Card>
            <Card className={"col-span-7 px-[35px] pt-[35px] h-[600px]"}>
              <Heading
                title={"Mazzali Taomnoma"}
                subTitle={
                  "Engage active clients at the right timea nd save time chasing "
                }
                className={"max-w-sm mb-5"}
                titleClass={"text-[35px]"}
                subTitleClass={"text-base"}
              />
              <Button
                variant={Variant.outlined}
                className={"!border-black rounded-2xl px-5 py-2"}
              >
                <Image src={arrowRight} alt={"Arrow right"} />
              </Button>
            </Card>
            <Card className={"col-span-7 px-[35px] pt-[35px] h-[600px]"}>
              <Heading
                title={"Yuklaringiz xavfsizligi"}
                subTitle={
                  "Engage active clients at the right timea nd save time chasing "
                }
                className={"max-w-sm mb-5"}
                titleClass={"text-[35px]"}
                subTitleClass={"text-base"}
              />
              <Button
                variant={Variant.outlined}
                className={"!border-black rounded-2xl px-5 py-2"}
              >
                <Image src={arrowRight} alt={"Arrow right"} />
              </Button>
            </Card>
            <Card className={"col-span-5 px-[35px] pt-[35px] h-[600px]"}>
              <Heading
                title={"Fast treck, CIP, VIP"}
                subTitle={
                  "Engage active clients at the right timea nd save time chasing "
                }
                className={"max-w-sm mb-5"}
                titleClass={"text-[35px]"}
                subTitleClass={"text-base"}
              />
              <Button
                variant={Variant.outlined}
                className={"!border-black rounded-2xl px-5 py-2"}
              >
                <Image src={arrowRight} alt={"Arrow right"} />
              </Button>
            </Card>
          </div>
        </section>
        <section className={"relative"}>
          <Image
            src={bgServices}
            layout="fill"
            objectFit="cover"
            quality={100}
            alt={"Arrow right"}
            className={"-z-10"}
          />
          <div className={"px-15 pb-[86px] pt-[250px]"}>
            <Heading
              title={"Aviachipta sotib olgandan keyingi xizmatlar"}
              subTitle={
                "Effortless time tracking and reporting. Save time and money with the time tracker trusted by more than 10,000 organizations."
              }
              className={"max-w-2xl mb-8"}
              titleClass={"text-[50px] text-white leading-[60px]"}
              subTitleClass={"text-base !text-white"}
            />
            <Button
              variant={Variant.primary}
              className={"px-15 py-3.5 text-[22px] text-black font-medium"}
            >
              Izlash
            </Button>
            <Card className={"absolute  right-15 -bottom-full -translate-y-3/4 p-[50px]"}>
              <h3
                className={
                  "font-semibold font-inter text-lg max-w-[200px] mb-14"
                }
              >
                Biz bilan hamkor avia kompaniyalar
              </h3>
              <div className={"grid grid-cols-12 gap-8"}>
                <div className={"col-span-4 flex items-center"}>
                  <Image src={uzAirway} alt={"Logo"} />
                </div>
                <div className={"col-span-4 flex items-center"}>
                  <Image src={turkishAirway} alt={"Logo"} />
                </div>
                <div className={"col-span-4 flex items-center"}>
                  <Image src={azerAirway} alt={"Logo"} />
                </div>
                <div className={"col-span-4 flex items-center"}>
                  <Image src={astanaAirway} alt={"Logo"} />
                </div>
                <div className={"col-span-4 flex items-center"}>
                  <Image src={chinaAirway} alt={"Logo"} />
                </div>
              </div>
              <div className={'flex items-center gap-5 mt-16'}>
                <Image src={playIcon} alt={"Play Icon"} />
                <p className={'text-[19px] font-medium'}>Videoni ko’rish</p>
              </div>
            </Card>
          </div>
        </section>
        <section>
          <Heading
            title={"Yangiliklar"}
            subTitle={
              "Engage active clients at the right time and save time" +
              "chasing unqualified leads"
            }
          />
          <div className={"grid grid-cols-12 gap-6 mb-32"}>
            <div className={"col-span-4"}>
              <Card className={"relative"}>
                <Image src={newsOne} alt={"new Image"} layout={"responsive"} />
              </Card>
              <h3
                className={
                  "text-[25px] font-graphik font-semibold leading-[35px] my-6"
                }
              >
                Yangi havo sayohati - yangi imkoniyatlar
              </h3>
              <time className={"font-inter text-sm "}>12 Sen, 2022</time>
            </div>
            <div className={"col-span-4"}>
              <Card className={"relative"}>
                <Image src={newsTwo} alt={"new Image"} layout={"responsive"} />
              </Card>
              <h3
                className={
                  "text-[25px] font-graphik font-semibold leading-[35px] my-6"
                }
              >
                Visit Dubai kompaniyasi bilan hamkorlikda tanlovi
              </h3>
              <time className={"font-inter text-sm "}>12 Sen, 2022</time>
            </div>
            <div className={"col-span-4"}>
              <Card className={"relative"}>
                <Image
                  src={newsThree}
                  alt={"new Image"}
                  layout={"responsive"}
                />
              </Card>
              <h3
                className={
                  "text-[25px] font-graphik font-semibold leading-[35px] my-6"
                }
              >
                Yangi xizmatlarimizdan foydalanib ko’ring
              </h3>
              <time className={"font-inter text-sm "}>12 Sen, 2022</time>
            </div>
          </div>
        </section>
      </GuestLayout>
    </>
  );
};

export default Index;
