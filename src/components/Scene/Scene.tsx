import { Canvas } from "@react-three/fiber";
import * as React from "react";
import { Vector3 } from "three";
import Box from "./Box/Box";

interface ISceneProps {}

function Scene(props: ISceneProps) {
  return (
    <div className="container-canva">
      <Canvas className="canva">
        <directionalLight />
        <Box velocity={0.01} position={new Vector3(0, 0, 1)}  />
      </Canvas>
    </div>
  );
}

export default Scene;
