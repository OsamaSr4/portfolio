import React from 'react'
import { Canvas } from '@react-three/fiber'
import Background3D from './components/Background3D'
import HeroSection from './components/HeroSection'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen relative">
      <Canvas className="fixed inset-0 -z-10">
        <Background3D />
      </Canvas>

      <main className="relative z-10">
        <HeroSection />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}
