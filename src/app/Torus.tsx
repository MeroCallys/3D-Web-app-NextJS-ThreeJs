"use client";



import { Group, Mesh } from "three";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useState, useRef } from "react";
import CustomObject from "./CustomObject";
import { OrbitControls } from "@react-three/drei";

export default function Torus() {
  const { camera } = useThree();

  // useFrame((state, delta) => {
  //   const angle = state.clock.elapsedTime;

  //   state.camera.position.y = Math.cos(angle) * Math.tan(angle) * 2;

  //   camera.lookAt(0, 0, 0);
  // });

  const cubeRef = useRef<Mesh>(null!);
  const [hovered, setHovered] = useState(true);
  const groupRef = useRef<Group>(null!);
  // useFrame((state, delta) => {
  //   const elapsedTime = state.clock.getElapsedTime();
  //   groupRef.current.position.z = Math.random() * elapsedTime * 2; // Make the cube float up and down
  //   groupRef.current.position.x = Math.sin(elapsedTime) * 2; // Make the cube float up and down
  //   groupRef.current.position.z = Math.sin(elapsedTime) * 2; // Make the cube float up and down
  //   groupRef.current.rotation.x = elapsedTime; // Rotate the cube around the X-axis
  //   groupRef.current.rotation.y = elapsedTime; // Rotate the cube around the Y-axis
  //   groupRef.current.rotation.z = elapsedTime; // Rotate the cube around the Y-axis
  // });

  return (
    <>
      <OrbitControls />

      <ambientLight intensity={1.5} position={[-1, -2, -3]} />
      <directionalLight intensity={4.5} position={[1, 2, 3]} />
      {/* <CustomObject /> */}
      <group ref={groupRef}>
        <mesh
          ref={cubeRef}
          scale={0.5}
          position={[-2.5, 0, 0]}
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
            <meshStandardMaterial color={"skyblue"} />
          )}
          {/* <meshNormalMaterial wireframe /> */}
        </mesh>

        <mesh scale={0.5}>
          <coneGeometry />
          <meshStandardMaterial color={"gray"} />
        </mesh>

        <mesh scale={0.5} position-x={-5}>
          <torusKnotGeometry />
          <meshStandardMaterial color={"orangered"} />
        </mesh>
      </group>

      <mesh position-y={-5} scale={100} rotation-x={-Math.PI * 0.5}>
        <planeGeometry />
        <meshStandardMaterial color={"yellowgreen"} />
      </mesh>
    </>
  );
}

