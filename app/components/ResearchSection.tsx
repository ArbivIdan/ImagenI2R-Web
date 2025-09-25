import React from "react";
import { researchData } from "../../utils/researchData";
import AnimatedSection from "./layout/AnimatedSection";
import { playfair } from "../../utils/fonts";
import Image from "next/image";

const ResearchSection = () => {
  return (
    <div id="introduction">
      {researchData.sections.map((section, index) => (
        <AnimatedSection
          key={section.id}
          className="p-10 md:pe-56 text-primary-content academic-section"
          id={section.id}>
          <div className="max-w-4xl">
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${playfair.className}`}>
              {section.title}
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-base md:text-lg leading-relaxed whitespace-pre-line">
                {section.content}
              </p>
            </div>
            
            {/* Add architecture image for the "Our Two-Step Framework" section */}
            {section.id === "our-approach" && (
              <div className="mt-8 mb-6">
                <div className="bg-base-200 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-center">Method Architecture</h3>
                  <div className="flex justify-center">
                    <Image
                      src="/model_architecture.png"
                      alt="Two-step framework architecture showing TST completion and vision diffusion process"
                      width={800}
                      height={600}
                      className="rounded-lg shadow-lg"
                      style={{ maxWidth: '100%', height: 'auto' }}
                      priority
                    />
                  </div>
                  <p className="text-sm text-gray-600 mt-4 text-center">
                    <strong>Figure:</strong> In the first step (top), we train a TST-based autoencoder, which we use during the second step (middle), 
                    where a vision diffusion model is trained with masking over non-active pixels. Inference (bottom) is done similarly to ImagenTime.
                  </p>
                </div>
              </div>
            )}
          </div>
        </AnimatedSection>
      ))}
    </div>
  );
};

export default ResearchSection;
