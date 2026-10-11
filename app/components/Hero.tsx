import React from "react";
import { playfair } from "../../utils/fonts";
import AnimatedSection from "./layout/AnimatedSection";
import Wave from "./Wave";
import PaperLinks from "./PaperLinks";
import { PaperLink } from "../../utils/papers";

interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  links: PaperLink[];
  venue?: string;
}

const Hero = ({ title, subtitle, description, links, venue }: HeroProps) => {
  return (
    <AnimatedSection
      className="relative flex flex-col md:justify-center min-h-[50vh] justify-center lg:min-h-hero p-10 md:pe-56  md:bg-inherit text-primary-contant text-center md:text-left "
      id="home">
      <Wave className="text-primary absolute -top-2 left-0 w-full md:hidden" />
      <div className="max-w-4xl">
        {venue && (
          <span className="badge badge-primary badge-outline badge-lg mb-4 font-semibold">{venue}</span>
        )}
        <h1
          className={`text-3xl md:text-5xl font-bold mb-4 z-30 ${playfair.className}`}>
          {title}
        </h1>
        <h2 className="text-lg md:text-xl mb-6 text-gray-600">{subtitle}</h2>
        <p className="text-base md:text-lg font-light mb-8">{description}</p>

        <PaperLinks links={links} className="justify-center md:justify-start" />
      </div>
    </AnimatedSection>
  );
};

export default Hero;
