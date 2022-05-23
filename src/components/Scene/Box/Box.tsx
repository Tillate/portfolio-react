import React, { useRef, useEffect, useState } from "react";
import { MeshProps, useFrame } from "@react-three/fiber";

function Box(props: MeshProps) {
  const ref = useRef<MeshProps>(null!);
  const [clicked, setClicked] = React.useState(false);

  useEffect(() => {
    console.log(Boolean(ref.current));
  }, []);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.01;
      ref.current.rotation.z += clicked ? 0 : 0.05;
    }
  });

  return (
    <mesh {...props} ref={ref} onClick={() => setClicked(!clicked)}>
      <boxGeometry />
      <meshStandardMaterial />
    </mesh>
  );
}

export default Box;
