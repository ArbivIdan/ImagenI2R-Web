"use client";

import React, { useState } from "react";
import { closingTheLoopData, MetricKey, metricNames } from "../../../utils/closingTheLoopData";
import { ToggleGroup, bestCell, formatValue } from "./shared";

const { baselines, settings, metrics } = closingTheLoopData.averaged;

const AveragedResults = () => {
  const [metric, setMetric] = useState<MetricKey>("disc");
  const rows = metrics[metric];

  return (
    <div className="mb-8">
      <h3 className="text-2xl font-semibold mb-4">Averaged Results Across Benchmarks</h3>
      <div className="bg-base-200 p-6 rounded-lg mb-6">
        <div className="mb-4">
          <ToggleGroup
            variant="secondary"
            value={metric}
            onChange={setMetric}
            options={(Object.keys(metricNames) as MetricKey[]).map((key) => ({ value: key, label: metricNames[key] }))}
          />
        </div>
        <div className="overflow-x-auto">
          <table className="table table-sm table-zebra w-full">
            <thead>
              <tr className="bg-primary text-primary-content">
                <th className="text-left font-bold">Setting</th>
                {baselines.map((name) => (
                  <th key={name} className="text-center font-bold">
                    {name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {settings.map((setting, index) => {
                const values = rows[index];
                const ours = values[values.length - 1];
                const bestBaseline = Math.min(...values.slice(0, -1));
                const gain = Math.round(((bestBaseline - ours) / bestBaseline) * 100);
                return (
                  <tr key={setting} className="hover:bg-base-200 transition-colors">
                    <td className="font-semibold">{setting}</td>
                    {values.slice(0, -1).map((value, col) => (
                      <td key={col} className="text-center tabular-nums">
                        {formatValue(value)}
                      </td>
                    ))}
                    <td className={`text-center tabular-nums ${bestCell}`}>
                      {formatValue(ours)}
                      <div className="text-xs font-semibold text-primary whitespace-nowrap">↓ {gain}%</div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-600 mt-4 text-center">
          <strong>Table 1:</strong> {metricNames[metric]} averaged across datasets for each corruption regime (lower is
          better). The percentage under our score is the relative improvement over the strongest baseline in each row. Our method is best in every setting and
          metric; prior methods, built around open-loop imputation, break down on the three new benchmarks.
        </p>
      </div>
    </div>
  );
};

export default AveragedResults;
