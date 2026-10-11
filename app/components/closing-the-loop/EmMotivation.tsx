import React from "react";
import { closingTheLoopData as data } from "../../../utils/closingTheLoopData";
import { Figure, Section, bestCell } from "./shared";
import LoopDiagram from "./LoopDiagram";

const maxMse = Math.max(...data.mseTrap.map((row) => row.mse));
const maxDisc = Math.max(...data.mseTrap.map((row) => row.disc));
const minMse = Math.min(...data.mseTrap.map((row) => row.mse));
const minDisc = Math.min(...data.mseTrap.map((row) => row.disc));

const Bar = ({ value, max, best, color }: { value: number; max: number; best: boolean; color: string }) => (
  <div className="flex items-center gap-2">
    <div className="flex-1 h-2.5 bg-base-300 rounded-full overflow-hidden min-w-[3rem]">
      <div className={`h-full rounded-full ${color}`} style={{ width: `${(value / max) * 100}%` }} />
    </div>
    <span className={`w-14 text-right text-sm tabular-nums px-1 rounded ${best ? bestCell : ""}`}>
      {value.toFixed(value < 1 ? 3 : 2)}
    </span>
  </div>
);

const EmMotivation = () => (
  <Section id="motivation" title="Why Close the Loop?">
    <div className="mb-8">
      <h3 className="text-2xl font-semibold mb-4">Open-Loop Imputation Is Structurally Flawed</h3>
      <p className="text-base md:text-lg leading-relaxed mb-4">{data.motivation.openLoop}</p>
      <p className="text-base md:text-lg leading-relaxed mb-6">{data.motivation.betterImputer}</p>
      <LoopDiagram />
    </div>

    <div className="mb-8">
      <h3 className="text-2xl font-semibold mb-4">The Conditional-Mean Trap</h3>
      <Figure
        src="/closing-the-loop/conditional_mean_trap.png"
        alt="Histograms comparing a bimodal true conditional with TST-like, NCDE-like and co-evolving EM imputations"
        width={2400}
        height={489}
        label="Figure 2"
        caption="With a bimodal conditional p(x₂ | x₁ ≈ 0), deterministic TST-like and NCDE-like imputers collapse missing values to the conditional mean, placing mass between the true modes. Co-evolving EM samples from the current generator's posterior and recovers both modes."
      />
      <div className="alert bg-primary/10 border-l-4 border-primary rounded-lg">
        <p className="text-base md:text-lg">
          <strong>The binding constraint is iteration:</strong> imputations must be refined repeatedly using feedback
          from the generator they are used to train.
        </p>
      </div>
    </div>

    <div className="mb-8">
      <h3 className="text-2xl font-semibold mb-4">Lower Imputation Error ≠ Better Generation</h3>
      <p className="text-base md:text-lg leading-relaxed mb-6">
        A controlled 2D experiment where the true distribution is known: two interleaved spirals, with each coordinate
        removed with probability 0.6. The method with the <em>lowest</em> imputation MSE produces the <em>worst</em>{" "}
        samples, collapsing the spirals into a regression-line cross. Co-evolving EM has almost twice the MSE yet
        recovers both arms.
      </p>
      <Figure
        src="/closing-the-loop/two_spirals.png"
        alt="Generated samples on the two-spirals dataset for True, Full-data generator, Regression, NCDE, Frozen, EM 1 iteration and EM"
        width={2400}
        height={370}
        label="Figure"
        caption="Generated samples on two spirals at 60% missingness. Only co-evolving EM (right) recovers both spiral arms."
      />
      <div className="bg-base-200 p-6 rounded-lg">
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr className="bg-primary text-primary-content">
                <th className="text-left font-bold">Method</th>
                <th className="font-bold min-w-[10rem]">Imputation MSE ↓</th>
                <th className="font-bold min-w-[10rem]">Generation (disc.) ↓</th>
              </tr>
            </thead>
            <tbody>
              {data.mseTrap.map((row) => (
                <tr key={row.method} className="hover:bg-base-300/40 transition-colors">
                  <td className={row.isOurs ? "font-bold" : ""}>{row.method}</td>
                  <td>
                    <Bar value={row.mse} max={maxMse} best={row.mse === minMse} color="bg-gray-400" />
                  </td>
                  <td>
                    <Bar value={row.disc} max={maxDisc} best={row.disc === minDisc} color="bg-primary" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-600 mt-4 text-center">
          <strong>Table:</strong> Point-estimate metrics reward averaging; the downstream generation score reverses the
          ranking. The distributional Energy Score agrees with generation quality (Ours: 0.79, best). The same ordering
          holds in 21/21 configurations of a 7-distribution × 3-missing-rate sweep.
        </p>
      </div>
    </div>
  </Section>
);

export default EmMotivation;
