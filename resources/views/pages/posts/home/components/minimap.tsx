import * as THREE from 'three'
import { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { useScroll } from '@react-three/drei'

import useStore from '../store'

const damp = THREE.MathUtils.damp
const material = new THREE.LineBasicMaterial({ color: 'white' })
const geometry = new THREE.BufferGeometry().setFromPoints([
  new THREE.Vector3(0, -0.5, 0),
  new THREE.Vector3(0, 0.5, 0),
])

export function Minimap() {
  const ref = useRef()
  const scroll = useScroll()
  const projects = useStore((state) => state.projects)
  const { height } = useThree((state) => state.viewport)
  useFrame((state, delta) => {
    ref.current.children.forEach((child, index) => {
      const y = scroll.curve(
        index / projects.length - 1.5 / projects.length,
        4 / projects.length,
      )
      child.scale.y = damp(child.scale.y, 0.1 + y / 6, 8, delta)
    })
  })
  return (
    <group ref={ref}>
      {projects.map((_, i) => (
        <line
          key={i}
          geometry={geometry}
          material={material}
          position={[i * 0.06 - projects.length * 0.03, -height / 2 + 0.9, 0]}
        />
      ))}
    </group>
  )
}
