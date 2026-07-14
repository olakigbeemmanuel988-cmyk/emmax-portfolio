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
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial color={color} distort={0.35} speed={2} roughness={0.1} metalness={0.8} transparent opacity={0.85} />
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
      <torusGeometry args={[1.8, 0.03, 16, 100]} />
      <meshBasicMaterial color="#7c3aed" wireframe />
    </mesh>
  );
}

export default function ThreeScene() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 60 }} style={{ position: 'absolute', inset: 0 }}>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={1.5} color="#7c3aed" />
      <pointLight position={[-5, -5, 5]} intensity={1} color="#06b6d4" />
      <Stars radius={80} depth={50} count={3000} factor={4} saturation={0} fade />
      <FloatingSphere position={[-3.5, 1, -2]} color="#7c3aed" scale={1.2} />
      <FloatingSphere position={[4, -1.5, -3]} color="#06b6d4" scale={0.9} />
      <FloatingSphere position={[0, 2.5, -4]} color="#a855f7" scale={0.6} />
      <WireframeTorus position={[2, 1, -1]} />
      <WireframeTorus position={[-2, -2, -2]} />
    </Canvas>
  );
}
