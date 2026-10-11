import React from "react";
import { closingTheLoopData as data } from "../../../utils/closingTheLoopData";
import { Section } from "./shared";

const EmAbstract = () => (
  <Section id="abstract" title="Abstract">
    <div className="mb-8">
      <h3 className="text-2xl font-semibold mb-4">Authors</h3>
      <div className="space-y-2">
        {data.authors.map((author) => (
          <div key={author.name} className="flex items-center gap-2">
            <span className="font-medium">{author.name}</span>
            {author.equalContribution && <span className="text-sm text-primary">*</span>}
            <span className="text-sm text-gray-600">
              {data.affiliations[author.affiliation]} {author.affiliation}
            </span>
          </div>
        ))}
      </div>
      <p className="text-sm text-gray-600 mt-2">*equal contribution</p>
    </div>

    <div className="mb-8">
      <h3 className="text-2xl font-semibold mb-4">At a Glance</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {data.headlineStats.map(({ value, label }) => (
          <div key={label} className="bg-base-200 rounded-lg p-4 text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary">{value}</div>
            <div className="text-sm text-gray-600 mt-1">{label}</div>
          </div>
        ))}
      </div>
      <p className="text-sm text-gray-600 mt-3">
        Average relative improvement over the strongest baseline, across ten datasets and four corruption regimes.
      </p>
    </div>

    <div className="mb-8">
      <h3 className="text-2xl font-semibold mb-4">Abstract</h3>
      <p className="text-lg leading-relaxed">{data.abstract}</p>
    </div>

    <div>
      <h3 className="text-2xl font-semibold mb-4">Key Contributions</h3>
      <ol className="space-y-4">
        {data.keyContributions.map(({ title, text }, index) => (
          <li key={title} className="flex gap-4">
            <span className="flex-none w-9 h-9 rounded-full bg-primary text-primary-content font-bold flex items-center justify-center">
              {index + 1}
            </span>
            <div>
              <h4 className="font-semibold text-lg">{title}</h4>
              <p className="text-base md:text-lg leading-relaxed">{text}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </Section>
);

export default EmAbstract;
