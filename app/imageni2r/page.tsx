import type { Metadata } from "next";
import Hero from "../components/Hero";
import ResearchAbstract from "../components/ResearchAbstract";
import ResearchSection from "../components/ResearchSection";
import ResearchResults from "../components/ResearchResults";
import Citation from "../components/Citation";
import Footer from "../components/layout/Footer";
import { heroText } from "../../utils/heroText";
import { researchData } from "../../utils/researchData";
import { getPaperBySlug } from "../../utils/papers";

const paper = getPaperBySlug("imageni2r")!;

export const metadata: Metadata = {
  title: `ImagenI2R | ${heroText.title}`,
  description: heroText.description,
};

export default function ImagenI2RPage() {
  return (
    <>
      <Hero
        title={heroText.title}
        subtitle={heroText.subtitle}
        description={heroText.description}
        venue={paper.venue}
        links={paper.links}
      />
      <ResearchAbstract />
      <ResearchSection />
      <ResearchResults />
      <Citation bibtex={researchData.citation.bibtex} links={paper.links} />
      <Footer />
    </>
  );
}
