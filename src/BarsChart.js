import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

var beneficios = [72, 56, 20, 36, 80, 40, 30, -20, 25, 30, 12, 60];
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

var misoptions = {
  responsive: true,
  maintainAspectRatio: false,
  animation: {
    duration: 1500,
    easing: 'easeInOutQuart'
  },
  plugins: {
    legend: {
      display: false,
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
      min: -25,
      max: 100,
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

var midata = {
  labels: meses,
  datasets: [
    {
      label: "Beneficios",
      data: beneficios,
      backgroundColor: "rgba(102, 126, 234, 0.7)",
      borderColor: "rgba(102, 126, 234, 1)",
      borderWidth: 2,
      borderRadius: 8,
      borderSkipped: false,
    },
  ],
};

export default function BarsChart() {
  return <Bar data={midata} options={misoptions} />;
}
