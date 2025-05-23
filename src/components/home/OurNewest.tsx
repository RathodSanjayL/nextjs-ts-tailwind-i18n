"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import Container from "../common/Container";

const OurNewest: React.FC = () => {
  const firstImageRef = useRef<HTMLDivElement>(null);
  const secondImageRef = useRef<HTMLDivElement>(null);
  const thirdImageRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [firstVisible, setFirstVisible] = useState(false);
  const [secondVisible, setSecondVisible] = useState(false);
  const [thirdVisible, setThirdVisible] = useState(false);

  const t = useTranslations("HomePage");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === firstImageRef.current && entry.isIntersecting) {
            setFirstVisible(true);
          }
          if (entry.target === secondImageRef.current && entry.isIntersecting) {
            setSecondVisible(true);
          }
          if (entry.target === thirdImageRef.current && entry.isIntersecting) {
            setThirdVisible(true);
          }
        });
      },
      { threshold: 0.5 },
    );

    if (firstImageRef.current) observer.observe(firstImageRef.current);
    if (secondImageRef.current) observer.observe(secondImageRef.current);
    if (thirdImageRef.current) observer.observe(thirdImageRef.current);

    return () => {
      if (firstImageRef.current) observer.unobserve(firstImageRef.current);
      if (secondImageRef.current) observer.unobserve(secondImageRef.current);
      if (thirdImageRef.current) observer.unobserve(thirdImageRef.current);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 },
    );

    if (buttonRef.current) {
      observer.observe(buttonRef.current);
    }

    return () => {
      if (buttonRef.current) observer.unobserve(buttonRef.current);
    };
  }, []);

  return (
    <div className="relative">
      <Container className="px-4 md:px-0 pt-15 md:pt-28">
        <div className="pb-2 md:pb-7.5">
          <span className="text-primary-red text-base/6 font-semibold pb-8.5 md:pb-3.5 text-center block font-plus-jakarta-sans">
            {t("OUR_NEWEST_YOUR_HIGHEST")}
          </span>
          <h2 className="text-dark-gunmetal text-3xl md:text-5xl/15 font-bold pb-3.5 text-center block font-plus-jakarta-sans">
            <span>{t("HOW_TO_GER_COMMISSION")}</span>
          </h2>
          <span className="text-black text-base/6 font-semibold text-center block font-plus-jakarta-sans">
            {t("WITH_MAKYEE")}
          </span>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center md:gap-16.5">
          <div
            ref={firstImageRef}
            className={`transform transition-all duration-1000 ease-out ${
              firstVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-20 opacity-0"
            }`}
          >
            <Image
              src="/asset/immediate-withdraw.png"
              width={318}
              height={724}
              alt="immediate-withdraw"
              className="max-w-48 md:max-w-80 h-auto"
            />
          </div>
          <div className="bg-[linear-gradient(89.86deg,_#FFFFFF_0%,_#F8F8F8_6.5%)] px-2 py-4 md:py-6 md:pl-16.5 md:pr-6 max-w-132.5 rounded-3xl">
            <h3 className="max-w-93 w-full font-inter font-bold md:font-semibold text-3xl/12 md:text-5xl/12 text-dark-gunmetal pb-6">
              <span className="">{t("IMMEDIATE_WITHDRAW")}</span>
            </h3>
            <p className="font-plus-jakarta-sans text-lg/6.5 text-[#5A616E] pb-6">
              <span>{t("GET_INSTANT_ACCESS")}</span>
            </p>
            <Link
              href="#"
              className="bg-primary-red rounded-full py-3 text-center font-inter font-medium text-white text-base/6 w-fit px-10 mx-auto md:mx-0 md:w-full block"
            >
              {t("LEARN_MORE")}
            </Link>
          </div>
        </div>
      </Container>
      <Container className="pt-15 md:pt-5 px-4 md:px-0">
        <div className="flex flex-col-reverse md:flex-row justify-center items-center">
          <div className="bg-[linear-gradient(89.82deg,_#F8F8F8_73.5%,_#FFFFFF_100%)] py-4 px-2 md:pl-6 md:pr-16.5 max-w-132.5 rounded-3xl">
            <h3 className="max-w-110 w-full font-inter font-bold md:font-semibold text-3xl/11 md:text-5xl/12 text-dark-gunmetal pb-6">
              <span className="">{t("COMMISSION_ON_COMPLETION")}</span>
            </h3>
            <p className="font-plus-jakarta-sans text-lg/6.5 text-[#5A616E] pb-6">
              <span>{t("EARN_COMMISSION")}</span>
            </p>
            <p className="font-plus-jakarta-sans text-3xl/9 font-bold">
              <span className="text-dark-gunmetal">
                {t("NEVER_SEEN")},&nbsp;
              </span>
              <span className="text-primary-red">100%</span>
            </p>
            <p className="text-[#80858F] text-base/6 font-semibold font-plus-jakarta-sans pb-8">
              {t("COMMISSION_EFFORTLESS")}
            </p>
            <div ref={buttonRef} className="px-2 md:px-0 flex gap-3 md:gap-5">
              <div
                className={`transform transition-all duration-700 ease-out ${
                  isVisible
                    ? "scale-100 opacity-100 translate-y-0"
                    : "scale-75 opacity-0 translate-y-1/2"
                }`}
              >
                <Image
                  src="/asset/apple-store.svg"
                  width={185}
                  height={55}
                  alt="apple store"
                />
              </div>

              <div
                className={`transform transition-all duration-700 ease-out ${
                  isVisible
                    ? "scale-100 opacity-100 translate-y-0"
                    : "scale-75 opacity-0 translate-y-1/2"
                }`}
              >
                <Image
                  src="/asset/google-play.svg"
                  width={185}
                  height={55}
                  alt="google play"
                />
              </div>
            </div>
          </div>
          <div
            ref={secondImageRef}
            className={`transform transition-all duration-1000 ease-out ${
              secondVisible
                ? "-translate-x-4 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <Image
              src="/asset/commission.png"
              width={318}
              height={724}
              alt="commission"
              className="max-w-48 md:max-w-80 h-auto"
            />
          </div>
        </div>
      </Container>
      <Container className="pt-15 px-4 md:px-0">
        <div className="flex flex-col md:flex-row justify-center items-center md:gap-16.5">
          <div
            ref={thirdImageRef}
            className={`relative transform transition-all duration-1000 ease-out ${
              thirdVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-20 opacity-0"
            }`}
          >
            <Image
              src="/asset/multiple-withdraw.png"
              width={318}
              height={724}
              alt="multiple-withdraw"
              className="max-w-48 md:max-w-80 h-auto"
            />
          </div>
          <div className="bg-[linear-gradient(89.86deg,_#FFFFFF_0%,_#F8F8F8_6.5%)] px-2 py-4 md:py-6 md:pl-16.5 pr-6 max-w-132.5 rounded-3xl">
            <h3 className="max-w-110 w-full font-inter font-bold md:font-semibold text-3xl/12 md:text-5xl/12 text-dark-gunmetal pb-6">
              <span className="">{t("MULTIPLE_WITHDRAW_OPTIONS")}</span>
            </h3>
            <p className="font-plus-jakarta-sans text-lg/6.5 text-[#5A616E] pb-6">
              <span>{t("FAST_PAYOUT")}</span>
            </p>
            <div className="flex flex-wrap gap-4 md:gap-9.5">
              <div className="flex gap-2 md:gap-6 items-center bg-[#F9FBFF] px-2 py-2 md:px-4.5 w-fit border md:border-0 rounded-[19px] md:rounded-[28px]">
                <Image
                  src="/asset/bank-transfer.svg"
                  width={24}
                  height={24}
                  alt="bank-transfer"
                />
                <span className="font-inter text-xl/6 text-black font-medium">
                  {t("BANK_TRANSFER")}
                </span>
              </div>
              <div className="flex gap-2 md:gap-6 items-center bg-[#F9FBFF] px-2 py-2.5 md:px-4.5 md:-fit border md:border-0 rounded-[19px] md:rounded-[28px]">
                <Image
                  src="/asset/crypto.svg"
                  width={24}
                  height={24}
                  alt="crypto"
                />
                <span className="font-inter text-xl/6 text-black font-medium">
                  {t("CRYPTO")}
                </span>
              </div>
              <div className="flex gap-2 md:gap-6 items-center bg-[#F9FBFF] px-2 py-2.5 md:px-4.5 w-fit border md:border-0 rounded-[19px] md:rounded-[28px]">
                <Image
                  src="/asset/cheque.svg"
                  width={24}
                  height={24}
                  alt="cheque"
                />
                <span className="font-inter text-xl/6 text-black font-medium">
                  {t("CHEQUE")}
                </span>
              </div>
              <div className="flex gap-2 md:gap-6 items-center bg-[#F9FBFF] px-2 py-2.5 md:px-4.5 md:w-fit border md:border-0 rounded-[19px] md:rounded-[28px]">
                <Image
                  src="/asset/cash.svg"
                  width={24}
                  height={24}
                  alt="cash"
                />
                <span className="font-inter text-xl/6 text-black font-medium">
                  {t("CASH")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OurNewest;
