"use client";

import Image from "next/image";
import React from "react";
import banner from "../../public/images/Group.png";
import { motion } from "framer-motion";
import { staggerContainer, textVariant2 } from "@/app/utils/motion";

type Props = {
  title: String;
  description: String;
};

const CallToAction = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="inline-flex w-full flex-col items-center md:px-24"
    >
      <h2 className="md:w-[1120px] h-[168px]   relative ">
        <div className="text-[#050038]  relative my-0 mx-[auto] text-center h-[168px] w-[448px] [font-family:Inter] text-4xl md:text-5xl not-italic font-bold leading-[56px] tracking-[-1px]">
          <motion.p variants={textVariant2} initial="hidden" whileInView="show">
            Innovez sans limites
          </motion.p>
          <div className="shrink-0 absolute -top-14 md:-right-6 right-10">
            <Image src={banner} alt={"Group"} width={173.381} height={52.518} />
          </div>
        </div>
      </h2>
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-5  px-2 py-0">
        <Section
          title={"Développement Web"}
          description={`Sites vitrines, e-commerce, et applications web performantes. 
          Nous utilisons les dernières technologies (React, Next.js, Node.js) 
          pour des sites rapides et évolutifs.`}
        />

        <Section
          title={"Développement Mobile"}
          description={`Applications iOS et Android natives ou hybrides (React Native, Flutter).
          Offrez à vos utilisateurs une expérience mobile exceptionnelle
          et intuitive.`}
        />
        <Section
          title={"Conseil & Stratégie"}
          description={`Accompagnement personnalisé pour transformer vos idées en produits viables.
          Audit technique, UX/UI Design et stratégie de lancement
          pour maximiser votre succès.`}
        />
      </div>

      <div className=" relative overflow-hidden group shadow-lg z-0 text-white inline-flex items-center justify-center p-3 border [background:#4262FF] rounded-3xl border-solid border-[#4262FF] hover:text-gray-800">
        <p className="  text-center [font-family:Helvetica] text-lg not-italic font-normal leading-6">
          Démarrer un projet →
        </p>
        <div className="absolute inset-0 bg-white translate-x-full transition-all duration-300 -z-10 ease-in group-hover:translate-x-0" />
      </div>
    </motion.section>
  );
};

export default CallToAction;

export const Section = (props: Props) => {
  return (
    <div className="flex flex-col items-start gap-[29px] pl-6 pr-[22.394px] md:pt-[23px] pb-11">
      <p className="text-[#050038] [font-family:Inter] text-2xl not-italic font-bold leading-7 tracking-[-0.5px]">
        {props.title}
      </p>
      <p className="text-[rgba(5,0,56,0.60)] [font-family:Helvetica] text-lg not-italic font-normal leading-6">
        {props.description}
      </p>
    </div>
  );
};
