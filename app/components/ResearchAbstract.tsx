import React from "react";
import { researchData } from "../../utils/researchData";
import AnimatedSection from "./layout/AnimatedSection";
import { playfair } from "../../utils/fonts";

const ResearchAbstract = () => {
  return (
    <AnimatedSection
      className="p-10 md:pe-56 text-primary-content academic-section"
      id="abstract">
      <div className="max-w-4xl">
        <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${playfair.className}`}>
          Abstract
        </h2>
        
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Authors</h3>
          <div className="space-y-2">
            {researchData.authors.map((author, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="font-medium">{author.name}</span>
                {author.equalContribution && <span className="text-sm text-primary">*</span>}
                <span className="text-sm text-gray-600">
                  {researchData.affiliations[author.affiliation as keyof typeof researchData.affiliations]} {author.affiliation}
                </span>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-600 mt-2">*equal contribution</p>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Links</h3>
          <div className="flex gap-4">
            <a 
              href={researchData.links.github} 
              className="btn btn-primary btn-outline"
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

        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Abstract</h3>
          <p className="text-lg leading-relaxed">
            {researchData.abstract}
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4">Key Contributions</h3>
          <ol className="list-decimal list-inside space-y-3 text-lg leading-relaxed">
            {researchData.keyContributions.map((contribution, index) => (
              <li key={index} className="pl-2">
                {contribution}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ResearchAbstract;
