import React from 'react';

const About: React.FC = () => {
  return (
    <div className="w-full max-w-2xl p-6 bg-[var(--calculator-body)] backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-[var(--calculator-shadow)]">
      <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4 font-orbitron">About This Project</h2>
      <div className="text-[var(--text-secondary)] leading-relaxed space-y-4">
        <p>
          This is a modern, themeable calculator built to showcase the power of modern web technologies, including React, TypeScript, and Tailwind CSS.
        </p>
        <p>
          It features a sleek 3D-style UI, standard and scientific modes, and a variety of customizable themes. The goal was to create a functional and visually appealing calculator that's a joy to use.
        </p>
        <p>
          The new 3D model viewer uses <code className="bg-white/10 px-1 rounded">react-three-fiber</code> to provide an interactive experience, allowing you to explore the calculator's design in three dimensions.
        </p>
      </div>
    </div>
  );
};

export default About;