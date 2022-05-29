import * as React from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export interface IOfficeProps {}

export function Office(props: IOfficeProps) {
  const gltf = useLoader(GLTFLoader, "/bureau.gltf");
  React.useEffect(() => {
      gltf.scene.scale.set(0.8, 0.8, 0.8);
      gltf.scene.position.set(2, -1, 0);
      gltf.scene.rotation.set(.2, -1, 0);
  }, []);

  useFrame(()=> {
      gltf.scene.rotation.y += 0.001;
  })

  return (
    <React.Suspense fallback={null}>
      <primitive object={gltf.scene} />
    </React.Suspense>
  );
}
