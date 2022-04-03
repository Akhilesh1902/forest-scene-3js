// import { useHelper } from "@react-three/drei"
import { useFrame, useLoader } from "@react-three/fiber"
import {  useRef } from "react"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader"
// import { DirectionalLightHelper, PointLightHelper } from "three"

import React from "react"

const ForestModel = () => {
  const forestModel = useLoader(GLTFLoader, "/dracoForestFinal.glb", (loader) => {
    const dl = new DRACOLoader()
    dl.setDecoderPath("/dl-decode/")
    loader.setDRACOLoader(dl)
  })

  forestModel.scene.traverse((child) => {
    if (child.isMesh) {
      // console.log(child)
      child.castShadow = true
      child.receiveShadow = true
    }
  })
  forestModel.scene.castShadow = true

  const sun = useRef()

  const scale = 1

  forestModel.scene.scale.set(scale, scale, scale)
  forestModel.scene.position.y = -1
  forestModel.scene.rotation.set(0, -1.57, 0)

  //   useHelper(sun, DirectionalLightHelper, 0.5, "yellow")

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime()
    const suntime = elapsedTime * 0.5
    sun.current.position.x = Math.sin(suntime) * 5
    sun.current.position.y = Math.cos(suntime) * 5
    sun.current.position.z = Math.sin(suntime)
    sun.current.intensity = Math.cos(suntime) * 1.4
    if (Math.cos(suntime) < 0) {
      sun.current.intensity = 0
    }
  })

  return (
    <>
      <directionalLight
        ref={sun}
        position={[1, 0, 0]}
        intensity={0}
        castShadow={true}
      />
      <PointLight position={[2.5, 2, -1.5]} />
      <PointLight position={[-1, 1, 3.5]} />
      <PointLight position={[-2.5, 3, -3]} />
      <primitive object={forestModel.scene} />
    </>
  )
}

export default ForestModel

const PointLight = ({ position }) => {
  const pointLight = useRef()

  //   useHelper(pointLight, PointLightHelper, 0.5, "green")

  const nightLight = null

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime()
    const suntime = elapsedTime * 0.5
    if (Math.cos(suntime) < 0)
      pointLight.current.intensity = nightLight
        ? nightLight
        : -Math.cos(suntime) * 2.5
  })

  return (
    <pointLight
      ref={pointLight}
      intensity={0}
      color={"lightBlue"}
      position={position}
      distance={3}
      decay={1}
      // castShadow={true}
    />
  )
}
