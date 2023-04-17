import { useRef } from 'react'

/* libs */
import { Mesh } from 'three'
import { useFrame } from '@react-three/fiber'

/* types */
import { T_Box } from '../types'

// ===========================================

export function Box({ color }: T_Box) {
  // eslint-disable-next-line
  const boxRef = useRef<Mesh>(null!)

  useFrame(() => {
    boxRef.current.rotation.x += 0.005
    boxRef.current.rotation.y += 0.01
  })

  return (
    <mesh ref={boxRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} wireframe />
    </mesh>
  )
}

export function Sphere({ color }: T_Box) {
  return (
    <mesh>
      <sphereGeometry args={[1]} />
      <meshStandardMaterial color={color} wireframe />
    </mesh>
  )
}
