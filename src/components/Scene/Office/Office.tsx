import * as React from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export interface IOfficeProps {}

export function Office(props: IOfficeProps) {
  const gltf = useLoader(GLTFLoader, "/bureau.gltf");
    console.log(gltf);
    

  React.useEffect(() => {
      gltf.scene.scale.set(0.8, 0.8, 0.8);
      gltf.scene.position.set(3, -1, 0);
      gltf.scene.rotation.set(0.4, -0.7, 0.04);
      gltf.scene.receiveShadow = true;

      gltf.scene.children.forEach((node, i) => {
        gltf.scene.children[i].receiveShadow = true;
      });

  }, []);

  useFrame(()=> {
      gltf.scene.rotation.y += 0.0000001;
  })

  return (
    <React.Suspense fallback={null}>
      <primitive object={gltf.scene} />
    </React.Suspense>
  );
}
