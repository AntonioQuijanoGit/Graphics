import "./App.css";
import LinesChart from "./LinesChart";
import BarsChart from "./BarsChart";
import PiesChart from "./PiesChart";

function App() {
  return (
    <div className="App">
      <h1 className="app-title">Gráficas ChartJS</h1>
      
      <div className="chart-section">
        <h2 className="section-title">Gráfico de Líneas</h2>
        <p className="section-subtitle">Visualización de tendencias temporales</p>
        <div className="chart-container">
          <div className="chart-wrapper">
            <LinesChart />
          </div>
        </div>
      </div>

      <hr className="divider" />
      
      <div className="chart-section">
        <h2 className="section-title">Gráfico de Barras</h2>
        <p className="section-subtitle">Comparación de datos categóricos</p>
        <div className="chart-container">
          <div className="chart-wrapper">
            <BarsChart />
          </div>
        </div>
      </div>

      <hr className="divider" />
      
      <div className="chart-section">
        <h2 className="section-title">Gráfico Circular</h2>
        <p className="section-subtitle">Distribución porcentual de datos</p>
        <div className="chart-container">
          <div className="chart-wrapper">
            <PiesChart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
