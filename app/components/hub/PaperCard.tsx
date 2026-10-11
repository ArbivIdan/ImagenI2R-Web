import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";
import { Paper } from "../../../utils/papers";
import { playfair } from "../../../utils/fonts";
import AnimatedSection from "../layout/AnimatedSection";

const PaperCard = ({ paper, isLatest }: { paper: Paper; isLatest: boolean }) => (
  <AnimatedSection className="card bg-base-200 shadow-sm hover:shadow-lg transition-shadow overflow-hidden">
    <Link href={`/${paper.slug}`} className="block bg-white p-4 no-underline" aria-label={`Open ${paper.shortName}`}>
      <Image
        src={paper.teaser.src}
        alt={paper.teaser.alt}
        width={paper.teaser.width}
        height={paper.teaser.height}
        className="w-full h-44 md:h-52 object-contain"
      />
    </Link>
    <div className="card-body p-6">
      <div className="flex flex-wrap items-center gap-2">
        <span className="badge badge-primary badge-outline font-semibold">{paper.venue}</span>
        {isLatest && <span className="badge badge-secondary font-semibold">Latest</span>}
        <span className="text-sm text-gray-500">{paper.shortName}</span>
      </div>
      <h3 className={`text-2xl font-bold leading-snug ${playfair.className}`}>
        <Link href={`/${paper.slug}`} className="text-inherit no-underline hover:text-primary">
          {paper.title}
        </Link>
      </h3>
      <p className="text-sm text-gray-600">{paper.authors}</p>
      <p className="text-base leading-relaxed">{paper.tldr}</p>
      <div className="grid grid-cols-3 gap-2 my-2">
        {paper.highlights.map(({ value, label }) => (
          <div key={label} className="bg-base-100 rounded-lg p-2 text-center">
            <div className="text-xl font-bold text-primary">{value}</div>
            <div className="text-xs text-gray-600 leading-tight">{label}</div>
          </div>
        ))}
      </div>
      <div className="card-actions items-center justify-between">
        <Link href={`/${paper.slug}`} className="btn btn-primary no-underline">
          Project page <HiArrowRight />
        </Link>
        <div className="flex gap-3 text-sm">
          {paper.links
            .filter(({ href }) => href)
            .map(({ label, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary">
                {label}
              </a>
            ))}
        </div>
      </div>
    </div>
  </AnimatedSection>
);

export default PaperCard;
