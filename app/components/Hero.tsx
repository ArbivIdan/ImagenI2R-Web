import React from "react";
import { heroText } from "../../utils/heroText";
import { playfair } from "../../utils/fonts";
import AnimatedSection from "./layout/AnimatedSection";
import Wave from "./Wave";
import { researchData } from "../../utils/researchData";

const Hero = () => {
  return (
    <AnimatedSection
      className="relative flex flex-col md:justify-center min-h-[50vh] justify-center lg:min-h-hero p-10 md:pe-56  md:bg-inherit text-primary-contant text-center md:text-left "
      id="home">
      <Wave className="text-primary absolute -top-2 left-0 w-full md:hidden" />
      <div className="max-w-4xl">
        <h1
          className={`text-3xl md:text-5xl font-bold mb-4 z-30 ${playfair.className}`}>
          {heroText.title}
        </h1>
        <h2 className="text-lg md:text-xl mb-6 text-gray-600">{heroText.subtitle}</h2>
        <p className="text-base md:text-lg font-light mb-8">{heroText.description}</p>
        
        <div className="flex flex-wrap gap-4">
          <a 
            href={researchData.links.github} 
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer">
            GitHub
          </a>
          <a 
            href={researchData.links.arxiv} 
            className="btn btn-primary btn-outline"
            target="_blank"
            rel="noopener noreferrer">
            ArXiv
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Hero;
