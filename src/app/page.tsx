"use client";

import { Canvas } from "@react-three/fiber";
import Torus from "./Torus";

import { useCameraContext } from "./CameraContextProvider";
import Controls from "./Controls";



export default function Home() {
  const boxes = [
    {
      value: 1,
      getValue() {
        return this.value;
      },
    },
    {
      value: 2,
      getValue() {
        return this.value;
      },
    },
    {
      value: 3,
      getValue() {
        return this.value;
      },
    },
  ];

  console.log(boxes.map((e) => e.getValue()));

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
