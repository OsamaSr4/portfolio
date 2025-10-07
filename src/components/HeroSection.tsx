import React from 'react'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl sm:text-6xl font-bold leading-tight mb-4"
      >
        👋 Hi, I'm <span className="text-accent">Osama Iqbal</span>
      </motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-lg text-gray-300 max-w-2xl">
        iOS Developer · Swift · SwiftUI · Combine · UIKit — I build beautiful, high-performance apps with attention to detail.
      </motion.p>

      <div className="mt-8 flex gap-4">
        <a href="#projects" className="px-6 py-3 rounded-full font-semibold bg-accent text-black hover:opacity-90 transition glass">View My Work</a>
        <a href="https://github.com/OsamaSr4" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full font-semibold border border-white/10 glass hover:opacity-90">GitHub</a>
      </div>
    </section>
  )
}
