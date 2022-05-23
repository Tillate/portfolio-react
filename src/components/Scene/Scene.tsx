import { Canvas } from "@react-three/fiber";
import * as React from "react";
import { Mesh } from "three";
import Box from "./Box/Box";

interface ISceneProps {}

function Scene(props: ISceneProps) {
  return (
    <div className="container-canva">
      <Canvas className="canva">
        <directionalLight />
        <Box position={[-3, 0, 1]} velocity={0.01} />
      </Canvas>
    </div>
  );
}

export default Scene;
