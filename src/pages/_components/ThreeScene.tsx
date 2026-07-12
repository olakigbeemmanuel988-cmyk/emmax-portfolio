import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function FloatingSphere({ position, color, scale }: { position: [number, number, number]; color: string; scale: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.08;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.06;
    }
  });
  return (
    <Float speed={0.8} rotationIntensity={0.2} floatIntensity={0.6}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial color={color} distort={0.15} speed={1.2} roughness={0.3} metalness={0.6} opacity={0.35} transparent />
      </mesh>
    </Float>
  );
}

function WireframeTorus({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.12;
      meshRef.current.rotation.z = state.clock.getElapsedTime() * 0.07;
    }
  });
  return (
    <mesh ref={meshRef} position={position}>
      <torusGeometry args={[1.4, 0.25, 16, 80]} />
      <meshStandardMaterial color="#7c3aed" wireframe emissive="#7c3aed" emissiveIntensity={0.15} opacity={0.25} transparent />
    </mesh>
  );
}

export default function ThreeScene() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;
  return (
    <Canvas camera={{ position: [0, 0, 9], fov: 55 }} style={{ position: 'absolute', inset: 0 }} gl={{ alpha: true, antialias: true }}>
      <ambientLight intensity={0.15} />
      <pointLight position={[8, 8, 8]} color="#7c3aed" intensity={0.8} />
      <pointLight position={[-8, -6, -6]} color="#06b6d4" intensity={0.6} />
      <Stars radius={120} depth={60} count={1800} factor={3} saturation={0} fade speed={0.4} />
      <FloatingSphere position={[-4.5, 1.2, -4]} color="#7c3aed" scale={0.8} />
      <FloatingSphere position={[4.5, -1.2, -5]} color="#06b6d4" scale={0.65} />
      <FloatingSphere position={[2.5, 2.8, -6]} color="#a855f7" scale={0.4} />
      <WireframeTorus position={[0, 0, -7]} />
    </Canvas>
  );
}