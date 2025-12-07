import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

var beneficios = [0, 56, 20, 36, 80, 40, 30, -20, 25, 30, 12, 60];
var meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

var midata = {
  labels: meses,
  datasets: [
      // Cada una de las líneas del gráfico
    {
      label: "Beneficios",
      data: beneficios,
      tension: 0.5,
      fill: true,
      borderColor: "rgba(102, 126, 234, 1)",
      backgroundColor: "rgba(102, 126, 234, 0.2)",
      pointRadius: 6,
      pointHoverRadius: 8,
      pointBorderColor: "rgba(102, 126, 234, 1)",
      pointBackgroundColor: "rgba(102, 126, 234, 1)",
      pointBorderWidth: 2,
    },
    {
      label: "Ventas",
      data: [20, 25, 60, 65, 45, 10, 0, 25, 35, 7, 20, 25],
      tension: 0.5,
      fill: true,
      borderColor: "rgba(118, 75, 162, 1)",
      backgroundColor: "rgba(118, 75, 162, 0.2)",
      pointRadius: 6,
      pointHoverRadius: 8,
      pointBorderColor: "rgba(118, 75, 162, 1)",
      pointBackgroundColor: "rgba(118, 75, 162, 1)",
      pointBorderWidth: 2,
    },
  ],
};

var misoptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
      labels: {
        font: {
          family: "'Inter', sans-serif",
          size: 14,
          weight: '600'
        },
        padding: 20,
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
  },
  scales: {
    y: {
      min: 0,
      grid: {
        color: 'rgba(0, 0, 0, 0.05)',
      },
      ticks: {
        font: {
          family: "'Inter', sans-serif",
          size: 12
        }
      }
    },
    x: {
      grid: {
        display: false,
      },
      ticks: {
        font: {
          family: "'Inter', sans-serif",
          size: 12
        }
      }
    },
  },
};

export default function LinesChart() {
  return <Line data={midata} options={misoptions} />;
}
