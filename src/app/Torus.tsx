"use client";



import { Mesh, Vector2 } from "three";
import { Canvas, extend, useFrame, useThree } from "@react-three/fiber";
import React, { useState, useRef } from "react";
import { OutlinePass } from "three/examples/jsm/Addons.js";

extend({ OutlinePass });

export default function Torus() {
  const [rotate, setRotation] = useState(0);
  const cubeRef = useRef<Mesh>(null!);
  const [hovered, setHovered] = useState(true);

  useFrame((state, delta) => {
    // Get elapsed time from clock
    const elapsedTime = state.clock.getElapsedTime();

    cubeRef.current.position.z = Math.random() * elapsedTime * 2; // Make the cube float up and down
    cubeRef.current.position.x = Math.sin(elapsedTime) * 2; // Make the cube float up and down
    cubeRef.current.position.z = Math.sin(elapsedTime) * 2; // Make the cube float up and down
    cubeRef.current.rotation.x = elapsedTime; // Rotate the cube around the X-axis
    cubeRef.current.rotation.y = elapsedTime; // Rotate the cube around the Y-axis
  });

  return (
    <>
      <mesh
        ref={cubeRef}
        scale={0.5}
        position-x={-1}
        onPointerEnter={(event) => {
          event.stopPropagation();
          setHovered(true);
        }}
        onClick={(event) => {
          event.stopPropagation();
          console.log("you clicked the spehere");
        }}
        onPointerLeave={(event) => {
          event.stopPropagation();
          setHovered(false);
        }}
      >
        <sphereGeometry />
        {hovered ? (
          <meshNormalMaterial wireframe />
        ) : (
          <meshBasicMaterial color={"purple"} wireframe />
        )}
        {/* <meshNormalMaterial wireframe /> */}
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
