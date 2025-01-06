'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import { OrbitControls } from '@react-three/drei';
import { extend } from '@react-three/fiber';
import { AmbientLight, PointLight, SphereGeometry, MeshPhongMaterial } from 'three';

extend({ AmbientLight, PointLight, SphereGeometry, MeshPhongMaterial });

const Scene: React.FC = () => {
  const meshRef = useRef<Mesh>(null);
  const time = useRef(0);

  useFrame((state, delta) => {
    time.current += delta;

    if (meshRef.current) {
      // Combine rotation and floating movement
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.3;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
      
      // Add floating movement
      meshRef.current.position.y = Math.sin(time.current) * 0.5;
      // Add slight horizontal movement
      meshRef.current.position.x = Math.sin(time.current * 0.8) * 0.3;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <mesh ref={meshRef}>
        <sphereGeometry args={[1.5, 64, 64]} />
        <meshPhongMaterial
          color="#3B82F6"
          shininess={100}
          specular="#ffffff"
        />
      </mesh>
      <OrbitControls 
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
      />
    </>
  );
};

const ThreeScene: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
      <Canvas
        camera={{ position: [0, 0, 5] }}
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default ThreeScene; 