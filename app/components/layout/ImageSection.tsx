"use client";
import Image from "next/image";
import React from "react";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import AnimatedSection from "./AnimatedSection";
import { SocialIcon } from "../SocialIcon";
import { researchData } from "../../../utils/researchData";

const ImageSection = () => {
  const { socialItems } = researchData;
  const iconsStyle = "text-white hover:text-gray-300 transition-colors duration-200 text-2xl md:text-3xl lg:text-4xl drop-shadow-lg";

  return (
    <section className="relative w-screen h-[50vh] flex flex-col md:flex-row md:fixed md:right-0 md:top-0 md:h-full items-center justify-center bg-slate-400 md:w-5/12">
      {/* Social Icons - positioned on the right side */}
      <AnimatedSection className="flex md:flex-col gap-4 mb-8 md:mb-0 md:fixed md:right-0 transform md:-translate-y-1/2 md:pr-4 xl:pr-8 2xl:pr-12 z-20">
        {socialItems.map(({ link, icon }) => (
          <SocialIcon
            key={link}
            link={link}
            icon={icon as IconName}
            style={iconsStyle}
          />
        ))}
      </AnimatedSection>
      
      {/* Main content - image and header */}
      <AnimatedSection className="flex flex-col items-center justify-center space-y-6 z-10">
        <Image
          className="object-cover rounded-full overflow-hidden w-[65%] aspect-square md:w-56 lg:w-80 drop-shadow-2xl shadow-slate-400 md:hover:border-2 md:hover:border-sky-700 md:transition-all md:duration-200 md:hover:scale-105"
          src="/image.png"
          alt="Research Paper Author"
          width={800}
          height={800}
        />
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white drop-shadow-lg">
            The Sequential Learning Group
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mt-3 rounded-full opacity-80"></div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default ImageSection;
