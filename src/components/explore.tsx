"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import styles from "../app/styles/indx";
import CardList, { Card } from "../data/card";
import { staggerContainer } from "../app/utils/motion";
import { TitleText, TypingText } from "../components/customText";
import Expandedcard from "../components/expandedcard";

const Explorer = () => {
  const [active, setActive] = useState("world-2");

  return (
    <section
      className={`${styles.paddings} relative mx-auto overflow-hidden`}
      id="explore"
    >
      <motion.div
        variants={staggerContainer}
        whileInView="show"
        initial="hidden"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex 
      flex-col`}
      >
        <TypingText title="| Notre Équipe" textStyles="text-center" />

        <TitleText
          title={
            <>
              <TitleText
                title={
                  <>
                    L&apos;excellence technique
                    <br className="md:block hidden" /> au service de vos projets
                  </>
                }
                textStyles="text-center"
              />
            </>
          }
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {CardList.map((world: Card, index) => (
            <Expandedcard
              imageUrl={world.url}
              title={world.name}
              key={world.id}
              index={index}
              active={active}
              handleClick={setActive}
              id={world.id}
              profession={world.profession}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explorer;
