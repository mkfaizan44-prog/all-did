import React, { useState, useEffect } from 'react';
import Calculator from './components/Calculator';
import Sidebar from './components/Sidebar';
import Features from './components/Features';
import Footer from './components/Footer';
import About from './components/About';
import Help from './components/Help';
import ModelViewerPage from './components/ModelViewerPage';
import { THEMES, DEFAULT_THEME } from './constants';
import { Theme, View } from './types';

function App() {
  const [theme, setTheme] = useState<Theme>(THEMES[DEFAULT_THEME]);
  const [view, setView] = useState<View>('calculator');

  useEffect(() => {
    const root = document.documentElement;
    Object.entries(theme.colors).forEach(([key, value]) => {
      root.style.setProperty(key, value as string);
    });
  }, [theme]);

  const handleThemeChange = (themeName: string) => {
    const newTheme = THEMES[themeName];
    if (newTheme) {
      setTheme(newTheme);
    }
  };

  const renderView = () => {
    switch (view) {
      case 'model':
        return <ModelViewerPage theme={theme} />;
      case 'features':
        return <Features />;
      case 'about':
        return <About />;
      case 'help':
        return <Help />;
      case 'calculator':
      default:
        return <Calculator />;
    }
  };

  return (
    <div className="relative min-h-screen bg-[var(--background)] text-[var(--text-primary)] font-sans flex flex-col items-center overflow-x-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900"></div>
        <div
          className="absolute inset-0 bg-grid-pattern"
          style={{ maskImage: 'linear-gradient(to bottom, transparent, white 20%, white 80%, transparent)' }}
        ></div>
      </div>

      {/* Main Content Wrapper */}
      <div className="relative z-10 w-full max-w-7xl flex-grow flex flex-col lg:flex-row px-4 gap-8">
        <Sidebar 
          currentView={view} 
          onViewChange={setView} 
          onThemeChange={handleThemeChange} 
        />
        <main className="flex-grow w-full flex items-center justify-center py-8">
          {renderView()}
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default App;