import React from 'react';
import { ButtonConfig, ButtonType } from '../types';

interface ButtonProps {
  config: ButtonConfig;
  onClick: (value: string) => void;
}

const Button: React.FC<ButtonProps> = ({ config, onClick }) => {
  const { label, value, type, gridSpan } = config;

  const baseClasses = "rounded-xl font-bold text-xl md:text-2xl h-16 md:h-20 flex items-center justify-center transition-all duration-150 ease-in-out transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-opacity-50";

  const typeClasses = {
    [ButtonType.Number]: "bg-[var(--btn-number-bg)] text-[var(--btn-number-text)] border-b-4 border-[var(--btn-number-border)] hover:bg-opacity-80 focus:ring-[var(--btn-number-border)]",
    [ButtonType.Operator]: "bg-[var(--btn-operator-bg)] text-[var(--btn-operator-text)] border-b-4 border-[var(--btn-operator-border)] hover:bg-opacity-80 focus:ring-[var(--btn-operator-border)]",
    [ButtonType.Function]: "bg-[var(--btn-function-bg)] text-[var(--btn-function-text)] border-b-4 border-[var(--btn-function-border)] hover:bg-opacity-80 focus:ring-[var(--btn-function-border)]",
    [ButtonType.Equal]: "bg-[var(--btn-equal-bg)] text-[var(--btn-equal-text)] border-b-4 border-[var(--btn-equal-border)] hover:bg-opacity-80 focus:ring-[var(--btn-equal-border)]",
  };

  // FIX: Tailwind CSS requires full, static class names.
  // We map the gridSpan number to a static class instead of building it dynamically.
  const gridSpanMap: { [key: number]: string } = {
    2: 'col-span-2',
    3: 'col-span-3',
    4: 'col-span-4',
  };
  const gridSpanClass = gridSpan ? gridSpanMap[gridSpan] : '';


  return (
    <button
      className={`${baseClasses} ${typeClasses[type]} ${gridSpanClass}`}
      onClick={() => onClick(value)}
    >
      {label}
    </button>
  );
};

export default Button;