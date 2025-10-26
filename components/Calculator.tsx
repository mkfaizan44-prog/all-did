import React from 'react';
import Display from './Display';
import Button from './Button';
import { useCalculator } from '../hooks/useCalculator';
import { basicButtons, scientificButtons } from '../constants';
import { FiChevronDown, FiChevronUp, FiSettings } from 'react-icons/fi';

const Calculator: React.FC = () => {
  const {
    expression,
    displayValue,
    isScientificMode,
    handleButtonClick,
    toggleScientificMode,
  } = useCalculator();

  return (
    <div className="w-full max-w-md md:max-w-lg lg:max-w-2xl bg-[var(--calculator-body)] backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-[var(--calculator-shadow)] p-4 md:p-6 space-y-4">
      <Display expression={expression} value={displayValue} />
      
      <div className="grid grid-cols-4 gap-2 md:gap-3">
        {basicButtons.map((btn) => (
          <Button key={btn.value} config={btn} onClick={handleButtonClick} />
        ))}
      </div>

      <div className="border-t border-white/10 pt-4">
        <button
          onClick={toggleScientificMode}
          className="w-full flex items-center justify-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors py-2 rounded-lg bg-white/5"
        >
          <FiSettings />
          <span>Scientific Mode</span>
          {isScientificMode ? <FiChevronUp /> : <FiChevronDown />}
        </button>
      </div>

      {isScientificMode && (
        <div className="border-t border-white/10 pt-4 grid grid-cols-5 gap-2 md:gap-3">
          {scientificButtons.map((btn) => (
             <Button key={btn.value} config={btn} onClick={handleButtonClick} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Calculator;
