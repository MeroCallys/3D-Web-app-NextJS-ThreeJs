"use client";

import { Mesh } from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import React, { useState, useRef } from "react";

export default function Torus() {
  const [rotate, setRotation] = useState(0);
  const cubeRef = useRef<Mesh>(null!);

  useFrame(({ clock }) => {
    // Get elapsed time from clock
    const elapsedTime = clock.getElapsedTime();

    cubeRef.current.position.y = Math.sin(elapsedTime) * 2; // Make the cube float up and down
    cubeRef.current.rotation.x = elapsedTime; // Rotate the cube around the X-axis
    cubeRef.current.rotation.y = elapsedTime; // Rotate the cube around the Y-axis
  });

  return (
    <>
      <mesh ref={cubeRef} scale={0.5} position-x={-1}>
        <sphereGeometry />
        <meshNormalMaterial wireframe />
      </mesh>

      <mesh scale={0.5}>
        <coneGeometry />
        <meshNormalMaterial />
      </mesh>

      <mesh scale={0.5} position-x={-5}>
        <torusKnotGeometry />
        <meshNormalMaterial />
      </mesh>
      <mesh position-y={-5} scale={100} rotation-x={-Math.PI * 0.5}>
        <planeGeometry />
        <meshBasicMaterial color={"yellowgreen"} />
      </mesh>
    </>
  );
}
