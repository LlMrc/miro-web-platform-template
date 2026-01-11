"use client";

import React, { useState } from "react";
import List from "./li";
import CloseMenu from "./icon/closeMenu";
import HamburgerMenu from "./icon/hamburgerMenu";

import Link from "next/link";
import masha from "../../public/images/masha.png";
import Image from "next/image";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleClick = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header className="pt-0 pb-px lg:px-[30px]  sticky   top-0 z-10 flex items-start  background-color: rgb(255 255 255 / 0.1) border-b border-solid border-[#F0F0F0] backdrop-blur-[100px]">
      <div className="flex px-4 items-center  justify-between w-full  h-[90px]">
        <div className="inline-flex">
          <Link href="/">
            <Image
              src={masha}
              width="91"
              height="32"
              alt={"Masha Logo"}
              className="w-[90px] "
            />
          </Link>

          <div className="hidden lg:inline-flex items-end">
            <ul className="flex items-center w-[486.328px] h-[24px] shrink-0">
              <Link href="/services"><List name={"Services"} /></Link>
              <Link href="/projets"><List name={"Projets"} /></Link>
              <Link href="/expertise"><List name={"Expertise"} /></Link>
              <Link href="/guide"><List name={"Guide"} /></Link>
              <Link href="/tarifs">
                <li className=" px-2  text-[#050038]  text-base not-italic font-normal leading-6">
                  Tarifs
                </li>
              </Link>
            </ul>
          </div>
        </div>

        <div
          className="block lg:hidden translate-x-2 delay-75 ease-in"
          onClick={handleClick}
        >
          {openMenu ? <CloseMenu /> : <HamburgerMenu />}
        </div>

        <ul className=" hidden lg:flex  gap-4 items-center  h-[50px] shrink-0]">
          
<div className="w-10"></div>
          <h6 className="text-[#050038] [font-family:Inter] pl-6 text-base not-italic font-normal mr-6 leading-6">
            <Link href="/contact">Contact</Link>
          </h6>
         
          <Link href="/devis" className="relative overflow-hidden group z-0 inline-flex items-start pl-[22px] pr-[22.766px] py-[17px] text-white  border [background:#4262FF] rounded-3xl border-solid border-[#4262FF] hover:text-gray-800 mr-6">
            <h6 className="  [font-family:Helvetica] text-base not-italic font-normal leading-4">
              Devis Gratuit →
            </h6>
            <div className="absolute inset-0 bg-white translate-x-full transition-all duration-300 -z-10 ease-in group-hover:translate-x-0" />
          </Link>
        </ul>
      </div>

      {/* *************************************************************************** */}
      <div
        className={
          openMenu
            ? ` mx-auto  h-screen w-full z-10 absolute top-16
             `
            : "hidden"
        }
      >
        <div
          className="bg-white flex flex-col gap-2 h-screen
         

             text-2xl 
             font-semibold 
             space-x-2 
             justify-center items-center "
        >
          <Link href={"/services"} onClick={handleClick}>
            <p className="pb-2">Services</p>
          </Link>
          <Link href={"/projets"} onClick={handleClick}>
            <p className="py-2">Projets</p>
          </Link>
          <Link href={"/expertise"} onClick={handleClick}>
            <p className="py-2">Expertise</p>
          </Link>
          <Link href={"/guide"} onClick={handleClick}>
            <p className="py-2">Guide</p>
          </Link>
          <Link href={"/tarifs"} onClick={handleClick}>
            {" "}
            <p className="py-2">Tarifs</p>
          </Link>
          <Link href={"/contact"} onClick={handleClick} className="py-2">
            Contact
          </Link>
          <Link href={"/espace-client"} onClick={handleClick} className="py-2">
            Espace Client
          </Link>
          <Link
            href={"/devis"}
            onClick={handleClick}
            className="relative overflow-hidden group z-0 inline-flex items-start pl-[22px] pr-[22.766px] py-[17px] text-white  border [background:#4262FF] rounded-3xl border-solid border-[#4262FF] hover:text-gray-800"
          >
            <h6 className="  text-white [font-family:Helvetica] text-base not-italic font-normal leading-4">
              Devis Gratuit →
            </h6>
            <div className="absolute inset-0 bg-white translate-x-full transition-all duration-300 -z-10 ease-in group-hover:translate-x-0" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
