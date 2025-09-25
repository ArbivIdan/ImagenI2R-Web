"use client";

import React, { useState } from "react";

const SmartResultsTable = () => {
  const [selectedLength, setSelectedLength] = useState('24');
  const [selectedMetric, setSelectedMetric] = useState('disc');

  // Data for different sequence lengths
  const tableData = {
    '24': {
      disc: [
        { model: 'TimeGAN-Δt', values: [0.499, 0.499, 0.499, 0.499, 0.497, 0.499, 0.474, 0.497, 0.479] },
        { model: 'GT-GAN', values: [0.471, 0.369, 0.412, 0.366, 0.481, 0.427, 0.325, 0.338, 0.249] },
        { model: 'KoVAE', values: [0.197, 0.081, 0.050, 0.067, 0.332, 0.498, 0.323, 0.043, 0.118] },
        { model: 'Ours', values: [0.037, 0.009, 0.012, 0.011, 0.057, 0.384, 0.080, 0.010, 0.008], isOurs: true }
      ],
      pred: [
        { model: 'TimeGAN-Δt', values: [0.267, 0.336, 0.235, 0.314, 0.394, 0.262, 0.457, 0.334, 0.072] },
        { model: 'GT-GAN', values: [0.186, 0.092, 0.125, 0.094, 0.145, 0.148, 0.069, 0.096, 0.020] },
        { model: 'KoVAE', values: [0.057, 0.054, 0.045, 0.050, 0.057, 0.047, 0.050, 0.074, 0.017] },
        { model: 'Ours', values: [0.053, 0.046, 0.044, 0.044, 0.022, 0.049, 0.047, 0.069, 0.012], isOurs: true }
      ],
      fid: [
        { model: 'TimeGAN-Δt', values: [3.140, 3.199, 3.419, 3.218, 2.378, 23.39, 6.507, 2.780, 2.668] },
        { model: 'GT-GAN', values: [2.212, 8.635, 14.29, 6.385, 2.758, 9.993, 1.531, 1.698, 2.181] },
        { model: 'KoVAE', values: [1.518, 0.248, 0.180, 0.280, 3.699, 6.163, 0.629, 0.037, 0.369] },
        { model: 'Ours', values: [0.124, 0.035, 0.047, 0.024, 0.170, 3.580, 0.132, 0.015, 0.036], isOurs: true }
      ],
      corr: [
        { model: 'TimeGAN-Δt', values: [3.743, 1.051, 2.350, 0.579, 1.200, 13.24, 3.765, 2.424, 1.399] },
        { model: 'GT-GAN', values: [7.148, 0.916, 2.467, 0.356, 0.791, 14.92, 3.889, 3.282, 0.261] },
        { model: 'KoVAE', values: [0.183, 0.177, 0.130, 0.262, 2.899, 4.283, 2.630, 0.041, 0.064] },
        { model: 'Ours', values: [0.084, 0.054, 0.065, 0.039, 0.396, 2.031, 0.922, 0.015, 0.019], isOurs: true }
      ]
    },
    '96': {
      disc: [
        { model: 'KoVAE', values: [0.284, 0.099, 0.050, 0.067, 0.332, 0.498, 0.323, 0.043, 0.118] },
        { model: 'Ours', values: [0.070, 0.017, 0.012, 0.011, 0.057, 0.384, 0.080, 0.010, 0.008], isOurs: true }
      ],
      pred: [
        { model: 'KoVAE', values: [0.057, 0.054, 0.045, 0.050, 0.057, 0.047, 0.050, 0.074, 0.017] },
        { model: 'Ours', values: [0.053, 0.046, 0.044, 0.044, 0.022, 0.049, 0.047, 0.069, 0.012], isOurs: true }
      ],
      fid: [
        { model: 'KoVAE', values: [1.518, 0.248, 0.180, 0.280, 3.699, 6.163, 0.629, 0.037, 0.369] },
        { model: 'Ours', values: [0.124, 0.035, 0.047, 0.024, 0.170, 3.580, 0.132, 0.015, 0.036], isOurs: true }
      ],
      corr: [
        { model: 'KoVAE', values: [0.183, 0.177, 0.130, 0.262, 2.899, 4.283, 2.630, 0.041, 0.064] },
        { model: 'Ours', values: [0.084, 0.054, 0.065, 0.039, 0.396, 2.031, 0.922, 0.015, 0.019], isOurs: true }
      ]
    },
    '768': {
      disc: [
        { model: 'KoVAE', values: [0.238, 0.284, 0.050, 0.067, 0.332, 0.498, 0.323, 0.043, 0.118] },
        { model: 'Ours', values: [0.088, 0.022, 0.012, 0.011, 0.057, 0.384, 0.080, 0.010, 0.008], isOurs: true }
      ],
      pred: [
        { model: 'KoVAE', values: [0.057, 0.054, 0.045, 0.050, 0.057, 0.047, 0.050, 0.074, 0.017] },
        { model: 'Ours', values: [0.053, 0.046, 0.044, 0.044, 0.022, 0.049, 0.047, 0.069, 0.012], isOurs: true }
      ],
      fid: [
        { model: 'KoVAE', values: [1.518, 0.248, 0.180, 0.280, 3.699, 6.163, 0.629, 0.037, 0.369] },
        { model: 'Ours', values: [0.124, 0.035, 0.047, 0.024, 0.170, 3.580, 0.132, 0.015, 0.036], isOurs: true }
      ],
      corr: [
        { model: 'KoVAE', values: [0.183, 0.177, 0.130, 0.262, 2.899, 4.283, 2.630, 0.041, 0.064] },
        { model: 'Ours', values: [0.084, 0.054, 0.065, 0.039, 0.396, 2.031, 0.922, 0.015, 0.019], isOurs: true }
      ]
    }
  };

  const datasets = ['ETTh1', 'ETTh2', 'ETTm1', 'ETTm2', 'Weather', 'Electricity', 'Energy', 'Sine', 'Stock'];
  const metrics = {
    disc: 'Discriminative Score',
    pred: 'Predictive Score', 
    fid: 'FID Score',
    corr: 'Correlation Score'
  };

  const getBestValuePerColumn = (metricData: any[]) => {
    const numColumns = metricData[0]?.values.length || 0;
    const bestValues = [];
    
    for (let col = 0; col < numColumns; col++) {
      const columnValues = metricData.map(row => row.values[col]);
      bestValues[col] = Math.min(...columnValues);
    }
    
    return bestValues;
  };

  const isBestValueInColumn = (value: number, columnIndex: number, metricData: any[]) => {
    const bestValues = getBestValuePerColumn(metricData);
    return value === bestValues[columnIndex];
  };

  const renderMetricSection = (metricKey: string, metricName: string) => {
    const metricData = tableData[selectedLength as keyof typeof tableData][metricKey as keyof typeof tableData['24']];
    
    return (
      <>
        <tr className="hover:bg-base-200 transition-colors">
          <td className="font-semibold bg-gray-100">{metricName}</td>
          <td colSpan={9} className="text-center text-sm text-gray-600">Lower is better</td>
        </tr>
        {metricData.map((row, index) => (
          <tr key={index} className="hover:bg-base-200 transition-colors">
            <td className={row.isOurs ? 'font-bold' : ''}>{row.model}</td>
            {row.values.map((value: number, colIndex: number) => (
              <td 
                key={colIndex} 
                className={`text-center ${
                  isBestValueInColumn(value, colIndex, metricData) ? 'font-bold bg-blue-100 text-blue-800' : ''
                }`}
              >
                {value}
              </td>
            ))}
          </tr>
        ))}
      </>
    );
  };

  return (
    <div className="mb-8">
      <h3 className="text-2xl font-semibold mb-4">Quantitative Results</h3>
      <div className="bg-base-200 p-6 rounded-lg mb-6">
        {/* Length Selection */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-3">Step 1: Choose Sequence Length</h4>
          <div className="flex flex-wrap gap-2">
                <button 
                  onClick={() => {
                    setSelectedLength('24');
                    setSelectedMetric('disc');
                  }}
                  className={`btn btn-sm ${selectedLength === '24' ? 'btn-primary' : 'btn-outline'}`}>
                  Length 24
                </button>
                <button 
                  onClick={() => {
                    setSelectedLength('96');
                    setSelectedMetric('disc');
                  }}
                  className={`btn btn-sm ${selectedLength === '96' ? 'btn-primary' : 'btn-outline'}`}>
                  Length 96
                </button>
                <button 
                  onClick={() => {
                    setSelectedLength('768');
                    setSelectedMetric('disc');
                  }}
                  className={`btn btn-sm ${selectedLength === '768' ? 'btn-primary' : 'btn-outline'}`}>
                  Length 768
                </button>
          </div>
        </div>

        {/* Metric Selection */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-3">Step 2: Choose Metric to View</h4>
          <div className="flex flex-wrap gap-2">
            <button 
              onClick={() => setSelectedMetric('all')}
              className={`btn btn-sm ${selectedMetric === 'all' ? 'btn-secondary' : 'btn-outline'}`}>
              All Metrics
            </button>
            <button 
              onClick={() => setSelectedMetric('disc')}
              className={`btn btn-sm ${selectedMetric === 'disc' ? 'btn-secondary' : 'btn-outline'}`}>
              Discriminative Score
            </button>
            <button 
              onClick={() => setSelectedMetric('pred')}
              className={`btn btn-sm ${selectedMetric === 'pred' ? 'btn-secondary' : 'btn-outline'}`}>
              Predictive Score
            </button>
            <button 
              onClick={() => setSelectedMetric('fid')}
              className={`btn btn-sm ${selectedMetric === 'fid' ? 'btn-secondary' : 'btn-outline'}`}>
              FID Score
            </button>
            <button 
              onClick={() => setSelectedMetric('corr')}
              className={`btn btn-sm ${selectedMetric === 'corr' ? 'btn-secondary' : 'btn-outline'}`}>
              Correlation Score
            </button>
          </div>
        </div>

        {/* Current Selection Display */}
        <div className="mb-4 p-3 bg-info/10 rounded-lg">
          <p className="text-sm">
            <strong>Currently viewing:</strong> Sequence Length {selectedLength} - {
              selectedMetric === 'all' ? 'All Metrics' : metrics[selectedMetric as keyof typeof metrics]
            }
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr className="bg-primary text-primary-content">
                <th className="text-left font-bold">Model</th>
                {datasets.map((dataset, index) => (
                  <th key={index} className="text-center font-bold">{dataset}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {selectedMetric === 'all' ? (
                <>
                  {renderMetricSection('disc', 'Discriminative Score')}
                  {renderMetricSection('pred', 'Predictive Score')}
                  {renderMetricSection('fid', 'FID Score')}
                  {renderMetricSection('corr', 'Correlation Score')}
                </>
              ) : (
                renderMetricSection(selectedMetric, metrics[selectedMetric as keyof typeof metrics])
              )}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-600 mt-4 text-center">
          <strong>Table 2:</strong> Averaged results over 30%, 50%, 70% missing rates for sequence length {selectedLength}. Lower values are better. Our method consistently achieves state-of-the-art performance across all evaluation metrics and datasets.
        </p>
      </div>
    </div>
  );
};

export default SmartResultsTable;
