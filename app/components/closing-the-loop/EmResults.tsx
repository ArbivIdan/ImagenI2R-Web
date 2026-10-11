import React from "react";
import { closingTheLoopData as data } from "../../../utils/closingTheLoopData";
import { Figure, Section, bestCell } from "./shared";
import AveragedResults from "./AveragedResults";
import ResultsExplorer from "./ResultsExplorer";

const regimes = [
  { name: "Timestamp-level", text: "The standard benchmark: all channels drop together at 30/50/70% of timesteps. 10 datasets × lengths 24, 96, 768." },
  { name: "Block missing", text: "Contiguous gaps from sensor outages, at the start, a random location, or the end of a window." },
  { name: "Per-cell", text: "Each sensor fails independently, so channels are missing asynchronously." },
  { name: "Continuous-time", text: "Each channel is sampled at irregular real-valued times, off the regular grid." },
];

const ablationGroups = ["Open loop: does stochasticity or more training suffice?", "Closed loop: does each PSLR condition matter?", "Full method"];

const maxWallclock = Math.max(...data.wallclock.map((row) => row.kovae));

const EmResults = () => (
  <Section id="results" title="Results">
    <div className="mb-8">
      <h3 className="text-2xl font-semibold mb-4">Four Corruption Regimes</h3>
      <p className="text-base md:text-lg leading-relaxed mb-6">
        All prior work evaluates a single corruption pattern. Real sensors fail for continuous periods, channels fail
        asynchronously, and sampling clocks are rarely uniform, so we add three new benchmarks alongside the standard
        one. Models are trained only on corrupted observations and evaluated by comparing unconditional samples to the
        fully observed data, against TimeGAN-Δt, GT-GAN, KoVAE, and ImagenI2R.
      </p>
      <Figure
        src="/closing-the-loop/corruption_types.png"
        alt="Four corruption regimes illustrated on three-channel signals"
        width={2400}
        height={570}
        label="Figure 1"
        caption={
          <>
            Four corruption regimes, all covered by a single observation operator A<sub>ts</sub>. Filled/hollow markers
            denote observed/missing entries.
          </>
        }
      />
      <div className="grid sm:grid-cols-2 gap-3">
        {regimes.map(({ name, text }) => (
          <div key={name} className="bg-base-200 rounded-lg p-4">
            <h4 className="font-semibold mb-1">{name}</h4>
            <p className="text-sm text-gray-600">{text}</p>
          </div>
        ))}
      </div>
    </div>

    <AveragedResults />
    <ResultsExplorer />

    <div className="mb-8">
      <h3 className="text-2xl font-semibold mb-4">Qualitative Evaluation</h3>
      <Figure
        src="/closing-the-loop/tsne_density_70.png"
        alt="t-SNE embeddings and density plots for Weather, Energy and Stocks at 70% missing rate, comparing real data, ours and ImagenI2R"
        width={1898}
        height={865}
        label="Figure"
        caption="2D t-SNE embeddings (top) and probability densities (bottom) at 70% missingness on Weather, Energy and Stocks. Our samples (orange) overlap the real data (blue) almost perfectly, while ImagenI2R (green) is more concentrated and slightly biased. Ours also wins every cell of the Wasserstein-distance comparison at 30%, 50% and 70%."
      />
    </div>

    <div className="mb-8">
      <h3 className="text-2xl font-semibold mb-4">Ablation Study</h3>
      <p className="text-base md:text-lg leading-relaxed mb-6">
        A stochastic imputer (CSDI) halves the error of a deterministic one, and a single round of posterior sampling
        with extended training performs about the same. Neither is enough. Only iterating closes the gap, and a naive
        single-space sampler in the loop is not enough either: every PSLR condition contributes.
      </p>
      <div className="bg-base-200 p-6 rounded-lg mb-6">
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr className="bg-primary text-primary-content">
                <th className="text-left font-bold">Method</th>
                <th className="text-center font-bold">Energy</th>
                <th className="text-center font-bold">Weather</th>
                <th className="text-center font-bold">Stock</th>
                <th className="text-center font-bold">Avg.</th>
              </tr>
            </thead>
            <tbody>
              {data.ablation.map((row, index) => (
                <React.Fragment key={row.method}>
                  {(index === 0 || data.ablation[index - 1].group !== row.group) && (
                    <tr>
                      <td colSpan={5} className="bg-base-300/60 text-sm font-semibold text-gray-600 py-2">
                        {ablationGroups[row.group]}
                      </td>
                    </tr>
                  )}
                  <tr
                    className={`hover:bg-base-300/40 transition-colors ${row.isOracle ? "text-gray-500 italic" : ""}`}>
                    <td>
                      <div className={row.isOurs ? "font-bold" : ""}>{row.method}</div>
                      {row.closedLoop !== null && (
                        <div className="flex flex-wrap gap-1 mt-1 not-italic">
                          <span className="badge badge-sm badge-ghost">{row.closedLoop ? "closed loop" : "open loop"}</span>
                          <span className="badge badge-sm badge-ghost">{row.imputer.toLowerCase()}</span>
                          <span className="badge badge-sm badge-ghost">PSLR {row.pslr}</span>
                        </div>
                      )}
                    </td>
                    {row.values.map((value, col) => (
                      <td key={col} className={`text-center tabular-nums ${row.isOurs ? bestCell : ""}`}>
                        {value.toFixed(3)}
                      </td>
                    ))}
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-600 mt-4 text-center">
          <strong>Table 2:</strong> Average discriminative score (lower is better) across Energy, Weather and Stock at
          30%, 50% and 70% drop rates.
        </p>
      </div>
    </div>

    <div className="mb-8">
      <h3 className="text-2xl font-semibold mb-4">Fast Convergence</h3>
      <p className="text-base md:text-lg leading-relaxed mb-6">
        EM sounds expensive, but in practice it converges in about 5 iterations: the STL warm start begins close to
        the data manifold, and each M-step continues from the previous weights for only 40 epochs. Time-to-best is{" "}
        <strong>58% lower than KoVAE</strong> and within 2.2× of ImagenI2R.
      </p>
      <Figure
        src="/closing-the-loop/em_convergence.png"
        alt="Running-minimum discriminative score per EM iteration on Energy, ETTh1, Mujoco, Weather and Stock at 70% missing rate"
        width={2400}
        height={545}
        label="Figure"
        caption="Running-minimum discriminative score per EM iteration at 70% missingness (the hardest setting). Curves drop sharply in the first few iterations and plateau within 5–13 iterations."
      />
      <div className="bg-base-200 p-6 rounded-lg">
        <h4 className="text-lg font-semibold mb-4">Wall-clock time to best discriminative score (hours, RTX 3090)</h4>
        <div className="space-y-4">
          {data.wallclock.map((row) => (
            <div key={row.rate}>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-semibold">{row.rate === "Avg." ? "Average" : `${row.rate} missing`}</span>
                <span className="text-gray-600">{row.iters.toFixed(1)} EM iterations on average</span>
              </div>
              {[
                { name: "KoVAE", value: row.kovae, color: "bg-gray-400" },
                { name: "Ours", value: row.ours, color: "bg-primary" },
                { name: "ImagenI2R", value: row.imageni2r, color: "bg-secondary" },
              ].map(({ name, value, color }) => (
                <div key={name} className="flex items-center gap-2 text-sm">
                  <span className="w-20 shrink-0 text-gray-600">{name}</span>
                  <div className="flex-1 h-3 bg-base-300 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full ${color}`} style={{ width: `${(value / maxWallclock) * 100}%` }} />
                  </div>
                  <span className="w-12 text-right tabular-nums">{value.toFixed(2)}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-600 mt-4 text-center">
          <strong>Table:</strong> Averaged across ten datasets at length 24, including all EM iterations needed to reach
          the best score.
        </p>
      </div>
    </div>
  </Section>
);

export default EmResults;
