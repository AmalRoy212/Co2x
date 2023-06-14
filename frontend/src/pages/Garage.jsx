import React, { useEffect, useRef } from 'react';
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";

function Garage() {
  const gltf = useLoader(
    GLTFLoader,
    "models/garage/scene.gltf"
  );
  const garageRef = useRef();

  useEffect(() => {
    gltf.scene.scale.set(1, 1, 1);
    gltf.scene.rotation.y = -250;
    gltf.scene.traverse((object) => {
      if (object instanceof Mesh) {
        object.castShadow = true;
        object.receiveShadow = true;
        object.material.envMapIntensity = 20;
      }
    });
  }, [gltf]);

  // useFrame((state) => {
  //   let t = state.clock.getElapsedTime();
  //   let group = garageRef.current;

  //   group.children[0].rotation.x = t * 2;
  //   group.children[2].rotation.x = t * 2;
  //   group.children[4].rotation.x = t * 2;
  //   group.children[6].rotation.x = t * 2;
  // });

  const handleHover = (event) => {
    const group = garageRef.current;
    group.rotation.y = event.isIntersected ? -250 : 0;
  };

  return (
    <group ref={garageRef} onPointerOver={handleHover} onPointerOut={handleHover}>
      <primitive object={gltf.scene} />
    </group>
  );
}

export default Garage;
