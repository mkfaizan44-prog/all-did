
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// FIX: Import for side-effects to register custom JSX elements for react-three-fiber.
// This resolves errors in other components (like Calculator3D.tsx) that use R3F's declarative syntax.
import '@react-three/fiber';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);