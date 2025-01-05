'use client';

import React, { useRef } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Environment, PerspectiveCamera } from '@react-three/drei';

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.3;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 32, 32]}>
      <MeshDistortMaterial
        color="#4B0082"
        attach="material"
        distort={0.5}
        speed={2}
      />
    </Sphere>
  );
}

export default function ThreeScene() {
  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <Environment preset="city" />
      <AnimatedSphere />
    </Canvas>
  );
} 