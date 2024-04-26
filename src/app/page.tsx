"use client";

import { Canvas } from "@react-three/fiber";
import Torus from "./Torus";

import { useCameraContext } from "./CameraContextProvider";
import Controls from "./Controls";

import * as THREE from "three";
export default function Home() {
  const cameraContext = useCameraContext();

  return (
    <div className="w-screen h-screen relative">
      <Canvas
      // gl={{
      //   toneMapping: 7,
      //   outputColorSpace: THREE.SRGBColorSpace,
      // }}
      // camera={cameraContext}
      >
        <Torus />
      </Canvas>
      <Controls />
    </div>
  );
}
