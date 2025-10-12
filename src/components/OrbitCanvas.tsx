"use client";

import { Canvas } from "@react-three/fiber";
import { Sphere, Float } from "@react-three/drei";
import * as THREE from "three";

export default function OrbitCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 6] }}>
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} />

      {[...Array(6)].map((_, i) => (
        <Float
          key={i}
          speed={1 + i * 0.2}
          rotationIntensity={1.2}
          floatIntensity={0.8}
        >
          <Sphere args={[0.15 + Math.random() * 0.1, 32, 32]}>
            <meshStandardMaterial
              color={"#47c485"}
              transparent
              opacity={0.25 + Math.random() * 0.3}
              emissive={"#47c485"}
              emissiveIntensity={0.3}
              roughness={0.6}
            />
          </Sphere>
        </Float>
      ))}

      <mesh>
        <sphereGeometry args={[3, 64, 64]} />
        <meshBasicMaterial
          wireframe
          transparent
          opacity={0.05}
          color={new THREE.Color("#47c485")}
        />
      </mesh>
    </Canvas>
  );
}
