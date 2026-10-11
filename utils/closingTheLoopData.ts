import results from "./closingTheLoopResults.json";

export const closingTheLoopData = {
  title: "Closing the Loop: Co-Evolving EM for Irregular Time Series Generation in Lifted Representations",
  subtitle: "Gal Fadlon*, Idan Arbiv*, Omri Azencot",
  description:
    "Irregular time-series generation is usually solved open-loop: impute once, freeze, train. We show the binding constraint is iteration, not imputer design, and close the imputer–generator loop with a co-evolving Monte Carlo EM in lifted image space.",
  authors: [
    { name: "Gal Fadlon", affiliation: "Ben Gurion University of the Negev", equalContribution: true },
    { name: "Idan Arbiv", affiliation: "Ben Gurion University of the Negev", equalContribution: true },
    { name: "Omri Azencot", affiliation: "Ben Gurion University of the Negev", equalContribution: false },
  ],
  affiliations: {
    "Ben Gurion University of the Negev": "🐪",
  } as Record<string, string>,
  abstract:
    "Regular time-series generation from irregular time series is typically reduced to one-shot imputation: complete each partial sequence once, freeze the completions, and train a generator on the resulting surrogate dataset. We show that this open-loop strategy is structurally flawed. Point imputers collapse ambiguous missing regions to conditional averages, while stochastic imputers become stale as the generator evolves; the binding constraint is therefore iteration, not imputer design. We introduce a co-evolving Monte Carlo EM framework that closes the imputer–generator loop. Each E-step samples missing values from the posterior of the current generator, and each M-step retrains the generator on these completions, preserving unconditional generator training. Since our diffusion prior operates in a lifted 2D representation while observations live in time-series space, we further introduce Posterior Sampling for Lifted Representations (PSLR), which enforces operator-consistent conditioning, uncertainty preservation, and manifold consistency during the E-step. Across ten datasets and four corruption regimes, our method achieves state-of-the-art performance, improving over the strongest baselines by 59% in discriminative score, 15% in predictive score, 73% in Context-FID, and 71% in feature-correlation error. Ablations show that our approach reduces average discriminative score by 73% over single-step baselines, closing most of the remaining gap to the clean-data oracle.",
  keyContributions: [
    {
      title: "Iteration is the binding constraint",
      text: "We show, theoretically and across a 10-dataset benchmark, that closed-loop training via co-evolving EM outperforms all published open-loop baselines. Iteration, not imputer design or architectural sophistication, is the primary driver of generative fidelity under missingness.",
    },
    {
      title: "A closed-loop framework for irregular generation",
      text: "A co-evolving Monte Carlo EM that alternates between sampling missing values and retraining the generator. To make it work in lifted space we develop PSLR, a plug-and-play posterior sampler for cross-space constraints, with three structural conditions (C1–C3) any valid dual-space E-step must satisfy.",
    },
    {
      title: "State-of-the-art on four corruption regimes",
      text: "New SOTA on the standard ten-dataset benchmark, recovering near-oracle performance with rapid convergence, plus three new, harder benchmarks: per-cell asynchronous missingness, contiguous block gaps, and continuous-time irregular sampling.",
    },
  ],
  headlineStats: [
    { value: "59%", label: "Discriminative" },
    { value: "15%", label: "Predictive" },
    { value: "73%", label: "Context-FID" },
    { value: "71%", label: "Correlation" },
  ],
  motivation: {
    openLoop:
      "Prior methods (GT-GAN, KoVAE, ImagenI2R) share a commit-and-forget template: a pretrained imputer completes each irregular sequence once, the completions are frozen, and a generator is trained on them. Missing values are ambiguous, the same partial sequence admits many valid completions, but an MSE-trained imputer resolves the ambiguity by predicting the conditional mean. Across a dataset this systematically shrinks variability, so the generator learns a narrower distribution than the true one.",
    betterImputer:
      "A better imputer does not fix this. A stochastic imputer restores diversity, but its conditional distribution is fixed before training; as the generator improves, the imputer falls out of sync. Training is unbiased only when missing values are sampled from the distribution the trained generator itself would produce, a self-referential requirement no pretrained imputer can satisfy. Closing the loop is what achieves it at every iteration.",
  },
  // App. "Controlled 2D Illustrative Experiment", two spirals at p_miss = 0.60
  mseTrap: [
    { method: "Point regression", mse: 2.22, es: 1.31, disc: 0.39 },
    { method: "Point imputer (NCDE)", mse: 2.46, es: 1.28, disc: 0.252 },
    { method: "EM, 1 iteration", mse: 3.65, es: 0.91, disc: 0.222 },
    { method: "Frozen stochastic", mse: 4.31, es: 0.85, disc: 0.154 },
    { method: "Co-evolving EM (Ours)", mse: 4.26, es: 0.79, disc: 0.049, isOurs: true },
  ],
  pslrConditions: [
    {
      id: "C1",
      title: "Operator-consistent conditioning",
      text: "Enforce observations through the composed operator G = A_ts ∘ T⁻¹ (mask after decoding the image back to a series), not an image-space mask approximation, so updates follow the true forward model.",
    },
    {
      id: "C2",
      title: "Uncertainty preservation",
      text: "Keep the full Tweedie covariance instead of a point estimate or heuristic diagonal, with an adaptive observation-noise scale σ_y = c·σ_t, so ambiguous regions stay multimodal instead of being averaged.",
    },
    {
      id: "C3",
      title: "Manifold consistency",
      text: "Project every sample back onto Range(T) via Π(x) = T(T⁻¹(x)), removing off-manifold components that would otherwise accumulate across EM iterations.",
    },
  ],
  averaged: {
    baselines: ["TimeGAN-Δt", "GT-GAN", "KoVAE", "ImagenI2R", "Ours"],
    settings: ["Timestep (Standard)", "Block", "Per-cell", "Continuous"],
    metrics: {
      disc: [
        [0.496, 0.387, 0.228, 0.067, 0.055],
        [0.499, 0.432, 0.321, 0.366, 0.097],
        [0.494, 0.447, 0.341, 0.304, 0.116],
        [0.498, 0.427, 0.326, 0.274, 0.043],
      ],
      pred: [
        [0.317, 0.168, 0.15, 0.132, 0.109],
        [0.377, 0.139, 0.131, 0.155, 0.11],
        [0.363, 0.193, 0.13, 0.138, 0.108],
        [0.339, 0.186, 0.114, 0.115, 0.104],
      ],
      fid: [
        [4.355, 5.172, 6.587, 0.373, 0.296],
        [6.05, 8.188, 3.971, 4.893, 0.657],
        [6.442, 7.598, 3.938, 3.595, 0.417],
        [6.062, 4.075, 3.618, 3.057, 0.03],
      ],
      corr: [
        [2.664, 2.911, 1.332, 0.33, 0.25],
        [3.46, 3.681, 2.394, 1.879, 0.227],
        [4.399, 4.521, 2.915, 2.182, 0.362],
        [4.062, 4.699, 3.204, 1.906, 0.243],
      ],
    },
  },
  ablation: [
    { method: "Point imputer (NCDE) + ImagenTime", closedLoop: false, imputer: "Deterministic", pslr: "✗", values: [0.225, 0.281, 0.149, 0.218], group: 0 },
    { method: "CSDI + ImagenTime", closedLoop: false, imputer: "Stochastic", pslr: "✗", values: [0.12, 0.095, 0.07, 0.095], group: 0 },
    { method: "Ours (1 iter, extended training)", closedLoop: false, imputer: "Posterior", pslr: "✓", values: [0.14, 0.12, 0.085, 0.115], group: 0 },
    { method: "Lifted-mask MMPS-EM", closedLoop: true, imputer: "Posterior", pslr: "✗", values: [0.095, 0.098, 0.096, 0.087], group: 1 },
    { method: "w/o C1", closedLoop: true, imputer: "Posterior", pslr: "partial", values: [0.065, 0.035, 0.014, 0.038], group: 1 },
    { method: "w/o C2", closedLoop: true, imputer: "Posterior", pslr: "partial", values: [0.072, 0.048, 0.022, 0.047], group: 1 },
    { method: "w/o C3", closedLoop: true, imputer: "Posterior", pslr: "partial", values: [0.078, 0.061, 0.031, 0.056], group: 1 },
    { method: "Ours (Full PSLR-EM)", closedLoop: true, imputer: "Posterior", pslr: "✓", values: [0.051, 0.022, 0.007, 0.027], group: 2, isOurs: true },
    { method: "Clean-data oracle", closedLoop: null, imputer: "–", pslr: "–", values: [0.009, 0.003, 0.007, 0.006], group: 2, isOracle: true },
  ],
  wallclock: [
    { rate: "30%", kovae: 9.89, imageni2r: 1.48, ours: 3.34, iters: 2.89 },
    { rate: "50%", kovae: 7.86, imageni2r: 1.91, ours: 3.76, iters: 6.56 },
    { rate: "70%", kovae: 8.25, imageni2r: 1.57, ours: 3.68, iters: 5.22 },
    { rate: "Avg.", kovae: 8.67, imageni2r: 1.65, ours: 3.59, iters: 4.89 },
  ],
  results,
  bibtex: `@inproceedings{fadlon2026closingtheloop,
  title={Closing the Loop: Co-Evolving EM for Irregular Time Series Generation in Lifted Representations},
  author={Gal Fadlon and Idan Arbiv and Omri Azencot},
  booktitle={Advances in Neural Information Processing Systems (NeurIPS)},
  year={2026}
}`,
};

export type MetricKey = "disc" | "pred" | "fid" | "corr";

export const metricNames: Record<MetricKey, string> = {
  disc: "Discriminative Score",
  pred: "Predictive Score",
  fid: "Context-FID",
  corr: "Correlation Score",
};
