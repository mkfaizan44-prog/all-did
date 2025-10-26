import React from 'react';
import { FiSmartphone, FiMoon, FiCpu } from 'react-icons/fi';

const FeatureCard = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
  <div className="bg-[var(--calculator-body)] backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center h-full">
    <div className="text-4xl text-[var(--btn-operator-text)] mb-4 inline-block">{icon}</div>
    <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2 font-orbitron">{title}</h3>
    <p className="text-[var(--text-secondary)]">{children}</p>
  </div>
);

const Features: React.FC = () => {
  return (
    <section className="relative z-10 w-full max-w-4xl p-4">
      <div className="grid md:grid-cols-3 gap-8">
        <FeatureCard icon={<FiMoon />} title="Themable UI">
          Switch between multiple themes like Cyberpunk and Synthwave, or a classic light mode to fit your style.
        </FeatureCard>
        <FeatureCard icon={<FiCpu />} title="Dual Mode">
          Supports both basic arithmetic and advanced scientific functions for all your calculation needs.
        </FeatureCard>
        <FeatureCard icon={<FiSmartphone />} title="Responsive Design">
          A fully responsive layout that looks and works great on desktops, tablets, and mobile devices.
        </FeatureCard>
      </div>
    </section>
  );
};

export default Features;