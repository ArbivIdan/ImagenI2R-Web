"use client";

import React, { useState } from "react";
import { closingTheLoopData, MetricKey, metricNames } from "../../../utils/closingTheLoopData";
import { ToggleGroup, bestCell, formatValue } from "./shared";

type Row = { model: string; values: number[] };
type ResultTable = {
  datasets: string[];
  rates: Record<string, Partial<Record<MetricKey, Row[]>>>;
  oracle: Partial<Record<MetricKey, number[]>>;
};
const tables = closingTheLoopData.results as Record<string, ResultTable>;

type Benchmark = "standard" | "block" | "cell" | "continuous";

const benchmarks: Record<
  Benchmark,
  { label: string; variants?: { value: string; label: string }[]; description: string }
> = {
  standard: {
    label: "Standard (timestamp)",
    variants: [
      { value: "standard-24", label: "Length 24" },
      { value: "standard-96", label: "Length 96" },
      { value: "standard-768", label: "Length 768" },
    ],
    description: "A fraction of timesteps is dropped; all features at a dropped timestep go missing together.",
  },
  block: {
    label: "Block missing",
    variants: [
      { value: "block-start", label: "Block start" },
      { value: "block-random", label: "Block random" },
      { value: "block-end", label: "Block end" },
    ],
    description: "A contiguous segment is removed at the start, a random location, or the end of the sequence (length 24).",
  },
  cell: {
    label: "Per-cell",
    description: "Each (time, feature) entry drops independently, giving asynchronous per-channel missingness (length 24).",
  },
  continuous: {
    label: "Continuous-time",
    description: "Observations arrive at real-valued times, each a linear blend of its two nearest grid points; ρ is the observation density (length 24).",
  },
};

const metricKeys: MetricKey[] = ["disc", "pred", "fid", "corr"];

// Keeps the model name visible while the dataset columns scroll sideways.
const stickyCell = "sticky left-0 z-10 bg-base-200 whitespace-nowrap";

const ResultsExplorer = () => {
  const [benchmark, setBenchmark] = useState<Benchmark>("standard");
  const [variant, setVariant] = useState("standard-24");
  const [rate, setRate] = useState("50%");
  const [metric, setMetric] = useState<MetricKey | "all">("disc");

  const tableKey = benchmarks[benchmark].variants ? variant : benchmark;
  const table = tables[tableKey];
  const rates = Object.keys(table.rates);
  const activeRate = rates.includes(rate) ? rate : rates[rates.length - 1];

  const selectBenchmark = (next: Benchmark) => {
    setBenchmark(next);
    const variants = benchmarks[next].variants;
    if (variants) setVariant(variants[0].value);
  };

  const renderMetricSection = (key: MetricKey) => {
    const rows = table.rates[activeRate][key] ?? [];
    const best = table.datasets.map((_, col) => Math.min(...rows.map((row) => row.values[col])));
    const oracle = table.oracle[key];
    return (
      <React.Fragment key={key}>
        {metric === "all" && (
          <tr>
            <td className={`${stickyCell} font-semibold !bg-base-300`}>{metricNames[key]}</td>
            <td colSpan={table.datasets.length} className="text-center text-sm text-gray-600 bg-base-300">
              Lower is better
            </td>
          </tr>
        )}
        {rows.map((row) => (
          <tr key={row.model} className="hover:bg-base-300/40 transition-colors">
            <td className={`${stickyCell} ${row.model === "Ours" ? "font-bold" : ""}`}>{row.model}</td>
            {row.values.map((value, col) => (
              <td key={col} className={`text-center tabular-nums ${value === best[col] ? bestCell : ""}`}>
                {formatValue(value)}
              </td>
            ))}
          </tr>
        ))}
        {oracle && (
          <tr className="text-gray-500 italic">
            <td className={stickyCell}>Clean-data oracle</td>
            {oracle.map((value, col) => (
              <td key={col} className="text-center tabular-nums">
                {formatValue(value)}
              </td>
            ))}
          </tr>
        )}
      </React.Fragment>
    );
  };

  const variantLabel = benchmarks[benchmark].variants?.find((v) => v.value === variant)?.label;

  return (
    <div className="mb-8">
      <h3 className="text-2xl font-semibold mb-4">Per-Dataset Results Explorer</h3>
      <div className="bg-base-200 p-6 rounded-lg mb-6">
        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-3">Step 1: Choose Corruption Regime</h4>
          <ToggleGroup
            value={benchmark}
            onChange={selectBenchmark}
            options={(Object.keys(benchmarks) as Benchmark[]).map((key) => ({ value: key, label: benchmarks[key].label }))}
          />
          {benchmarks[benchmark].variants && (
            <div className="mt-3">
              <ToggleGroup value={variant} onChange={setVariant} options={benchmarks[benchmark].variants!} />
            </div>
          )}
          <p className="text-sm text-gray-600 mt-3">{benchmarks[benchmark].description}</p>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-3">
            Step 2: Choose {benchmark === "continuous" ? "Observation Density" : "Missing Rate"}
          </h4>
          <ToggleGroup value={activeRate} onChange={setRate} options={rates.map((r) => ({ value: r, label: r }))} />
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-3">Step 3: Choose Metric to View</h4>
          <ToggleGroup
            variant="secondary"
            value={metric}
            onChange={setMetric}
            options={[
              { value: "all" as const, label: "All Metrics" },
              ...metricKeys.map((key) => ({ value: key, label: metricNames[key] })),
            ]}
          />
        </div>

        <div className="mb-4 p-3 bg-info/10 rounded-lg">
          <p className="text-sm">
            <strong>Currently viewing:</strong> {benchmarks[benchmark].label}
            {variantLabel ? ` · ${variantLabel}` : ""} · {activeRate}
            {benchmark === "continuous" ? " density" : " missing"} ·{" "}
            {metric === "all" ? "All Metrics" : metricNames[metric]}
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr className="bg-primary text-primary-content">
                <th className="text-left font-bold sticky left-0 z-10 bg-primary">Model</th>
                {table.datasets.map((dataset) => (
                  <th key={dataset} className="text-center font-bold">
                    {dataset}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>{metric === "all" ? metricKeys.map(renderMetricSection) : renderMetricSection(metric)}</tbody>
          </table>
        </div>
        <p className="text-sm text-gray-600 mt-4 text-center">
          Lower is better for all metrics; the best model per dataset is highlighted. Scroll the table sideways
          to see every dataset. Values for our method are the
          minimum across the EM training history. The clean-data oracle is trained on fully observed data and serves
          as a reference.
        </p>
      </div>
    </div>
  );
};

export default ResultsExplorer;
