import React from 'react';
import { Canvas } from '@react-three/fiber';
import Calculator3D from './Calculator3D';
import { Theme } from '../types';

interface ModelViewerPageProps {
  theme: Theme;
}

const ModelViewerPage: React.FC<ModelViewerPageProps> = ({ theme }) => {
  return (
    <div className="w-full h-full max-w-4xl flex flex-col items-center justify-center p-4">
      <div className="w-full text-center mb-4">
          <h2 className="text-3xl font-bold text-[var(--text-primary)] font-orbitron">3D Model Viewer</h2>
          <p className="text-[var(--text-secondary)]">Click & drag to rotate. Scroll to zoom.</p>
      </div>
      <div className="w-full h-[50vh] md:h-[60vh] bg-[var(--calculator-body)] backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-[var(--calculator-shadow)]">
        <Canvas camera={{ position: [0, 0, 15], fov: 50 }}>
          <Calculator3D theme={theme} />
        </Canvas>
      </div>
    </div>
  );
};

export default ModelViewerPage;