/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'


export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/images/heart.gltf')
  useFrame((state, delta) => (group.current.rotation.y += 0.01))
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere.geometry}
        material={materials['Material.001']}
      />
    </group>
  )
}

useGLTF.preload('/images/heart.gltf')
