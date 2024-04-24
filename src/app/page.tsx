"use client";

import { Canvas } from "@react-three/fiber";
import Torus from "./Torus";

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <Canvas
        camera={{
          fov: 100,
          near: 0.1,
          far: 200,
          position: [0, 0, 10],
        }}
      >
        <Torus />
      </Canvas>
    </div>
  );
}
