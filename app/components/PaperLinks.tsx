import React from "react";
import { PaperLink } from "../../utils/papers";

interface PaperLinksProps {
  links: PaperLink[];
  className?: string;
  // First button is filled, the rest are outlined.
  emphasizeFirst?: boolean;
}

const PaperLinks = ({ links, className = "", emphasizeFirst = true }: PaperLinksProps) => (
  <div className={`flex flex-wrap gap-4 ${className}`}>
    {links.map(({ label, href }, index) => {
      const style = `btn btn-primary ${emphasizeFirst && index === 0 ? "" : "btn-outline"}`;
      if (!href) {
        return (
          <span
            key={label}
            className={`${style} btn-disabled no-underline`}
            title="Coming soon"
            aria-disabled="true">
            {label}
            <span className="badge badge-sm badge-ghost">soon</span>
          </span>
        );
      }
      return (
        <a
          key={label}
          href={href}
          className={`${style} no-underline`}
          target="_blank"
          rel="noopener noreferrer">
          {label}
        </a>
      );
    })}
  </div>
);

export default PaperLinks;
