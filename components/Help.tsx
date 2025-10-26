import React from 'react';

const Help: React.FC = () => {
  return (
    <div className="w-full max-w-2xl p-6 bg-[var(--calculator-body)] backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-[var(--calculator-shadow)]">
      <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4 font-orbitron">How to Use</h2>
      <div className="text-[var(--text-secondary)] space-y-4">
        <h3 className="text-lg font-semibold text-[var(--text-primary)]">Calculator</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Use the number and operator buttons for basic calculations.</li>
          <li>Click 'C' to clear the display, and the backspace icon to delete the last character.</li>
          <li>Toggle "Scientific Mode" to access advanced functions like sine, cosine, and logarithms.</li>
        </ul>
        <h3 className="text-lg font-semibold text-[var(--text-primary)]">Interface</h3>
         <ul className="list-disc list-inside space-y-2">
          <li>Use the navigation panel on the left to switch between different pages.</li>
          <li>Use the dropdown at the bottom of the navigation panel to change the visual theme.</li>
          <li>On the "3D Model" page, click and drag to rotate, right-click and drag to pan, and scroll to zoom.</li>
        </ul>
      </div>
    </div>
  );
};

export default Help;