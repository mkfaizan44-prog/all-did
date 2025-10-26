import React, { useState } from 'react';
import { THEMES, DEFAULT_THEME } from '../constants';

interface ThemeSwitcherProps {
  onThemeChange: (themeName: string) => void;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ onThemeChange }) => {
  const [selectedTheme, setSelectedTheme] = useState(DEFAULT_THEME);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const themeName = e.target.value;
    setSelectedTheme(themeName);
    onThemeChange(themeName);
  };

  return (
    <div className="relative w-full">
      <select
        value={selectedTheme}
        onChange={handleSelectChange}
        className="w-full appearance-none bg-white/5 text-[var(--text-primary)] border border-white/10 backdrop-blur-md rounded-lg py-2 pl-3 pr-8 focus:outline-none focus:ring-2 focus:ring-[var(--btn-equal-bg)] transition-colors"
      >
        {Object.keys(THEMES).map((themeName) => (
          <option key={themeName} value={themeName} className="bg-[var(--background)] text-[var(--text-primary)]">
            {themeName}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[var(--text-primary)]">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );
};

export default ThemeSwitcher;