import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 w-full max-w-7xl mt-auto p-4">
      <div className="bg-[var(--calculator-body)] backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg w-full px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[var(--text-secondary)] text-center sm:text-left">
          &copy; {new Date().getFullYear()} 3D Calculator. All Rights Reserved.
        </p>
        <div className="flex items-center gap-4">
           <p className="text-sm text-[var(--text-secondary)] hidden md:block">
            Crafted to merge design and functionality.
           </p>
           <div className="w-px h-4 bg-white/10 hidden md:block"></div>
          <a 
            href="#" // Replace with your source code link
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            View Source
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
