"use client";
import React from "react";
import NavBar from "./NavBar";
import ImageSection from "./ImageSection";
import { usePathname } from "next/navigation";
import { getPaperFromPath, labSocialItems } from "../../../utils/papers";

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  const activePaper = getPaperFromPath(usePathname());
  return (
    <div>
      {/* key resets the active-section highlight when switching papers */}
      <NavBar key={activePaper?.slug ?? "hub"} activePaper={activePaper} />
      <ImageSection
        socialItems={activePaper?.socialItems ?? labSocialItems}
        caption={activePaper ? activePaper.venue : undefined}
      />
      {children}
    </div>
  );
};

export default LayoutWrapper;
