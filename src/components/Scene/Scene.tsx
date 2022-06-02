import { Canvas } from "@react-three/fiber";
import * as React from "react";
import { Vector3 } from "three";
import { PerspectiveCamera} from "@react-three/drei";
import Box from "./Box/Box";
import { Office } from "./Office/Office";

interface ISceneProps {}

function Scene(props: ISceneProps) {
  return (
    <div className="container-canva">
      <Canvas className="canva">
        <PerspectiveCamera makeDefault position={[0, 0, 8]} />
        <directionalLight 
          position={[5, 0, 8]}
          castShadow
          intensity={0.3}
          shadow-camera-far={70}
        />
        <pointLight 
          color="0x404040"
          castShadow
          position={new Vector3(0, 1, 1)}
          shadowBias={0.0001}
          shadowMapHeight = {2048}
          shadowMapWidth = {2048}
          intensity={0.8}
        />
        {/* <ambientLight color="0x404040"/> */}
        <Office/>
        {/* <Box velocity={0.01} position={new Vector3(-5, 0, 0)}  /> */}
      </Canvas>
    </div>
  );
}

export default Scene;
