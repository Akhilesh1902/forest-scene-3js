import { Plane } from "@react-three/drei"
import React, { Suspense, useRef } from "react"
import ForestModel from "./ForestModel"
import * as THREE from "three"

const ModelWrapper = () => {
  const plane = useRef()
  console.log(plane)
  return (
    <>
      <ambientLight intensity={0.2} color={"0x290c3f"} />
      <Suspense fallback={null}>
        <ForestModel />
      </Suspense>
      <Plane
      ref={plane}
        args={[30, 30]}
        rotation={[1.57, 0, 0]}
        position={[0, -1, 0]}
        receiveShadow={true}>
        <meshStandardMaterial
          attach="material"
          color={"#39187d"}
          side={THREE.DoubleSide}
        />
      </Plane>
    </>
  )
}

export default ModelWrapper
