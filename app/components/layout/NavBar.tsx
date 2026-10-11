"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { playfair } from "../../../utils/fonts";
import { Link as ScrollLink, scrollSpy } from "react-scroll";
import { CgMenuRight, CgClose } from "react-icons/cg";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { motion, AnimatePresence } from "framer-motion";
import { Paper, papers } from "../../../utils/papers";

// Height of the two-row sticky header, used as the scroll offset.
const SCROLL_OFFSET = -110;

interface NavBarProps {
  // Paper whose page is open; undefined on the hub.
  activePaper?: Paper;
}

const PaperTabs = ({ activePaper }: NavBarProps) => (
  <div className="flex flex-wrap items-center gap-1 text-sm" role="tablist" aria-label="Papers">
    <Link
      href="/"
      role="tab"
      aria-selected={!activePaper}
      className={`flex items-center gap-1 px-2 sm:px-3 py-1.5 sm:py-1 rounded-full no-underline whitespace-nowrap transition-colors ${
        !activePaper ? "bg-primary text-primary-content font-semibold" : "text-gray-500 hover:text-gray-700 hover:bg-base-200"
      }`}>
      <HiOutlineSquares2X2 aria-label="All papers" />
      <span className="hidden sm:inline">All papers</span>
    </Link>
    <span className="text-gray-300 sm:px-1">|</span>
    {papers.map((paper) => {
      const isActive = activePaper?.slug === paper.slug;
      return (
        <Link
          key={paper.slug}
          href={`/${paper.slug}`}
          role="tab"
          aria-selected={isActive}
          className={`px-2 sm:px-3 py-1 rounded-full no-underline whitespace-nowrap transition-colors ${
            isActive ? "bg-primary text-primary-content font-semibold" : "text-gray-500 hover:text-gray-700 hover:bg-base-200"
          }`}>
          {paper.shortName}
          <span className={`hidden sm:inline ms-1 text-xs ${isActive ? "opacity-80" : "text-gray-400"}`}>
            ’{String(paper.year).slice(2)}
          </span>
        </Link>
      );
    })}
  </div>
);

const NavBar = ({ activePaper }: NavBarProps) => {
  const [isSelected, setIsSelected] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = activePaper?.sections ?? [];

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  // After switching papers the spy can fire against the previous page's scroll
  // position; re-check once the new page has scrolled to the top.
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSelected("Home");
      scrollSpy.update();
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <nav className="sticky top-0 w-screen md:w-full bg-base-100 z-50 border-b border-base-200">
      <div className="flex justify-between items-center gap-4 px-4 sm:px-8 pt-3 pb-2">
        <PaperTabs activePaper={activePaper} />
        {links.length > 0 && (
          <div className="md:hidden z-50 shrink-0">
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}>
                  <CgClose
                    className="text-2xl cursor-pointer"
                    onClick={toggleMenu}
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}>
                  <CgMenuRight
                    className="text-2xl cursor-pointer"
                    onClick={toggleMenu}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>

      {links.length > 0 && (
        <div className="hidden md:flex flex-wrap gap-x-4 gap-y-1 px-8 pb-3">
          {links.map(({ href, label }) => (
            <ScrollLink
              key={label}
              to={href}
              smooth={true}
              duration={500}
              spy={true}
              offset={SCROLL_OFFSET}
              className={`text-gray-500 hover:text-gray-600 cursor-pointer no-underline ${
                label === isSelected && "text-primary font-bold"
              }`}
              onSetActive={() => setIsSelected(label)}>
              {label}
            </ScrollLink>
          ))}
        </div>
      )}

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className={`md:hidden fixed inset-0 bg-base-100 flex flex-col gap-6 items-center justify-center z-40 ${playfair.className}`}>
          {links.map(({ href, label }) => (
            <ScrollLink
              key={label}
              to={href}
              smooth={true}
              duration={500}
              spy={true}
              offset={SCROLL_OFFSET}
              className={`text-5xl no-underline ${
                label === isSelected
                  ? "font-bold text-primary"
                  : "text-primary-content"
              }`}
              onSetActive={() => setIsSelected(label)}
              onClick={toggleMenu}>
              {label}
            </ScrollLink>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default NavBar;
