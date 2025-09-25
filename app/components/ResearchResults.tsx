import React from "react";
import AnimatedSection from "./layout/AnimatedSection";
import { playfair } from "../../utils/fonts";
import Image from "next/image";

const ResearchResults = () => {
  return (
    <AnimatedSection
      className="p-10 md:pe-56 text-primary-content academic-section"
      id="results">
      <div className="max-w-4xl">
        <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${playfair.className}`}>
          Results & Comparison
        </h2>
        
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Method Overview</h3>
          <div className="bg-base-200 p-6 rounded-lg">
            <p className="text-lg mb-4">
              Our two-step framework addresses the challenge of irregular time series generation by combining Time Series Transformer completion with vision-based diffusion models.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center">
                <h4 className="font-semibold text-lg mb-2">Step 1: TST Completion</h4>
                <div className="bg-gray-100 p-4 rounded">
                  <p className="text-sm text-gray-600">Complete irregular sequences</p>
                  <p className="text-sm text-gray-600">Create natural neighborhoods</p>
                  <p className="text-sm text-gray-600">Efficient preprocessing</p>
                </div>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-lg mb-2">Step 2: Vision Diffusion</h4>
                <div className="bg-primary/10 p-4 rounded">
                  <p className="text-sm text-primary font-semibold">Mask-based denoising</p>
                  <p className="text-sm text-primary font-semibold">Minimize dependence on completed values</p>
                  <p className="text-sm text-primary font-semibold">Robust generation</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Performance Comparison</h3>
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <th>Method</th>
                  <th>Discriminative Score</th>
                  <th>Computational Cost</th>
                  <th>Training Time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>GT-GAN</td>
                  <td>Baseline</td>
                  <td>High (NCDE preprocessing)</td>
                  <td>6.5x slower</td>
                </tr>
                <tr>
                  <td>KoVAE</td>
                  <td>Baseline</td>
                  <td>High (NCDE preprocessing)</td>
                  <td>6.5x slower</td>
                </tr>
                <tr className="bg-primary/10">
                  <td className="font-semibold">Our Method</td>
                  <td className="font-semibold text-primary">70% improvement</td>
                  <td className="font-semibold text-primary">85% reduction</td>
                  <td className="font-semibold text-primary">Significantly faster</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 mt-4 text-center">
            <strong>Summary:</strong> Our method achieves significant improvements over existing approaches, delivering 70% better discriminative performance and 85% reduction in computational cost.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Discriminative Score vs. Training Time</h3>
          <div className="bg-base-200 p-6 rounded-lg mb-6">
            <div className="flex justify-center">
              <Image
                src="/disc_time_graph.png"
                alt="Discriminative Score vs. Time graph comparing Ours and KoVAE models across different sequence lengths"
                width={800}
                height={600}
                className="rounded-lg shadow-lg"
                style={{ maxWidth: '100%', height: 'auto' }}
                priority
              />
            </div>
            <p className="text-sm text-gray-600 mt-4 text-center">
              <strong>Figure:</strong> Comparison of discriminative score vs. training time for our approach and KoVAE across different sequence lengths (24, 96, 768). Our method consistently achieves lower computational times for comparable discriminative scores, demonstrating superior efficiency.
            </p>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Training Time Comparison</h3>
          <div className="bg-base-200 p-6 rounded-lg mb-6">
            <div className="flex justify-center">
              <Image
                src="/training_time_table.png"
                alt="Training time comparison table for sequence lengths 24, 96, and 768 across different missing rates"
                width={1000}
                height={600}
                className="rounded-lg shadow-lg"
                style={{ maxWidth: '100%', height: 'auto' }}
                priority
              />
            </div>
            <p className="text-sm text-gray-600 mt-4 text-center">
              <strong>Table 1:</strong> Training time (in hours) for sequence lengths (24, 96, and 768), averaged over 30%, 50%, and 70% missing rates. Our method demonstrates significantly faster training times compared to existing approaches.
            </p>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Quantitative Results (Sequence Length 24)</h3>
          <div className="bg-base-200 p-6 rounded-lg mb-6">
            <div className="flex justify-center">
              <Image
                src="/model_results_24.png"
                alt="Quantitative results comparing different models across various datasets and evaluation metrics for sequence length 24"
                width={1200}
                height={700}
                className="rounded-lg shadow-lg"
                style={{ maxWidth: '100%', height: 'auto' }}
                priority
              />
            </div>
            <p className="text-sm text-gray-600 mt-4 text-center">
              <strong>Table 2:</strong> Averaged results over 30%, 50%, 70% missing rates for sequence length 24. Our method consistently achieves state-of-the-art performance across all evaluation metrics (Discriminative Score, Prediction Score, FID, Correlation) and datasets.
            </p>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Quantitative Results (Sequence Lengths 96 and 768)</h3>
          <div className="bg-base-200 p-6 rounded-lg mb-6">
            <div className="flex justify-center">
              <Image
                src="/model_results_96_768.png"
                alt="Quantitative results comparing KoVAE and our method across various datasets and evaluation metrics for sequence lengths 96 and 768"
                width={1200}
                height={700}
                className="rounded-lg shadow-lg"
                style={{ maxWidth: '100%', height: 'auto' }}
                priority
              />
            </div>
            <p className="text-sm text-gray-600 mt-4 text-center">
              <strong>Table 3:</strong> Averaged results over 30%, 50%, 70% missing rates for sequence length 96 (top) and 768 (bottom). Our method demonstrates superior performance across longer sequences, particularly in FID scores which indicate better generative quality.
            </p>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Qualitative Evaluation</h3>
          <div className="bg-base-200 p-6 rounded-lg mb-6">
            <div className="flex justify-center">
              <Image
                src="/qualitative_evaluation.png"
                alt="2D t-SNE embeddings and probability density functions comparing real data vs synthetic data from our method and KoVAE"
                width={1200}
                height={800}
                className="rounded-lg shadow-lg"
                style={{ maxWidth: '100%', height: 'auto' }}
                priority
              />
            </div>
            <p className="text-sm text-gray-600 mt-4 text-center">
              <strong>Figure 4:</strong> 2D t-SNE embeddings (top) and probability density functions (bottom) for real data vs. synthetic data from our method and KoVAE, under a 70% missing rate. From left to right: Energy (length 24), Weather (length 96), and Stock (length 768) datasets. Our method shows strong alignment with real data in both structural similarity (t-SNE) and distribution matching (PDFs).
            </p>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Robustness Under Noise</h3>
          <div className="bg-base-200 p-6 rounded-lg mb-6">
            <div className="flex justify-center">
              <Image
                src="/result_under_noise.png"
                alt="Discriminative and predictive scores for 50% missing rate on Weather, ETTh1, Stock, and Energy datasets with injected noise levels"
                width={1200}
                height={700}
                className="rounded-lg shadow-lg"
                style={{ maxWidth: '100%', height: 'auto' }}
                priority
              />
            </div>
            <p className="text-sm text-gray-600 mt-4 text-center">
              <strong>Table 5:</strong> Discriminative and predictive scores for 50% missing rate on Weather, ETTh1, Stock, and Energy datasets with injected noise levels (0.1, 0.15, and 0.2). Our method demonstrates superior robustness to noise, particularly in predictive tasks, maintaining consistent performance across different noise levels.
            </p>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Ablation Study</h3>
          <div className="bg-base-200 p-6 rounded-lg mb-6">
            <div className="mb-4">
              <h4 className="text-lg font-semibold mb-3">Method Components Explained:</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div><strong>KoVAE + TST:</strong> KoVAE baseline with TST completion</div>
                  <div><strong>TimeAutoDiff + TST:</strong> TimeAutoDiff with TST completion</div>
                  <div><strong>TransFusion + TST:</strong> TransFusion with TST completion</div>
                </div>
                <div className="space-y-2">
                  <div><strong>Ours (Mask Only):</strong> Our method using only masking without TST completion</div>
                  <div><strong>Ours (Without Mask):</strong> Our method using only TST completion without masking</div>
                  <div><strong>Ours:</strong> Our complete two-step framework (TST + Masking)</div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/method_ablation.png"
                alt="Ablation study showing discriminative scores for different method components across various missing rates and sequence lengths"
                width={1200}
                height={800}
                className="rounded-lg shadow-lg"
                style={{ maxWidth: '100%', height: 'auto' }}
                priority
              />
            </div>
            <p className="text-sm text-gray-600 mt-4 text-center">
              <strong>Table 8:</strong> Discriminative scores of the ablation study with 30%, 50%, and 70% drop-rate on Energy and Stock datasets for sequence lengths of 24, 96, and 768. The complete two-step framework (Ours) consistently outperforms all component variations, demonstrating the importance of both TST completion and masking strategies.
            </p>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Completion Strategy Ablation Study</h3>
          <div className="bg-base-200 p-6 rounded-lg mb-6">
            <div className="mb-4">
              <h4 className="text-lg font-semibold mb-3">Imputation Methods Explained:</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div><strong>GN → NaN:</strong> Gaussian Noise replaced with NaN values (baseline)</div>
                  <div><strong>0 → NaN:</strong> Zero values replaced with NaN (simple missing data handling)</div>
                  <div><strong>LI:</strong> Linear Interpolation between observed points</div>
                  <div><strong>PI:</strong> Polynomial Interpolation for smooth curve fitting</div>
                  <div><strong>NCDE:</strong> Neural Controlled Differential Equations for continuous dynamics</div>
                </div>
                <div className="space-y-2">
                  <div><strong>CSDI:</strong> Conditional Score-based Diffusion Models for Imputation</div>
                  <div><strong>SI:</strong> Spline Interpolation for flexible curve fitting</div>
                  <div><strong>GRU-D:</strong> Gated Recurrent Unit with Decay mechanism</div>
                  <div><strong>Ours (TST):</strong> Our Time Series Transformer completion method</div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/completion_strategy_ablation.png"
                alt="Completion strategy ablation study comparing different imputation methods on Energy and Stock datasets"
                width={1200}
                height={700}
                className="rounded-lg shadow-lg"
                style={{ maxWidth: '100%', height: 'auto' }}
                priority
              />
            </div>
            <p className="text-sm text-gray-600 mt-4 text-center">
              <strong>Table 9 (b):</strong> Imputation methods with 50% drop-rate. Comparison of different completion strategies on Energy and Stock datasets, showing discriminative and predictive scores. Our TST-based completion method consistently achieves the best performance across both metrics and datasets.
            </p>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Key Advantages</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold">Natural Neighborhoods</h4>
                  <p className="text-sm text-gray-600">TST completion creates realistic pixel neighborhoods</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold">Architecture Agnostic</h4>
                  <p className="text-sm text-gray-600">Works with any diffusion backbone</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold">Efficient Processing</h4>
                  <p className="text-sm text-gray-600">No expensive NCDE preprocessing required</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold">Long Sequences</h4>
                  <p className="text-sm text-gray-600">Handles sequences from short to ultra-long lengths</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </AnimatedSection>
  );
};

export default ResearchResults;
