import { Canvas } from "@react-three/fiber";
import * as React from "react";
import Box from "./Box/Box";

interface ISceneProps {}

function Scene(props: ISceneProps) {
  return (
    <span className="container-canva">
      <Canvas className="canva">
        <Box position={[-3, 0, 1]} />
        <Box position={[-0, 0, 1]} scale={[1.2, 1.2, 1.2]} />
        <Box position={[3, 0, 1]} />
      </Canvas>
    </span>
  );
}

export default Scene;
