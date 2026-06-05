import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Model() {
  const { scene } = useGLTF("/anime (1).glb");

  return (
    <primitive
      object={scene}
      scale={1.5}
      position={[0, -1, 0]}
      rotation={[0, Math.PI / 4, 0]}
    />
  );
}

useGLTF.preload("/anime (1).glb");