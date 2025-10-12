"use client";

import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

export default function HeroBlob() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.8} />
      <directionalLight position={[3, 5, 2]} intensity={1.2} />

      <Suspense fallback={null}>
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
          <Sphere args={[1.3, 64, 64]}>
            <MeshDistortMaterial
              color="#47c485"
              attach="material"
              distort={0.4}
              speed={2.5}
              roughness={0.2}
              metalness={0.1}
            />
          </Sphere>
        </Float>
      </Suspense>

      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
}
