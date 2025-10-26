import React, { useRef } from 'react';
// FIX: To resolve errors about JSX elements like `<group>`, `<mesh>`, etc. not being recognized, we import `@react-three/fiber` for its side effects. This augments TypeScript's JSX definitions with react-three-fiber's custom elements.
import '@react-three/fiber';
import { useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Mesh } from 'three';
import { Theme } from '../types';

interface Calculator3DProps {
  theme: Theme;
}

const Calculator3D: React.FC<Calculator3DProps> = ({ theme }) => {
  const meshRef = useRef<Mesh>(null!);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
    }
  });

  const { colors } = theme;

  return (
    <>
      <ambientLight intensity={1.5} />
      <pointLight position={[10, 10, 10]} intensity={150} />
      <pointLight position={[-10, -10, -10]} intensity={100} />

      <group ref={meshRef} scale={[1.2, 1.2, 1.2]}>
        {/* Calculator Body */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[5, 8, 1]} />
          <meshStandardMaterial color={colors['--calculator-body']} roughness={0.3} metalness={0.1} />
        </mesh>
        
        {/* Display */}
        <mesh position={[0, 2.5, 0.51]}>
          <boxGeometry args={[4.5, 2, 0.1]} />
          <meshStandardMaterial color={colors['--display-bg']} emissive={colors['--display-text']} emissiveIntensity={0.3} />
        </mesh>

        {/* Buttons */}
        <group position={[-1.5, -1.5, 0.51]}>
          {Array.from({ length: 4 }).map((_, row) =>
            Array.from({ length: 3 }).map((_, col) => (
              <mesh key={`${row}-${col}`} position={[col * 1.5, row * -1.5, 0]}>
                <boxGeometry args={[1, 1, 0.2]} />
                <meshStandardMaterial color={colors['--btn-number-bg']} roughness={0.5} />
              </mesh>
            ))
          )}
        </group>
        
         {/* Operator Buttons */}
         <group position={[3, -0.75, 0.51]}>
          {Array.from({ length: 4 }).map((_, row) =>
              <mesh key={row} position={[0, row * -1.5, 0]}>
                <boxGeometry args={[1, 1, 0.2]} />
                <meshStandardMaterial color={colors['--btn-operator-bg']} roughness={0.5} />
              </mesh>
          )}
        </group>

      </group>

      <OrbitControls enableZoom={true} enablePan={true} />
    </>
  );
};

export default Calculator3D;