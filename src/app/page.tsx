"use client";

import { Canvas } from "@react-three/fiber";
import Torus from "./Torus";

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <Canvas>
        <Torus />
      </Canvas>
    </div>
  );
}
