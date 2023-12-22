import React from 'react';
import { Bar } from 'react-chartjs-2';
import {CategoryScale} from 'chart.js';
import Chart from 'chart.js/auto';
Chart.register(CategoryScale);

const YourChartComponent = ({ data ,selectDate }) => {
  // Extract relevant data points for charting
  console.log(data);
  const chartData = selectDate.map(entry => ({
    intensity: entry.intensity,
    likelihood: entry.likelihood,
    relevance: entry.relevance,
    year: entry.end_year,
    country: entry.country,
    topic: entry.topic,
    region: entry.region,
    city: entry.city ,
    // if else
    sector:entry.sector// Note: City data is not present in your sample data
  }));

  // Extract labels for X-axis (could be year, country, topic, etc.)
  const labels = chartData.map(entry => entry.sector); // Adjust this based on your preference

  // Extract data values for each variable
  const intensityData = chartData.map(entry => entry.intensity);
  const likelihoodData = chartData.map(entry => entry.likelihood);
  const relevanceData = chartData.map(entry => entry.relevance);

  // Create dataset for each variable
  const datasets = [
    { label: 'Intensity', data: intensityData },
    { label: 'Likelihood', data: likelihoodData },
    { label: 'Relevance', data: relevanceData }
    // Add more datasets for other variables
  ];

  const chartOptions = {
    scales: {
      x: { stacked: true },
      y: { stacked: true }
    }
  };

  const chartDataConfig = {
    labels,
    datasets
  };

  return <Bar data={chartDataConfig} options={chartOptions} />;
};

export default YourChartComponent;
