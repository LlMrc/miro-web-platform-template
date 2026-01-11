"use client";

import React from "react";
import StartSvg from "./start";
import hero_img from "../../public/images/hero.png";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { staggerContainer, zoomIn } from "@/app/utils/motion";

const LandingPage = () => {
  return (
    <div className="md:pt-24 mt-10 px-2 flex flex-col mx-auto  md:flex-row lg:flex-row md:px-24 justify-center  items-center   md:gap-[40px]">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="flex flex-col h-[469px] px-2 sm:full  md:w-[500px] gap-4 "
      >
        <motion.div
           variants={zoomIn(0.1, 0.5)}
           initial="hidden"
           whileInView="show"
           className="md:text-5xl text-4xl items-start  not-italic text-[#050038] font-bold leading-[56px] tracking-[-1px]"
         >
           Expertise en Développement Web et Mobile
         </motion.div>
         <div className="text-lg not-italic text-[#050038B8] font-normal leading-6">
           Nous transformons vos idées en solutions numériques innovantes. Applications web, sites vitrines, applications mobiles iOS et Android pour faire grandir votre entreprise.
         </div>

         <div className="flex  md:w-[440px] flex-col justify-center   items-start gap-2.5">
           <div
             className="relative overflow-hidden flex   bg-[#4262FF] h-[48px] w-full
             text-white justify-center z-0 shadow-lg cursor-pointer hover:bg-blue-700 transition-all
            items-center px-2 rounded-[32px] border border-solid border-[#4262FF]"
           >
           <Link href="/contact">  <h6 className=" text-center [font-family:Helvetica] text-lg not-italic font-normal leading-[27px]">
               Contactez-nous →
             </h6>
             </Link>
           </div>
         </div>

         <span className="text-[rgba(5,0,56,0.40)] [font-family:Helvetica] text-sm not-italic font-normal leading-5">
           Devis gratuit et réponse sous 24h
         </span>

         <div className="inline-flex shadow-md sm:p-4 md:p-[14px] items-start rounded-[8px] bg-[#F5F5F7] hover:shadow-sm">
           <div className="flex flex-col items-start gap-[2px]">
             <div className="flex p-2 items-start gap-[6px] ">
               <StartSvg />
               <StartSvg />
               <StartSvg />
               <StartSvg />
               <StartSvg />
             </div>
             <span className="text-[#050038] p-1  [font-family:Helvetica] text-[11px] not-italic font-normal leading-[15px]">
               Plus de 50 projets réussis
             </span>
           </div>
         </div>

          <div className="flex items-start gap-[14.328px] self-end px-4 md:px-10 md:text-2xl py-0">
            <Link href="/contact">
              <h4 className="hover:text-blue-800">Contact us ✉</h4>
            </Link>
          </div>
      </motion.div>

      <div className="">
        <Image
          className="sm:w-screen md:w-[580px]  md:h-[462.844px]"
          src={hero_img}
          alt={"hero image"}
          priority
        />
      </div>
    </div>
  );
};

export default LandingPage;
