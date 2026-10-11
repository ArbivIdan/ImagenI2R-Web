import React from "react";
import { closingTheLoopData as data } from "../../../utils/closingTheLoopData";
import { Figure, RichText, Section } from "./shared";

const Equation = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-base-100 rounded px-4 py-3 my-3 text-center font-serif text-base md:text-lg overflow-x-auto">
    {children}
  </div>
);

const algorithm = [
  { label: "Init", text: "Complete each irregular series with a cheap STL decomposition, lift it to an image, and train an initial prior p_{θ0} with the standard EDM objective." },
  { label: "E-step", text: "With θ_{k−1} frozen, sample complete lifted series x_img ~ p_θ(x_img | y_ts) using PSLR with G = A_ts ∘ T⁻¹." },
  { label: "Project", text: "Project onto valid images, x_img ← T(T⁻¹(x_img)), and enforce the observed entries." },
  { label: "M-step", text: "Continue training θ_k from the previous weights (40 epochs) on the refreshed completions, using plain clean-data EDM training." },
  { label: "Inference", text: "Sample x_img ~ p_{θK} unconditionally with standard EDM and return T⁻¹(x_img)." },
];

const modularity = [
  { axis: "Lift T", options: "delay embedding (default), STFT" },
  { axis: "Operator A_ts", options: "random masks, blocks, per-cell, continuous-time" },
  { axis: "E-step sampler", options: "any sampler meeting C1–C3 (MMPS, TMPD)" },
  { axis: "Backbone", options: "any differentiable denoiser (EDM here)" },
];

const EmMethod = () => (
  <Section id="method" title="Method">
    <Figure
      src="/closing-the-loop/architecture.png"
      alt="Framework overview: STL initialization, Monte-Carlo EM loop with PSLR E-step and diffusion M-step, and the PSLR denoise-and-correct step"
      width={2400}
      height={686}
      label="Figure 3"
      caption="We initialize a generator from a simple decomposition of the irregular series, then refine it with a co-evolving Monte Carlo EM loop that alternates between posterior sampling (E-step) and generator updates (M-step). PSLR enables conditioning in the lifted space by iteratively denoising and correcting samples to match the observations."
      priority
    />

    <div className="mb-8">
      <h3 className="text-2xl font-semibold mb-4">Co-Evolving Monte Carlo EM</h3>
      <p className="text-base md:text-lg leading-relaxed mb-4">
        Each irregular series y<sub>ts</sub> is a partial view of an unobserved complete series. Maximizing the data
        likelihood directly is intractable, so we alternate two steps on a diffusion generator that operates on lifted
        2D (image) representations x<sub>img</sub> = T(x<sub>ts</sub>):
      </p>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-base-200 p-5 rounded-lg border-2 border-primary/30">
          <h4 className="font-semibold text-lg">E-step: sample, don&apos;t average</h4>
          <Equation>
            x<sub>img</sub><sup>(i,k)</sup> ~ p<sub>θ<sub>k−1</sub></sub>(x<sub>img</sub> | y<sub>ts</sub><sup>(i)</sup>, A<sub>ts</sub><sup>(i)</sup>)
          </Equation>
          <p className="text-sm text-gray-700">
            Draw completions from the posterior of the <em>current</em> generator, so they stay consistent with what
            the model has learned so far.
          </p>
        </div>
        <div className="bg-base-200 p-5 rounded-lg">
          <h4 className="font-semibold text-lg">M-step: plain training</h4>
          <Equation>
            θ<sub>k</sub> = argmin<sub>θ</sub> 𝔼 [ λ(σ) ‖ d<sub>θ</sub>(x<sub>img</sub><sup>(i,k)</sup> + σε, σ) − x<sub>img</sub><sup>(i,k)</sup> ‖² ]
          </Equation>
          <p className="text-sm text-gray-700">
            Identical to clean-data ImagenTime/EDM training: no masked loss, no auxiliary imputation head, no separate
            conditional model.
          </p>
        </div>
      </div>
    </div>

    <div className="mb-8">
      <h3 className="text-2xl font-semibold mb-4">Posterior Sampling in Two Spaces</h3>
      <p className="text-base md:text-lg leading-relaxed mb-4">
        The prior lives in image space, but observations constrain the decoded time series. The correct observation
        model is therefore the composed operator
      </p>
      <Equation>
        G<sub>i</sub> = A<sub>ts</sub><sup>(i)</sup> ∘ T<sup>−1</sup>, &nbsp;&nbsp; y<sub>ts</sub><sup>(i)</sup> = G<sub>i</sub> x<sub>img</sub>
      </Equation>
      <p className="text-base md:text-lg leading-relaxed mb-6">
        Existing diffusion posterior samplers (DPS, ΠGDM, DiffPIR, TMPD, MMPS) assume a single space. Used as-is,
        they correct with the wrong operator, average over modes in ambiguous regions, and drift off the manifold of
        valid lifted images. <strong>PSLR</strong> (Posterior Sampling for Lifted Representations) is a minimal,
        sampler-agnostic recipe that enforces three conditions:
      </p>
      <div className="grid gap-3">
        {data.pslrConditions.map(({ id, title, text }) => (
          <div key={id} className="bg-base-200 p-5 rounded-lg flex gap-4 items-start">
            <span className="badge badge-primary badge-lg font-bold flex-none">{id}</span>
            <div>
              <h4 className="font-semibold mb-1">{title}</h4>
              <p className="text-sm md:text-base text-gray-700">
                <RichText text={text} />
              </p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-sm text-gray-600 mt-4">
        We instantiate PSLR on MMPS (full Jacobian Tweedie covariance via conjugate gradient), giving L-MMPS; applying
        the same recipe to TMPD gives L-TMPD, which transfers without retuning.
      </p>
    </div>

    <div className="mb-8">
      <h3 className="text-2xl font-semibold mb-4">Full Algorithm</h3>
      <div className="bg-base-200 p-6 rounded-lg">
        <ol className="relative border-s-2 border-primary/30 ms-3 space-y-5">
          {algorithm.map(({ label, text }, index) => (
            <li key={label} className="ms-6">
              <span className="absolute -start-[0.95rem] flex items-center justify-center w-7 h-7 rounded-full bg-primary text-primary-content text-sm font-bold">
                {index + 1}
              </span>
              <h4 className="font-semibold">
                {label}
                {(label === "E-step" || label === "Project" || label === "M-step") && (
                  <span className="ms-2 text-xs font-normal text-gray-500">for k = 1 … K</span>
                )}
              </h4>
              <p className="text-sm md:text-base text-gray-700">
                <RichText text={text} />
              </p>
            </li>
          ))}
        </ol>
      </div>
    </div>

    <div>
      <h3 className="text-2xl font-semibold mb-4">Modular by Design</h3>
      <div className="grid sm:grid-cols-2 gap-3">
        {modularity.map(({ axis, options }) => (
          <div key={axis} className="bg-base-200 rounded-lg p-4">
            <div className="font-semibold">
              <RichText text={axis} />
            </div>
            <div className="text-sm text-gray-600">{options}</div>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

export default EmMethod;
