import React from "react";
import { GuestLayout } from "../layouts";
import Heading from "../components/heading";
import Card from "../components/card";
import Button from "../components/button";
import { Shape, Variant } from "../enum";
import Image from "next/image";
import { arrowRight } from "../assets/images/icons";
import { bgServices } from "../assets/images/section";
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
            <Card className={"col-span-5 px-[35px] pt-[35px] h-[600px]"}>
              <Heading
                title={"O‘rindiqni tanlash"}
                subTitle={
                  "Engage active clients at the right timea nd save time chasing "
                }
                className={"max-w-sm"}
                titleClass={"text-[35px]"}
                subTitleClass={"text-base"}
              />
              <Button
                variant={Variant.outlined}
                className={"border-black rounded-2xl px-5 py-2"}
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
                className={"max-w-sm"}
                titleClass={"text-[35px]"}
                subTitleClass={"text-base"}
              />
              <Button
                variant={Variant.outlined}
                className={"border-black rounded-2xl px-5 py-2"}
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
                className={"max-w-sm"}
                titleClass={"text-[35px]"}
                subTitleClass={"text-base"}
              />
              <Button
                variant={Variant.outlined}
                className={"border-black rounded-2xl px-5 py-2"}
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
                className={"max-w-sm"}
                titleClass={"text-[35px]"}
                subTitleClass={"text-base"}
              />
              <Button
                variant={Variant.outlined}
                className={"border-black rounded-2xl px-5 py-2"}
              >
                <Image src={arrowRight} alt={"Arrow right"} />
              </Button>
            </Card>
          </div>
        </section>
        <section className={"relative h-60"}>
          <Image
            src={bgServices}
            layout="fill"
            objectFit="cover"
            quality={100}
            alt={"Arrow right"}
            className={'-z-10'}
          />
         <div></div>
        </section>
      </GuestLayout>
    </>
  );
};

export default Index;
