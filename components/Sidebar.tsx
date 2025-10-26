import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import { View } from '../types';
// FIX: FiCalculator is not an exported member of 'react-icons/fi'. Replaced with FiCpu.
import { FiCpu, FiBox, FiStar, FiHelpCircle, FiInfo } from 'react-icons/fi';

interface SidebarProps {
  currentView: View;
  onViewChange: (view: View) => void;
  onThemeChange: (themeName: string) => void;
}

const NavItem = ({ icon, label, isActive, onClick }: { icon: React.ReactNode, label: string, isActive: boolean, onClick: () => void }) => (
  <li>
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-4 px-4 py-3 rounded-lg text-left transition-colors ${
        isActive ? 'bg-white/10 text-[var(--text-primary)]' : 'text-[var(--text-secondary)] hover:bg-white/5 hover:text-[var(--text-primary)]'
      }`}
    >
      <span className="text-xl">{icon}</span>
      <span className="font-semibold">{label}</span>
    </button>
  </li>
);

const Sidebar: React.FC<SidebarProps> = ({ currentView, onViewChange, onThemeChange }) => {
  const navItems = [
    { view: 'calculator', icon: <FiCpu />, label: 'Calculator' },
    { view: 'model', icon: <FiBox />, label: '3D Model' },
    { view: 'features', icon: <FiStar />, label: 'Features' },
    { view: 'about', icon: <FiInfo />, label: 'About' },
    { view: 'help', icon: <FiHelpCircle />, label: 'Help' },
  ];

  return (
    <aside className="relative z-10 w-full lg:w-64 lg:flex-shrink-0 py-8">
      <div className="lg:fixed lg:w-64 p-4 space-y-8 bg-[var(--calculator-body)] backdrop-blur-xl border border-white/10 rounded-2xl h-full flex flex-col">
        <div className="text-center">
            <h1 className="text-2xl font-bold text-white font-orbitron">3D CALC</h1>
            <p className="text-xs text-[var(--text-secondary)]">Modern Web Edition</p>
        </div>
        <nav className="flex-grow">
          <ul className="space-y-2">
            {navItems.map(item => (
              <NavItem 
                key={item.view}
                icon={item.icon}
                label={item.label}
                isActive={currentView === item.view}
                onClick={() => onViewChange(item.view as View)}
              />
            ))}
          </ul>
        </nav>
        <div className="mt-auto">
            <ThemeSwitcher onThemeChange={onThemeChange} />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;