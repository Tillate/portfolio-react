import React, { useRef, useEffect, useState } from "react";
import { MeshProps, useFrame } from "@react-three/fiber";
import { Mesh, MeshBasicMaterial } from "three";

interface IBoxProps extends Mesh {
  velocity: number;
}

function Box(props: IBoxProps) {
  const ref = useRef<Mesh>(null!);
  const [clicked, setClicked] = React.useState(false);

  useEffect(() => {
    console.log(ref.current);
  }, [ref.current]);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y -= 0.01;
      ref.current.rotation.z += clicked ? 0 : 0.05;

      ref.current.position.y -= clicked ? props.velocity / 10 : props.velocity;
      if (ref.current.position.y < -5) {
        ref.current.position.y = 5;
      }
      if (ref.current.position.y < 0) {
        ref.current.material = new MeshBasicMaterial({ color: 'red'});
        ref.current.material = new MeshBasicMaterial({ color: 'blue'});
      }
    }
  });

  return (
    <mesh {...props} ref={ref} onClick={() => setClicked(!clicked)}>
      <boxGeometry />
      <meshPhongMaterial color="blue" />
    </mesh>
  );
}

export default Box;
