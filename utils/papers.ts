// Registry of every paper hosted on the site. The hub page, the paper tabs in
// the navbar and the per-paper side panel are all driven from this list, so
// adding a paper means adding an entry here plus its route under app/<slug>.

export interface PaperLink {
  label: string;
  // Empty string = not available yet; rendered as a disabled "soon" button.
  href: string;
}

export interface SectionLink {
  href: string;
  label: string;
}

export interface Paper {
  slug: string;
  shortName: string;
  title: string;
  venue: string;
  year: number;
  authors: string;
  tldr: string;
  highlights: { value: string; label: string }[];
  teaser: { src: string; alt: string; width: number; height: number };
  links: PaperLink[];
  socialItems: { link: string; icon: string }[];
  sections: SectionLink[];
}

const LAB_LINKEDIN = "https://www.linkedin.com/company/the-sequential-learning-group/";

export const papers: Paper[] = [
  {
    slug: "closing-the-loop",
    shortName: "Closing the Loop",
    title: "Closing the Loop: Co-Evolving EM for Irregular Time Series Generation in Lifted Representations",
    venue: "NeurIPS 2026",
    year: 2026,
    authors: "Gal Fadlon*, Idan Arbiv*, Omri Azencot",
    tldr: "One-shot imputation is the bottleneck. We close the imputer–generator loop with a co-evolving Monte Carlo EM, and introduce PSLR, a posterior sampler for lifted (image) representations.",
    highlights: [
      { value: "59%", label: "better Disc. score" },
      { value: "73%", label: "better Context-FID" },
      { value: "4", label: "corruption regimes" },
    ],
    teaser: {
      src: "/closing-the-loop/architecture.png",
      alt: "Overview of the co-evolving EM framework with PSLR",
      width: 2400,
      height: 686,
    },
    // TODO: fill in once available.
    links: [
      { label: "Paper", href: "" },
      { label: "arXiv", href: "" },
      { label: "Code", href: "" },
    ],
    socialItems: [{ link: LAB_LINKEDIN, icon: "linkedin" }],
    sections: [
      { href: "home", label: "Home" },
      { href: "abstract", label: "Abstract" },
      { href: "motivation", label: "Motivation" },
      { href: "method", label: "Method" },
      { href: "results", label: "Results" },
      { href: "citation", label: "Citation" },
    ],
  },
  {
    slug: "imageni2r",
    shortName: "ImagenI2R",
    title: "A Diffusion Model for Regular Time Series Generation from Irregular Data with Completion and Masking",
    venue: "NeurIPS 2025",
    year: 2025,
    authors: "Gal Fadlon*, Idan Arbiv*, Nimrod Berman, Omri Azencot",
    tldr: "Complete irregular sequences with a Time Series Transformer, then train a vision diffusion model with masking, so completed values act only as weak conditioning.",
    highlights: [
      { value: "70%", label: "better Disc. score" },
      { value: "85%", label: "lower compute cost" },
      { value: "12", label: "datasets" },
    ],
    teaser: {
      src: "/model_architecture.png",
      alt: "ImagenI2R two-step framework architecture",
      width: 800,
      height: 600,
    },
    links: [
      { label: "NeurIPS", href: "https://neurips.cc/virtual/2025/poster/118491" },
      { label: "Paper", href: "/ImagenTime_Irregular_NeurIPS_2025.pdf" },
      { label: "Code", href: "https://github.com/azencot-group/ImagenI2R" },
    ],
    socialItems: [
      { link: "https://github.com/azencot-group/ImagenI2R", icon: "github" },
      { link: LAB_LINKEDIN, icon: "linkedin" },
    ],
    sections: [
      { href: "home", label: "Home" },
      { href: "abstract", label: "Abstract" },
      { href: "introduction", label: "Introduction" },
      { href: "our-approach", label: "Method" },
      { href: "results", label: "Results" },
      { href: "citation", label: "Citation" },
    ],
  },
];

export const labSocialItems = [
  { link: "https://github.com/azencot-group", icon: "github" },
  { link: LAB_LINKEDIN, icon: "linkedin" },
];

export const getPaperBySlug = (slug: string) => papers.find((p) => p.slug === slug);

// "/closing-the-loop" -> paper, "/" -> undefined
export const getPaperFromPath = (pathname: string | null) =>
  getPaperBySlug((pathname ?? "/").split("/")[1] ?? "");
