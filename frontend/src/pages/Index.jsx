import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { CubeCamera, Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Ground from "./Ground";
import Car from "./Car";
import Garage from "./Garage";
import { Bloom, ChromaticAberration, EffectComposer, DepthOfField } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

function CarShow() {
  return <>
    <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} maxDistance={4} />
    <PerspectiveCamera makeDefault fov={50} position={[3, 2, 2]} />
    <color args={[0, 0, 0]} attach={"background"} />

    <spotLight
      color={[1, 0.25, 0.7]}
      intensity={1.5}
      angle={0.6}
      penumbra={0.5}
      position={[5, 5, 0]}
      castShadow
      shadowBias={0.0001}
    />

    <spotLight
      color={[0.14, 0.5, 1]}
      intensity={2}
      angle={0.6}
      penumbra={0.5}
      position={[-5, 5, 0]}
      castShadow
      shadowBias={0.0001}
    />
    <Garage />
    <Car/>

    <ambientLight intensity={3} />


    <EffectComposer>
      <Bloom blendFunction={BlendFunction.ADD}
      intensity={0.9}
      width={300}
      height={300}
      kernelSize={3}
      luminanceThreshold={0.05}
      luminanceSmoothing={0.025}
      />
      <ChromaticAberration
       blendFunction={BlendFunction.NORMAL}
       offset={[0.0005,0.0012]}
      />
    </EffectComposer>
    {/* <directionalLight color={0xffddff} intensity={3} position={[0, 1, 0]} /> */}
    {/* <input style={{width:"10rem"}} /> */}
  </>
}

function Index() {
  return (
    <Suspense fallback={null}>
      <Canvas shadows>
        <CarShow />
      </Canvas>
    </Suspense>
  );
}

export default Index;
