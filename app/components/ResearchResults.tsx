"use client";

import React, { useState } from "react";
import AnimatedSection from "./layout/AnimatedSection";
import { playfair } from "../../utils/fonts";
import Image from "next/image";
import SmartResultsTable from "./SmartResultsTable";

const ResearchResults = () => {
  const [selectedAblationLength, setSelectedAblationLength] = useState('24');

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
          <h3 className="text-2xl font-semibold mb-4">Training Time Comparison</h3>
          <div className="bg-base-200 p-6 rounded-lg mb-6">
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <thead>
                  <tr className="bg-primary text-primary-content">
                    <th className="text-left font-bold">Length</th>
                    <th className="text-left font-bold">Model</th>
                    <th className="text-center font-bold">ETTh1</th>
                    <th className="text-center font-bold">ETTh2</th>
                    <th className="text-center font-bold">ETTm1</th>
                    <th className="text-center font-bold">ETTm2</th>
                    <th className="text-center font-bold">Weather</th>
                    <th className="text-center font-bold">Electricity</th>
                    <th className="text-center font-bold">Energy</th>
                    <th className="text-center font-bold">Sine</th>
                    <th className="text-center font-bold">Mujoco</th>
                </tr>
              </thead>
              <tbody>
                  {/* Length 24 */}
                  <tr className="hover:bg-base-200 transition-colors">
                    <td rowSpan={3} className="text-center font-semibold align-middle">24</td>
                  <td>GT-GAN</td>
                    <td className="text-center">7.44</td>
                    <td className="text-center">7.44</td>
                    <td className="text-center">7.44</td>
                    <td className="text-center">7.44</td>
                    <td className="text-center">7.44</td>
                    <td className="text-center">7.44</td>
                    <td className="text-center">7.44</td>
                    <td className="text-center">7.44</td>
                    <td className="text-center">2.17</td>
                  </tr>
                  <tr className="hover:bg-base-200 transition-colors">
                    <td>KoVAE</td>
                    <td className="text-center">6.49</td>
                    <td className="text-center">6.49</td>
                    <td className="text-center">6.49</td>
                    <td className="text-center">6.49</td>
                    <td className="text-center">6.49</td>
                    <td className="text-center">6.49</td>
                    <td className="text-center">6.49</td>
                    <td className="text-center">6.49</td>
                    <td className="text-center">1.15</td>
                  </tr>
                  <tr className="hover:bg-base-200 transition-colors">
                    <td className="font-bold">Ours</td>
                    <td className="text-center font-bold bg-blue-100 text-blue-800">1.28</td>
                    <td className="text-center font-bold bg-blue-100 text-blue-800">1.28</td>
                    <td className="text-center font-bold bg-blue-100 text-blue-800">1.28</td>
                    <td className="text-center font-bold bg-blue-100 text-blue-800">1.28</td>
                    <td className="text-center font-bold bg-blue-100 text-blue-800">1.28</td>
                    <td className="text-center font-bold bg-blue-100 text-blue-800">1.28</td>
                    <td className="text-center font-bold bg-blue-100 text-blue-800">1.28</td>
                    <td className="text-center font-bold bg-blue-100 text-blue-800">1.28</td>
                    <td className="text-center font-bold bg-blue-100 text-blue-800">0.60</td>
                  </tr>
                  
                  {/* Length 96 */}
                  <tr className="hover:bg-base-200 transition-colors">
                    <td rowSpan={2} className="text-center font-semibold align-middle">96</td>
                    <td>KoVAE</td>
                    <td className="text-center">19.70</td>
                    <td className="text-center">19.70</td>
                    <td className="text-center">19.70</td>
                    <td className="text-center">19.70</td>
                    <td className="text-center">19.70</td>
                    <td className="text-center">19.70</td>
                    <td className="text-center">19.70</td>
                    <td className="text-center">19.70</td>
                    <td className="text-center text-gray-400">-</td>
                  </tr>
                  <tr className="hover:bg-base-200 transition-colors">
                    <td className="font-bold">Ours</td>
                    <td className="text-center font-bold bg-blue-100 text-blue-800">1.52</td>
                    <td className="text-center font-bold bg-blue-100 text-blue-800">1.52</td>
                    <td className="text-center font-bold bg-blue-100 text-blue-800">1.52</td>
                    <td className="text-center font-bold bg-blue-100 text-blue-800">1.52</td>
                    <td className="text-center font-bold bg-blue-100 text-blue-800">1.52</td>
                    <td className="text-center font-bold bg-blue-100 text-blue-800">1.52</td>
                    <td className="text-center font-bold bg-blue-100 text-blue-800">1.52</td>
                    <td className="text-center font-bold bg-blue-100 text-blue-800">1.52</td>
                    <td className="text-center text-gray-400">-</td>
                </tr>
                  
                  {/* Length 768 */}
                  <tr className="hover:bg-base-200 transition-colors">
                    <td rowSpan={2} className="text-center font-semibold align-middle">768</td>
                  <td>KoVAE</td>
                    <td className="text-center">31.53</td>
                    <td className="text-center">31.53</td>
                    <td className="text-center">31.53</td>
                    <td className="text-center">31.53</td>
                    <td className="text-center">31.53</td>
                    <td className="text-center">31.53</td>
                    <td className="text-center">31.53</td>
                    <td className="text-center">31.53</td>
                    <td className="text-center text-gray-400">-</td>
                </tr>
                  <tr className="hover:bg-base-200 transition-colors">
                    <td className="font-bold">Ours</td>
                    <td className="text-center font-bold bg-blue-100 text-blue-800">5.38</td>
                    <td className="text-center font-bold bg-blue-100 text-blue-800">5.38</td>
                    <td className="text-center font-bold bg-blue-100 text-blue-800">5.38</td>
                    <td className="text-center font-bold bg-blue-100 text-blue-800">5.38</td>
                    <td className="text-center font-bold bg-blue-100 text-blue-800">5.38</td>
                    <td className="text-center font-bold bg-blue-100 text-blue-800">5.38</td>
                    <td className="text-center font-bold bg-blue-100 text-blue-800">5.38</td>
                    <td className="text-center font-bold bg-blue-100 text-blue-800">5.38</td>
                    <td className="text-center text-gray-400">-</td>
                </tr>
              </tbody>
            </table>
            </div>
            <p className="text-sm text-gray-600 mt-4 text-center">
              <strong>Table 1:</strong> Training time (in hours) for sequence lengths (24, 96, and 768), averaged over 30%, 50%, and 70% missing rates. Our method demonstrates significantly faster training times compared to existing approaches.
            </p>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Discriminative Time Analysis</h3>
          <div className="bg-base-200 p-6 rounded-lg mb-6">
            <div className="flex justify-center">
              <Image
                src="/disc_time_graph.png"
                alt="Discriminative time analysis showing performance over time"
                width={600}
                height={375}
                className="rounded-lg shadow-lg"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
            <p className="text-sm text-gray-600 mt-4 text-center">
              <strong>Figure 4:</strong> Discriminative time analysis showing how our method maintains consistent performance across different time periods compared to baseline methods.
            </p>
          </div>
        </div>

        <SmartResultsTable />

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
              <strong>Figure 1:</strong> 2D t-SNE embeddings and probability density functions comparing real data vs synthetic data from our method and KoVAE. Our approach generates more realistic data distributions that closely match the original data patterns.
            </p>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Ablation Studies</h3>
          
          {/* Completion Strategy Ablation Table */}
          <div className="mb-8">
            <h4 className="text-xl font-semibold mb-4">Completion Strategy Ablation</h4>
            
            {/* Completion Strategy Explanations */}
            <div className="bg-base-200 p-6 rounded-lg mb-6">
              <h5 className="text-lg font-semibold mb-4">Imputation Methods Explained</h5>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="bg-gray-100 p-3 rounded">
                    <h6 className="font-semibold text-sm mb-1">GN → NaN</h6>
                    <p className="text-xs text-gray-600">Gaussian noise completion - fills missing values with Gaussian noise</p>
                  </div>
                  <div className="bg-gray-100 p-3 rounded">
                    <h6 className="font-semibold text-sm mb-1">0 → NaN</h6>
                    <p className="text-xs text-gray-600">Zero-filling - replaces missing values with zeros</p>
                  </div>
                  <div className="bg-gray-100 p-3 rounded">
                    <h6 className="font-semibold text-sm mb-1">LI</h6>
                    <p className="text-xs text-gray-600">Linear interpolation - estimates missing values using linear interpolation</p>
                  </div>
                  <div className="bg-gray-100 p-3 rounded">
                    <h6 className="font-semibold text-sm mb-1">PI</h6>
                    <p className="text-xs text-gray-600">Polynomial interpolation - uses polynomial fitting for missing value estimation</p>
                  </div>
                  <div className="bg-gray-100 p-3 rounded">
                    <h6 className="font-semibold text-sm mb-1">SI</h6>
                    <p className="text-xs text-gray-600">Stochastic imputation - samples from Gaussian distribution fitted to non-missing values</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-gray-100 p-3 rounded">
                    <h6 className="font-semibold text-sm mb-1">NCDE</h6>
                    <p className="text-xs text-gray-600">Neural Controlled Differential Equations - advanced learning-based imputation</p>
                  </div>
                  <div className="bg-gray-100 p-3 rounded">
                    <h6 className="font-semibold text-sm mb-1">CSDI</h6>
                    <p className="text-xs text-gray-600">Conditional Score-based Diffusion Imputation - diffusion-based imputation method</p>
                  </div>
                  <div className="bg-gray-100 p-3 rounded">
                    <h6 className="font-semibold text-sm mb-1">GRU-D</h6>
                    <p className="text-xs text-gray-600">GRU with Decay - recurrent neural network with decay mechanism for missing values</p>
                  </div>
                  <div className="bg-gray-100 p-3 rounded border-2 border-primary/30">
                    <h6 className="font-semibold text-sm mb-1">Ours (TST)</h6>
                    <p className="text-xs text-gray-600 font-semibold">Time Series Transformer - our proposed lightweight and efficient completion method</p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4 text-center">
                This ablation study compares different imputation strategies for handling missing values. Simple methods (GN, zero-filling) create unnatural neighborhoods, while advanced methods (NCDE, CSDI) are computationally expensive. Our TST approach achieves the best balance of performance and efficiency.
              </p>
            </div>

            <div className="bg-base-200 p-6 rounded-lg mb-6">
              <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                  <thead>
                    <tr className="bg-primary text-primary-content">
                      <th className="text-left font-bold">Model</th>
                      <th className="text-center font-bold">Energy (Disc.)</th>
                      <th className="text-center font-bold">Stock (Disc.)</th>
                      <th className="text-center font-bold">Energy (Pred.)</th>
                      <th className="text-center font-bold">Stock (Pred.)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-base-200 transition-colors">
                      <td>GN → NaN</td>
                      <td className="text-center">0.457</td>
                      <td className="text-center">0.102</td>
                      <td className="text-center">0.058</td>
                      <td className="text-center">0.014</td>
                    </tr>
                    <tr className="hover:bg-base-200 transition-colors">
                      <td>0 → NaN</td>
                      <td className="text-center">0.269</td>
                      <td className="text-center">0.158</td>
                      <td className="text-center">0.051</td>
                      <td className="text-center">0.014</td>
                    </tr>
                    <tr className="hover:bg-base-200 transition-colors">
                      <td>LI</td>
                      <td className="text-center">0.251</td>
                      <td className="text-center">0.013</td>
                      <td className="text-center">0.049</td>
                      <td className="text-center">0.019</td>
                    </tr>
                    <tr className="hover:bg-base-200 transition-colors">
                      <td>PI</td>
                      <td className="text-center">0.201</td>
                      <td className="text-center">0.012</td>
                      <td className="text-center">0.053</td>
                      <td className="text-center">0.016</td>
                    </tr>
                    <tr className="hover:bg-base-200 transition-colors">
                      <td>NCDE</td>
                      <td className="text-center">0.102</td>
                      <td className="text-center">0.013</td>
                      <td className="text-center">0.058</td>
                      <td className="text-center">0.013</td>
                    </tr>
                    <tr className="hover:bg-base-200 transition-colors">
                      <td>CSDI</td>
                      <td className="text-center">0.088</td>
                      <td className="text-center">0.012</td>
                      <td className="text-center">0.048</td>
                      <td className="text-center">0.013</td>
                    </tr>
                    <tr className="hover:bg-base-200 transition-colors">
                      <td>SI</td>
                      <td className="text-center">0.069</td>
                      <td className="text-center">0.010</td>
                      <td className="text-center">0.047</td>
                      <td className="text-center">0.013</td>
                    </tr>
                    <tr className="hover:bg-base-200 transition-colors">
                      <td>GRU-D</td>
                      <td className="text-center">0.158</td>
                      <td className="text-center">0.014</td>
                      <td className="text-center">0.055</td>
                      <td className="text-center">0.015</td>
                    </tr>
                    <tr className="hover:bg-base-200 transition-colors">
                      <td className="font-bold">Ours (TST)</td>
                      <td className="text-center font-bold bg-blue-100 text-blue-800">0.065</td>
                      <td className="text-center font-bold bg-blue-100 text-blue-800">0.007</td>
                      <td className="text-center font-bold bg-blue-100 text-blue-800">0.047</td>
                      <td className="text-center font-bold bg-blue-100 text-blue-800">0.012</td>
                    </tr>
                  </tbody>
                </table>
            </div>
            <p className="text-sm text-gray-600 mt-4 text-center">
                <strong>Completion Strategy Ablation:</strong> Comparison of different imputation methods with 50% drop-rate on Energy and Stock datasets. Our TST-based completion strategy achieves the best performance across both discriminative and predictive metrics.
            </p>
          </div>
        </div>

          {/* Method Ablation Table */}
          <div className="mb-8">
            <h4 className="text-xl font-semibold mb-4">Method Ablation</h4>
            
            {/* Method Explanations */}
            <div className="bg-base-200 p-6 rounded-lg mb-6">
              <h5 className="text-lg font-semibold mb-4">Method Variants Explained</h5>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="bg-gray-100 p-3 rounded">
                    <h6 className="font-semibold text-sm mb-1">KoVAE + TST</h6>
                    <p className="text-xs text-gray-600">KoVAE baseline with Time Series Transformer completion preprocessing</p>
                  </div>
                  <div className="bg-gray-100 p-3 rounded">
                    <h6 className="font-semibold text-sm mb-1">TimeAutoDiff + TST</h6>
                    <p className="text-xs text-gray-600">TimeAutoDiff baseline with Time Series Transformer completion preprocessing</p>
                  </div>
                  <div className="bg-gray-100 p-3 rounded">
                    <h6 className="font-semibold text-sm mb-1">TransFusion + TST</h6>
                    <p className="text-xs text-gray-600">TransFusion baseline with Time Series Transformer completion preprocessing</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-gray-100 p-3 rounded">
                    <h6 className="font-semibold text-sm mb-1">Ours (Mask Only)</h6>
                    <p className="text-xs text-gray-600">Our method using only the masking strategy without TST completion</p>
                  </div>
                  <div className="bg-gray-100 p-3 rounded">
                    <h6 className="font-semibold text-sm mb-1">Ours (Without Mask)</h6>
                    <p className="text-xs text-gray-600">Our method using TST completion but without the masking strategy</p>
                  </div>
                  <div className="bg-gray-100 p-3 rounded border-2 border-primary/30">
                    <h6 className="font-semibold text-sm mb-1">Ours (Full)</h6>
                    <p className="text-xs text-gray-600 font-semibold">Our complete method with both TST completion and masking strategy</p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4 text-center">
                This ablation study demonstrates the contribution of each component in our framework. The results show that both TST completion and masking strategy are essential for optimal performance.
              </p>
            </div>

            <div className="bg-base-200 p-6 rounded-lg mb-6">
              {/* Length Selection */}
              <div className="mb-6">
                <h5 className="text-lg font-semibold mb-3">Choose Sequence Length:</h5>
                <div className="flex flex-wrap gap-2">
                  <button 
                    onClick={() => setSelectedAblationLength('24')}
                    className={`btn btn-sm ${selectedAblationLength === '24' ? 'btn-primary' : 'btn-outline'}`}>
                    Length 24
                  </button>
                  <button 
                    onClick={() => setSelectedAblationLength('96')}
                    className={`btn btn-sm ${selectedAblationLength === '96' ? 'btn-primary' : 'btn-outline'}`}>
                    Length 96
                  </button>
                  <button 
                    onClick={() => setSelectedAblationLength('768')}
                    className={`btn btn-sm ${selectedAblationLength === '768' ? 'btn-primary' : 'btn-outline'}`}>
                    Length 768
                  </button>
                </div>
              </div>

              {/* Current Selection Display */}
              <div className="mb-4 p-3 bg-info/10 rounded-lg">
                <p className="text-sm">
                  <strong>Currently viewing:</strong> Method Ablation for Sequence Length {selectedAblationLength}
                </p>
            </div>

              <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                  <thead>
                    <tr className="bg-primary text-primary-content">
                      <th className="text-left font-bold">Model</th>
                      <th className="text-center font-bold">Energy (30%)</th>
                      <th className="text-center font-bold">Stock (30%)</th>
                      <th className="text-center font-bold">Energy (50%)</th>
                      <th className="text-center font-bold">Stock (50%)</th>
                      <th className="text-center font-bold">Energy (70%)</th>
                      <th className="text-center font-bold">Stock (70%)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Length 24 */}
                    {selectedAblationLength === '24' && (
                      <>
                        <tr className="hover:bg-base-200 transition-colors">
                          <td>KoVAE + TST</td>
                          <td className="text-center">0.399</td>
                          <td className="text-center">0.109</td>
                          <td className="text-center">0.407</td>
                          <td className="text-center">0.064</td>
                          <td className="text-center">0.408</td>
                          <td className="text-center">0.037</td>
                        </tr>
                        <tr className="hover:bg-base-200 transition-colors">
                          <td>TimeAutoDiff + TST</td>
                          <td className="text-center">0.293</td>
                          <td className="text-center">0.100</td>
                          <td className="text-center">0.329</td>
                          <td className="text-center">0.101</td>
                          <td className="text-center">0.468</td>
                          <td className="text-center">0.375</td>
                        </tr>
                        <tr className="hover:bg-base-200 transition-colors">
                          <td>TransFusion + TST</td>
                          <td className="text-center">0.201</td>
                          <td className="text-center">0.050</td>
                          <td className="text-center">0.279</td>
                          <td className="text-center">0.058</td>
                          <td className="text-center">0.423</td>
                          <td className="text-center">0.065</td>
                        </tr>
                        <tr className="hover:bg-base-200 transition-colors">
                          <td>Ours (Mask Only)</td>
                          <td className="text-center">0.157</td>
                          <td className="text-center">0.087</td>
                          <td className="text-center">0.269</td>
                          <td className="text-center">0.168</td>
                          <td className="text-center">0.372</td>
                          <td className="text-center">0.237</td>
                        </tr>
                        <tr className="hover:bg-base-200 transition-colors">
                          <td>Ours (Without Mask)</td>
                          <td className="text-center">0.158</td>
                          <td className="text-center">0.025</td>
                          <td className="text-center">0.307</td>
                          <td className="text-center">0.045</td>
                          <td className="text-center">0.444</td>
                          <td className="text-center">0.013</td>
                        </tr>
                        <tr className="hover:bg-base-200 transition-colors">
                          <td className="font-bold">Ours</td>
                          <td className="text-center font-bold bg-blue-100 text-blue-800">0.048</td>
                          <td className="text-center font-bold bg-blue-100 text-blue-800">0.007</td>
                          <td className="text-center font-bold bg-blue-100 text-blue-800">0.065</td>
                          <td className="text-center font-bold bg-blue-100 text-blue-800">0.007</td>
                          <td className="text-center font-bold bg-blue-100 text-blue-800">0.128</td>
                          <td className="text-center font-bold bg-blue-100 text-blue-800">0.007</td>
                        </tr>
                      </>
                    )}
                    
                    {/* Length 96 */}
                    {selectedAblationLength === '96' && (
                      <>
                        <tr className="hover:bg-base-200 transition-colors">
                          <td>KoVAE + TST</td>
                          <td className="text-center">0.240</td>
                          <td className="text-center">0.185</td>
                          <td className="text-center">0.254</td>
                          <td className="text-center">0.221</td>
                          <td className="text-center">0.417</td>
                          <td className="text-center">0.193</td>
                        </tr>
                        <tr className="hover:bg-base-200 transition-colors">
                          <td>TimeAutoDiff + TST</td>
                          <td className="text-center">0.299</td>
                          <td className="text-center">0.105</td>
                          <td className="text-center">0.336</td>
                          <td className="text-center">0.104</td>
                          <td className="text-center">0.461</td>
                          <td className="text-center">0.398</td>
                        </tr>
                        <tr className="hover:bg-base-200 transition-colors">
                          <td>TransFusion + TST</td>
                          <td className="text-center">0.305</td>
                          <td className="text-center">0.083</td>
                          <td className="text-center">0.335</td>
                          <td className="text-center">0.098</td>
                          <td className="text-center">0.442</td>
                          <td className="text-center">0.116</td>
                        </tr>
                        <tr className="hover:bg-base-200 transition-colors">
                          <td>Ours (Mask Only)</td>
                          <td className="text-center">0.490</td>
                          <td className="text-center">0.174</td>
                          <td className="text-center">0.422</td>
                          <td className="text-center">0.263</td>
                          <td className="text-center">0.480</td>
                          <td className="text-center">0.388</td>
                        </tr>
                        <tr className="hover:bg-base-200 transition-colors">
                          <td>Ours (Without Mask)</td>
                          <td className="text-center">0.402</td>
                          <td className="text-center">0.033</td>
                          <td className="text-center">0.476</td>
                          <td className="text-center">0.072</td>
                          <td className="text-center">0.491</td>
                          <td className="text-center">0.082</td>
                        </tr>
                        <tr className="hover:bg-base-200 transition-colors">
                          <td className="font-bold">Ours</td>
                          <td className="text-center font-bold bg-blue-100 text-blue-800">0.130</td>
                          <td className="text-center font-bold bg-blue-100 text-blue-800">0.011</td>
                          <td className="text-center font-bold bg-blue-100 text-blue-800">0.153</td>
                          <td className="text-center font-bold bg-blue-100 text-blue-800">0.018</td>
                          <td className="text-center font-bold bg-blue-100 text-blue-800">0.272</td>
                          <td className="text-center font-bold bg-blue-100 text-blue-800">0.021</td>
                        </tr>
                      </>
                    )}
                    
                    {/* Length 768 */}
                    {selectedAblationLength === '768' && (
                      <>
                        <tr className="hover:bg-base-200 transition-colors">
                          <td>KoVAE + TST</td>
                          <td className="text-center">0.380</td>
                          <td className="text-center">0.225</td>
                          <td className="text-center">0.418</td>
                          <td className="text-center">0.243</td>
                          <td className="text-center">0.385</td>
                          <td className="text-center">0.186</td>
                        </tr>
                        <tr className="hover:bg-base-200 transition-colors">
                          <td>TimeAutoDiff + TST</td>
                          <td className="text-center">0.299</td>
                          <td className="text-center">0.104</td>
                          <td className="text-center">0.334</td>
                          <td className="text-center">0.101</td>
                          <td className="text-center">0.466</td>
                          <td className="text-center">0.487</td>
                        </tr>
                        <tr className="hover:bg-base-200 transition-colors">
                          <td>TransFusion + TST</td>
                          <td className="text-center">0.367</td>
                          <td className="text-center">0.113</td>
                          <td className="text-center">0.395</td>
                          <td className="text-center">0.121</td>
                          <td className="text-center">0.451</td>
                          <td className="text-center">0.131</td>
                        </tr>
                        <tr className="hover:bg-base-200 transition-colors">
                          <td>Ours (Mask Only)</td>
                          <td className="text-center">0.437</td>
                          <td className="text-center">0.249</td>
                          <td className="text-center">0.349</td>
                          <td className="text-center">0.450</td>
                          <td className="text-center">0.435</td>
                          <td className="text-center">0.491</td>
                        </tr>
                        <tr className="hover:bg-base-200 transition-colors">
                          <td>Ours (Without Mask)</td>
                          <td className="text-center">0.364</td>
                          <td className="text-center">0.027</td>
                          <td className="text-center">0.353</td>
                          <td className="text-center">0.102</td>
                          <td className="text-center">0.325</td>
                          <td className="text-center">0.102</td>
                        </tr>
                        <tr className="hover:bg-base-200 transition-colors">
                          <td className="font-bold">Ours</td>
                          <td className="text-center font-bold bg-blue-100 text-blue-800">0.170</td>
                          <td className="text-center font-bold bg-blue-100 text-blue-800">0.025</td>
                          <td className="text-center font-bold bg-blue-100 text-blue-800">0.244</td>
                          <td className="text-center font-bold bg-blue-100 text-blue-800">0.033</td>
                          <td className="text-center font-bold bg-blue-100 text-blue-800">0.251</td>
                          <td className="text-center font-bold bg-blue-100 text-blue-800">0.013</td>
                        </tr>
                      </>
                    )}
                  </tbody>
                </table>
            </div>
            <p className="text-sm text-gray-600 mt-4 text-center">
                <strong>Method Ablation:</strong> Discriminative scores comparing different method components for sequence length {selectedAblationLength} with 30%, 50%, and 70% drop-rates on Energy and Stock datasets. Our full method consistently outperforms all ablation variants.
            </p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Noise Robustness</h3>
          <div className="bg-base-200 p-6 rounded-lg mb-6">
            <div className="overflow-x-auto">
              <table className="table table-zebra w-full">
                <thead>
                  <tr className="bg-primary text-primary-content">
                    <th className="text-left font-bold">Noise Level</th>
                    <th className="text-left font-bold">Model</th>
                    <th className="text-center font-bold">Weather (Disc.)</th>
                    <th className="text-center font-bold">Weather (Pred.)</th>
                    <th className="text-center font-bold">ETTh1 (Disc.)</th>
                    <th className="text-center font-bold">ETTh1 (Pred.)</th>
                    <th className="text-center font-bold">Stock (Disc.)</th>
                    <th className="text-center font-bold">Stock (Pred.)</th>
                    <th className="text-center font-bold">Energy (Disc.)</th>
                    <th className="text-center font-bold">Energy (Pred.)</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Noise Level 0.1 */}
                  <tr className="hover:bg-base-200 transition-colors">
                    <td rowSpan={2} className="text-center font-semibold align-middle">0.1</td>
                    <td>KoVAE</td>
                    <td className="text-center">0.426</td>
                    <td className="text-center">0.056</td>
                    <td className="text-center">0.225</td>
                    <td className="text-center">0.073</td>
                    <td className="text-center">0.235</td>
                    <td className="text-center">0.016</td>
                    <td className="text-center">0.434</td>
                    <td className="text-center">0.067</td>
                  </tr>
                  <tr className="hover:bg-base-200 transition-colors">
                    <td className="font-bold">Ours</td>
                    <td className="text-center font-bold bg-blue-100 text-blue-800">0.061</td>
                    <td className="text-center font-bold bg-blue-100 text-blue-800">0.052</td>
                    <td className="text-center font-bold bg-blue-100 text-blue-800">0.024</td>
                    <td className="text-center font-bold bg-blue-100 text-blue-800">0.034</td>
                    <td className="text-center font-bold bg-blue-100 text-blue-800">0.007</td>
                    <td className="text-center font-bold bg-blue-100 text-blue-800">0.012</td>
                    <td className="text-center font-bold bg-blue-100 text-blue-800">0.065</td>
                    <td className="text-center font-bold bg-blue-100 text-blue-800">0.047</td>
                  </tr>
                  
                  {/* Noise Level 0.15 */}
                  <tr className="hover:bg-base-200 transition-colors">
                    <td rowSpan={2} className="text-center font-semibold align-middle">0.15</td>
                    <td>KoVAE</td>
                    <td className="text-center">0.488</td>
                    <td className="text-center">0.092</td>
                    <td className="text-center font-bold bg-blue-100 text-blue-800">0.377</td>
                    <td className="text-center">0.077</td>
                    <td className="text-center">0.341</td>
                    <td className="text-center">0.092</td>
                    <td className="text-center">0.493</td>
                    <td className="text-center">0.093</td>
                  </tr>
                  <tr className="hover:bg-base-200 transition-colors">
                    <td className="font-bold">Ours</td>
                    <td className="text-center font-bold bg-blue-100 text-blue-800">0.416</td>
                    <td className="text-center font-bold bg-blue-100 text-blue-800">0.029</td>
                    <td className="text-center">0.407</td>
                    <td className="text-center font-bold bg-blue-100 text-blue-800">0.059</td>
                    <td className="text-center font-bold bg-blue-100 text-blue-800">0.282</td>
                    <td className="text-center font-bold bg-blue-100 text-blue-800">0.023</td>
                    <td className="text-center font-bold bg-blue-100 text-blue-800">0.467</td>
                    <td className="text-center font-bold bg-blue-100 text-blue-800">0.053</td>
                  </tr>
                  
                  {/* Noise Level 0.2 */}
                  <tr className="hover:bg-base-200 transition-colors">
                    <td rowSpan={2} className="text-center font-semibold align-middle">0.2</td>
                    <td>KoVAE</td>
                    <td className="text-center">0.491</td>
                    <td className="text-center">0.096</td>
                    <td className="text-center font-bold bg-blue-100 text-blue-800">0.440</td>
                    <td className="text-center">0.084</td>
                    <td className="text-center">0.352</td>
                    <td className="text-center">0.121</td>
                    <td className="text-center">0.496</td>
                    <td className="text-center">0.123</td>
                  </tr>
                  <tr className="hover:bg-base-200 transition-colors">
                    <td className="font-bold">Ours</td>
                    <td className="text-center font-bold bg-blue-100 text-blue-800">0.485</td>
                    <td className="text-center font-bold bg-blue-100 text-blue-800">0.035</td>
                    <td className="text-center">0.456</td>
                    <td className="text-center font-bold bg-blue-100 text-blue-800">0.062</td>
                    <td className="text-center font-bold bg-blue-100 text-blue-800">0.340</td>
                    <td className="text-center font-bold bg-blue-100 text-blue-800">0.027</td>
                    <td className="text-center font-bold bg-blue-100 text-blue-800">0.457</td>
                    <td className="text-center font-bold bg-blue-100 text-blue-800">0.057</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 mt-4 text-center">
              <strong>Table 2:</strong> Discriminative and predictive scores for 50% missing rate on Weather, ETTh1, Stock, and Energy datasets with injected noise levels (0.1, 0.15, and 0.2). Our method demonstrates superior robustness across different noise levels.
            </p>
          </div>
        </div>


      </div>
    </AnimatedSection>
  );
};

export default ResearchResults;