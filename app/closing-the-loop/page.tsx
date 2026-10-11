import type { Metadata } from "next";
import Hero from "../components/Hero";
import Citation from "../components/Citation";
import Footer from "../components/layout/Footer";
import EmAbstract from "../components/closing-the-loop/EmAbstract";
import EmMotivation from "../components/closing-the-loop/EmMotivation";
import EmMethod from "../components/closing-the-loop/EmMethod";
import EmResults from "../components/closing-the-loop/EmResults";
import { closingTheLoopData as data } from "../../utils/closingTheLoopData";
import { getPaperBySlug } from "../../utils/papers";

const paper = getPaperBySlug("closing-the-loop")!;

export const metadata: Metadata = {
  title: `Closing the Loop | ${paper.venue}`,
  description: data.description,
};

export default function ClosingTheLoopPage() {
  return (
    <>
      <Hero
        title={data.title}
        subtitle={data.subtitle}
        description={data.description}
        venue={paper.venue}
        links={paper.links}
      />
      <EmAbstract />
      <EmMotivation />
      <EmMethod />
      <EmResults />
      <Citation bibtex={data.bibtex} links={paper.links} />
      <Footer />
    </>
  );
}
