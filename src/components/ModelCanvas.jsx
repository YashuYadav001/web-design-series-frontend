import React from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  Float,
  OrbitControls,
  ContactShadows,
} from "@react-three/drei";

import Model from "./Model";

export default function ModelCanvas() {
  return (
    <div
      className="
        model-box
        w-full
        h-[700px]
        rounded-[40px]
        bg-black/30
        backdrop-blur-xl
        border
        border-cyan-400/20
        overflow-hidden
        shadow-[0_0_100px_rgba(0,255,255,.15)]
      "
    >
      <Canvas
        camera={{
          position: [0, 0, 6],
          fov: 65,
        }}
      >
        {/* Lights */}

        <ambientLight intensity={2.5} />

        <pointLight
          position={[5, 5, 5]}
          intensity={20}
          color="#00ffff"
        />

        <pointLight
          position={[-5, 5, 5]}
          intensity={20}
          color="#ff00ff"
        />

        {/* Floating Model */}

        <Float
          speed={2}
          rotationIntensity={0.5}
          floatIntensity={1}
        >
          <Model />
        </Float>

        {/* Ground Shadow */}

        <ContactShadows
          position={[0, -2, 0]}
          opacity={0.5}
          scale={10}
          blur={2}
        />

        {/* HDRI */}

        <Environment preset="city" />

        {/* Controls */}

        <OrbitControls
          enableZoom={false}
          enableDamping
  dampingFactor={.05}
        />
      </Canvas>
    </div>
  );
}