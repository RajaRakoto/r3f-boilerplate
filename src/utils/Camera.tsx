import { useThree } from '@react-three/fiber'

export function Controls() {
  const {
    camera,
    gl: { domElement },
  } = useThree()

  return <orbitControls args={[camera, domElement]} />
}
