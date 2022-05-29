import { Canvas } from "@react-three/fiber";
import * as React from "react";
import { AmbientLight, Vector3 } from "three";
import Box from "./Box/Box";
import { Office } from "./Office/Office";

interface ISceneProps {}

function Scene(props: ISceneProps) {
  return (
    <div className="container-canva">
      <Canvas className="canva">
        <directionalLight />
        <ambientLight color={"#ffffff"} />
        <Office/>
        {/* <Box velocity={0.01} position={new Vector3(-5, 0, 0)}  /> */}
      </Canvas>
    </div>
  );
}

export default Scene;
