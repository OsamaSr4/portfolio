import React from 'react'
import { OrbitControls, Environment } from '@react-three/drei'
import { MeshDistortMaterial, Sphere } from '@react-three/drei'

export default function Background3D() {
  return (
    <React.Suspense fallback={null}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[2, 5, 5]} intensity={1} />
      <Sphere args={[1.5, 64, 64]} scale={[3.2, 2.2, 3.2]} position={[0,0,0]}>
        <MeshDistortMaterial color="#ffffff" roughness={0.2} metalness={0.5} distort={0.35} speed={2} />
      </Sphere>
      <OrbitControls enableZoom={false} enablePan={false} rotateSpeed={0.4} />
      <Environment preset="sunset" />
    </React.Suspense>
  )
}
