import React from 'react';

interface DisplayProps {
  expression: string;
  value: string;
}

const Display: React.FC<DisplayProps> = ({ expression, value }) => {
  return (
    <div className="w-full bg-[var(--display-bg)] text-[var(--display-text)] rounded-xl p-4 text-right overflow-hidden shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)] border border-white/10">
      <div className="h-6 text-sm opacity-60 truncate font-orbitron">{expression || ' '}</div>
      <div className="text-4xl md:text-5xl font-bold font-orbitron break-all blinking-cursor">
        {value}
      </div>
    </div>
  );
};

export default Display;