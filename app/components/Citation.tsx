"use client";

import React, { useState } from "react";
import { researchData } from "../../utils/researchData";
import AnimatedSection from "./layout/AnimatedSection";
import { playfair } from "../../utils/fonts";
import { FaCopy, FaCheck } from "react-icons/fa";

const Citation = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(researchData.citation.bibtex);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <AnimatedSection
      className="p-10 md:pe-56 text-primary-content academic-section"
      id="citation">
      <div className="max-w-4xl">
        <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${playfair.className}`}>
          Cite Us
        </h2>
        
        <div className="bg-base-200 p-6 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">BibTeX Citation</h3>
            <button
              onClick={copyToClipboard}
              className="btn btn-sm btn-primary btn-outline flex items-center gap-2">
              {copied ? <FaCheck /> : <FaCopy />}
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
          <pre className="bg-base-100 p-4 rounded text-sm overflow-x-auto">
            <code>{researchData.citation.bibtex}</code>
          </pre>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <div className="flex gap-4">
            <a 
              href={researchData.links.arxiv} 
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer">
              Read on ArXiv
            </a>
            <a 
              href={researchData.links.github} 
              className="btn btn-primary btn-outline"
              target="_blank"
              rel="noopener noreferrer">
              View Code
            </a>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Citation;
