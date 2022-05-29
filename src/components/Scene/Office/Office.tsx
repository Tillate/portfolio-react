import * as React from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export interface IOfficeProps {}

export function Office(props: IOfficeProps) {
  const gltf = useLoader(GLTFLoader, "/bureau.gltf");
    console.log(gltf);
    

  React.useEffect(() => {
      gltf.scene.scale.set(0.9, 0.9, 0.9);
      gltf.scene.position.set(3, -1, 0);
      gltf.scene.rotation.set(.2, -0.9, 0);
  }, []);

  useFrame(()=> {
      gltf.scene.rotation.y += 0.0001;
  })

  return (
    <React.Suspense fallback={null}>
      <primitive object={gltf.scene} />
    </React.Suspense>
  );
}
