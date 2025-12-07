import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

var options = {
  responsive: true,
  maintainAspectRatio: false,
  animation: {
    animateRotate: true,
    animateScale: true,
    duration: 1500,
    easing: 'easeInOutQuart'
  },
  plugins: {
    legend: {
      position: 'right',
      labels: {
        font: {
          family: "'Inter', sans-serif",
          size: 13,
          weight: '600'
        },
        padding: 15,
        usePointStyle: true,
      }
    },
    tooltip: {
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      titleColor: '#1a1a1a',
      bodyColor: '#1a1a1a',
      borderColor: 'rgba(102, 126, 234, 0.3)',
      borderWidth: 1,
      padding: 12,
      font: {
        family: "'Inter', sans-serif",
        size: 13
      }
    }
  }
};

var data = {
  labels: ["Empresa1", "Empresa2", "Empresa3", "Empresa4", "Empresa5"],
  datasets: [
    {
      label: "Popularidad en Navidad",
      data: [35, 20, 20, 15, 10],
      backgroundColor: [
        "rgba(102, 126, 234, 0.8)",
        "rgba(118, 75, 162, 0.8)",
        "rgba(240, 147, 251, 0.8)",
        "rgba(245, 87, 108, 0.8)",
        "rgba(79, 172, 254, 0.8)",
      ],
      borderColor: [
        "rgba(102, 126, 234, 1)",
        "rgba(118, 75, 162, 1)",
        "rgba(240, 147, 251, 1)",
        "rgba(245, 87, 108, 1)",
        "rgba(79, 172, 254, 1)",
      ],
      borderWidth: 3,
      hoverOffset: 8,
    },
  ],
};

export default function PiesChart() {
  return <Pie data={data} options={options} />;
}
