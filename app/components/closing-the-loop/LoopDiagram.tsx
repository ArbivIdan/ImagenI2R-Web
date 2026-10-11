"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiArrowRight, HiArrowPath } from "react-icons/hi2";
import { RichText, ToggleGroup } from "./shared";

type Mode = "open" | "closed";

const Box = ({ title, subtitle, highlight = false }: { title: string; subtitle: string; highlight?: boolean }) => (
  <div
    className={`rounded-lg p-3 text-center flex-1 min-w-0 w-full ${
      highlight ? "bg-primary/15 border-2 border-primary/40" : "bg-base-100 border border-base-300"
    }`}>
    <div className="font-semibold text-sm">{title}</div>
    <div className="text-xs text-gray-600 mt-1">
      <RichText text={subtitle} />
    </div>
  </div>
);

const Arrow = ({ vertical = false }: { vertical?: boolean }) => (
  <HiArrowRight className={`text-2xl text-gray-400 flex-none rotate-90 ${vertical ? "" : "md:rotate-0"}`} />
);

const OpenLoop = () => (
  <div className="flex flex-col md:flex-row items-center gap-3">
    <Box title="Irregular data" subtitle="partial observations y" />
    <Arrow />
    <Box title="Imputer (run once)" subtitle="TST / NCDE / CSDI" />
    <Arrow />
    <Box title="Frozen completions" subtitle="never updated" />
    <Arrow />
    <Box title="Generator" subtitle="learns a stale surrogate" />
  </div>
);

// Stacked vertically so the loop has room to read as a cycle in the narrow column.
const ClosedLoop = () => (
  <div className="flex flex-col items-center gap-3">
    <div className="w-full max-w-[14rem]">
      <Box title="Irregular data" subtitle="partial observations y" />
    </div>
    <Arrow vertical />
    <div className="relative w-full rounded-xl border-2 border-dashed border-primary/50 p-4 pt-7">
      <span className="absolute -top-3 left-4 bg-base-200 px-2 text-xs font-semibold text-primary flex items-center gap-1">
        <HiArrowPath /> repeat ~5 iterations
      </span>
      <div className="flex flex-col sm:flex-row items-center gap-3">
        <Box highlight title="E-step (PSLR)" subtitle="sample x ~ p_θ(x | y) from the current generator" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          className="flex-none">
          <HiArrowPath className="text-2xl text-primary" />
        </motion.div>
        <Box highlight title="M-step" subtitle="retrain the generator on fresh completions" />
      </div>
    </div>
    <Arrow vertical />
    <div className="w-full max-w-[14rem]">
      <Box title="Generator" subtitle="unconditional, near-oracle" />
    </div>
  </div>
);

const LoopDiagram = () => {
  const [mode, setMode] = useState<Mode>("closed");
  return (
    <div className="bg-base-200 p-6 rounded-lg mb-6">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <h4 className="text-lg font-semibold">Open loop vs. closed loop</h4>
        <ToggleGroup
          value={mode}
          onChange={setMode}
          options={[
            { value: "open", label: "Prior work (open loop)" },
            { value: "closed", label: "Ours (closed loop)" },
          ]}
        />
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={mode}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}>
          {mode === "open" ? <OpenLoop /> : <ClosedLoop />}
        </motion.div>
      </AnimatePresence>
      <p className="text-sm text-gray-600 mt-5 text-center">
        {mode === "open"
          ? "Commit-and-forget: completions are fixed before training, so the imputer can never benefit from a better generator."
          : "Each E-step samples completions from the current generator's posterior; each M-step continues training from the previous weights on them."}
      </p>
    </div>
  );
};

export default LoopDiagram;
