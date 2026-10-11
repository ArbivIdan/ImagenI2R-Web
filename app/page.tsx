import Link from "next/link";
import AnimatedSection from "./components/layout/AnimatedSection";
import Wave from "./components/Wave";
import PaperCard from "./components/hub/PaperCard";
import Footer from "./components/layout/Footer";
import { papers } from "../utils/papers";
import { playfair } from "../utils/fonts";

const storyline = [
  {
    slug: "imageni2r",
    year: "2025",
    title: "Complete once, then mask",
    text: "ImagenI2R completes irregular series with a Time Series Transformer and trains a vision diffusion model with a masked loss, treating completions as weak conditioning.",
  },
  {
    slug: "closing-the-loop",
    year: "2026",
    title: "Close the imputer–generator loop",
    text: "Closing the Loop shows that any one-shot imputer, including ours, is the bottleneck, and replaces it with a co-evolving EM that samples completions from the generator itself.",
  },
];

export default function Home() {
  // Newest first.
  const sortedPapers = [...papers].sort((a, b) => b.year - a.year);

  return (
    <>
      <AnimatedSection
        className="relative flex flex-col justify-center min-h-[40vh] p-10 md:pe-56 text-center md:text-left"
        id="home">
        <Wave className="text-primary absolute -top-2 left-0 w-full md:hidden" />
        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-3">Research</p>
          <h1 className={`text-3xl md:text-5xl font-bold mb-4 ${playfair.className}`}>
            Generating Regular Time Series from Irregular Data
          </h1>
          <p className="text-base md:text-lg font-light">
            Real-world time series are irregular: sensors fail, channels drop out, and clocks drift. Our line of work
            builds diffusion models that learn the clean, regularly-sampled distribution from corrupted observations
            alone.
          </p>
        </div>
      </AnimatedSection>

      <section className="px-10 md:pe-56 pb-10" id="papers">
        <div className="max-w-4xl">
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${playfair.className}`}>Papers</h2>
          <div className="grid gap-8">
            {sortedPapers.map((paper, index) => (
              <PaperCard key={paper.slug} paper={paper} isLatest={index === 0} />
            ))}
          </div>
        </div>
      </section>

      <AnimatedSection className="px-10 md:pe-56 pb-16">
        <div className="max-w-4xl">
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${playfair.className}`}>How They Connect</h2>
          <ol className="relative border-s-2 border-primary/30 ms-3 space-y-8">
            {storyline.map(({ slug, year, title, text }) => (
              <li key={slug} className="ms-6">
                <span className="absolute -start-[1.4rem] flex items-center justify-center w-11 h-11 rounded-full bg-primary text-primary-content text-sm font-bold">
                  {year}
                </span>
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-base leading-relaxed text-gray-700 mb-2">{text}</p>
                <Link href={`/${slug}`} className="text-sm font-semibold">
                  Read more →
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </AnimatedSection>

      <Footer />
    </>
  );
}
