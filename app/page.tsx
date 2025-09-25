import Hero from "./components/Hero";
import ResearchAbstract from "./components/ResearchAbstract";
import ResearchSection from "./components/ResearchSection";
import ResearchResults from "./components/ResearchResults";
import Citation from "./components/Citation";
import Footer from "./components/layout/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <ResearchAbstract />
      <ResearchSection />
      <ResearchResults />
      <Citation />
      <Footer />
    </>
  );
}
