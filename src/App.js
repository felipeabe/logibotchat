import React, { useState } from 'react';
import { 
  PackageSearch, 
  BarChart2, 
  Box, 
  MessageCircle, 
  Settings, 
  ChevronRight, 
  Package, 
  AlertCircle 
} from 'lucide-react';
import './App.css';

const LogiBotApp = () => {
  const [currentScreen, setCurrentScreen] = useState('home');

  const HomeScreen = () => (
  <div className="home-screen">
    <div className="app-header">
      <MessageCircle className="header-icon" />
      <h1 className="app-title">LogiBot</h1>
    </div>

    <div className="welcome-card">
      <p>Olá! Eu sou o LogiBot, seu assistente de logística. Como posso ajudar você hoje?</p>
    </div>

    <div className="home-grid">
      {[
        { icon: <Box />, title: "Gestão de Estoque", desc: "Controle e análise", screen: 'inventory' },
        { icon: <PackageSearch />, title: "Análise de Embalagens", desc: "Verificação e recomendações", screen: 'packaging' },
        { icon: <BarChart2 />, title: "Desempenho", desc: "Métricas de vendas", screen: 'performance' },
        { icon: <AlertCircle />, title: "Insights", desc: "Recomendações", screen: 'insights' }
      ].map((item, i) => (
        <div 
          key={i} 
          className="home-grid-item"
          onClick={() => setCurrentScreen(item.screen)} // Alteração aqui
        >
          <div className="grid-item-icon">{item.icon}</div>
          <h3 className="grid-item-title">{item.title}</h3>
          <p className="grid-item-desc">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

  const InventoryScreen = () => (
    <div className="inventory-screen">
      <h2 className="screen-title">Gestão de Estoque</h2>
      <div className="inventory-summary-card">
        <div className="inventory-summary-header">
          <div className="inventory-summary-info">
            <Package className="summary-icon" />
            <span>Total de Produtos</span>
          </div>
          <span className="total-products">247</span>
        </div>
        <div className="inventory-progress-bar">
          <div className="inventory-progress"></div>
        </div>
      </div>
      
      <div className="inventory-list">
        {[
          { name: "Produto A", stock: 45, status: "Em alta" },
          { name: "Produto B", stock: 12, status: "Baixo" },
          { name: "Produto C", stock: 78, status: "Em alta" }
        ].map((item, i) => (
          <div key={i} className="inventory-item">
            <div className="inventory-item-details">
              <h3>{item.name}</h3>
              <p>Estoque: {item.stock}</p>
            </div>
            <span className={`inventory-status ${item.status === "Em alta" ? "high" : "low"}`}>
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  const PackagingScreen = () => (
    <div className="packaging-screen">
      <h2 className="screen-title">Análise de Embalagens</h2>
      <div className="packaging-upload-card">
        <div className="packaging-upload-content">
          <PackageSearch className="upload-icon" />
          <p>Toque para analisar embalagem</p>
        </div>
      </div>

      <div className="packaging-recommendations">
        <h3>Recomendações</h3>
        <div className="recommendations-list">
          {[
            "Utilize caixa tipo A para produtos até 1kg",
            "Reforce embalagens de produtos frágeis",
            "Verifique as dimensões máximas aceitas"
          ].map((rec, i) => (
            <div key={i} className="recommendation-item">
              <div className="recommendation-dot"></div>
              <p>{rec}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const PerformanceScreen = () => (
    <div className="performance-screen">
      <h2 className="screen-title">Desempenho de Vendas</h2>
      <div className="performance-stats">
        {[
          { title: "Vendas Hoje", value: "32", trend: "+12%" },
          { title: "Taxa de Conversão", value: "3.8%", trend: "+0.5%" },
        ].map((stat, i) => (
          <div key={i} className="performance-stat-card">
            <h3>{stat.title}</h3>
            <div className="performance-stat-details">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-trend">{stat.trend}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="sales-history-card">
        <h3>Histórico de Vendas</h3>
        <div className="sales-chart">
          {[40, 65, 45, 80, 55, 70].map((height, i) => (
            <div 
              key={i} 
              className="sales-bar" 
              style={{height: `${height}%`}}
            ></div>
          ))}
        </div>
        <div className="sales-days">
          {["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"].map((day, i) => (
            <span key={i}>{day}</span>
          ))}
        </div>
      </div>
    </div>
  );

  const InsightsScreen = () => (
    <div className="insights-screen">
      <h2 className="screen-title">Insights de Negócio</h2>
      <div className="insights-list">
        {[
          {
            title: "Oportunidade de Crescimento",
            desc: "Seus produtos da categoria A têm potencial para aumento de 25% nas vendas",
            type: "success"
          },
          {
            title: "Alerta de Estoque",
            desc: "3 produtos estão com estoque crítico e precisam de reposição",
            type: "warning"
          },
          {
            title: "Tendência de Mercado",
            desc: "Aumento na procura por produtos similares aos seus",
            type: "info"
          }
        ].map((insight, i) => (
          <div key={i} className={`insight-card ${insight.type}`}>
            <h3>{insight.title}</h3>
            <p>{insight.desc}</p>
            <div className="insight-details">
              <span>Ver detalhes</span>
              <ChevronRight />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const screens = {
    home: <HomeScreen />,
    inventory: <InventoryScreen />,
    packaging: <PackagingScreen />,
    performance: <PerformanceScreen />,
    insights: <InsightsScreen />
  };

  return (
    <div className="app-container">
      <main className="app-main">
        {screens[currentScreen]}
      </main>
      
      <nav className="app-nav">
        {[
          { icon: <MessageCircle />, name: 'home', label: 'Início' },
          { icon: <Box />, name: 'inventory', label: 'Estoque' },
          { icon: <PackageSearch />, name: 'packaging', label: 'Embalagens' },
          { icon: <BarChart2 />, name: 'performance', label: 'Desempenho' },
          { icon: <Settings />, name: 'insights', label: 'Insights' }
        ].map((item) => (
          <button
            key={item.name}
            className={`nav-button ${currentScreen === item.name ? 'active' : ''}`}
            onClick={() => setCurrentScreen(item.name)}
          >
            {item.icon}
            <span className="nav-label">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default LogiBotApp;
