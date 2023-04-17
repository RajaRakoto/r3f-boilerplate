import React from 'react'

/* libs */
import { Canvas } from '@react-three/fiber'
import { Float, ContactShadows } from '@react-three/drei'

/* models */
import { Box, Sphere } from './models/Mesh'

/* utils */
import { Controls } from './utils/Camera'

/* styles */
import './styles/app.min.css'

// =====================================

function ThreeScene() {
  return (
    <>
      <Canvas>
        <ambientLight />
        <pointLight position={[5, 5, 5]} />
        <axesHelper args={[100]} />
        <Controls />
        <Box color="cyan" />
        <Sphere color="orange" />
        <Float speed={0.5} rotationIntensity={1.5} floatIntensity={2.3}></Float>
        <ContactShadows position={[0, -0.3, 0]} blur={3} scale={15} far={20} />
      </Canvas>
    </>
  )
}

export default function App() {
  return (
    <React.Fragment>
      <div className="scene">
        <ThreeScene />
      </div>
    </React.Fragment>
  )
}
