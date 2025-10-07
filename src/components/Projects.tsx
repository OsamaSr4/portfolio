import React from 'react'

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl glass hover:scale-[1.02] transition-transform">
            <h3 className="text-xl font-semibold">Weather App 🌤️</h3>
            <p className="text-sm text-gray-300 mt-2">SwiftUI app using async/await and clean architecture.</p>
          </div>
          <div className="p-6 rounded-2xl glass hover:scale-[1.02] transition-transform">
            <h3 className="text-xl font-semibold">Task Tracker ✅</h3>
            <p className="text-sm text-gray-300 mt-2">Productivity app with Core Data and custom widgets.</p>
          </div>
          <div className="p-6 rounded-2xl glass hover:scale-[1.02] transition-transform">
            <h3 className="text-xl font-semibold">Portfolio App 💼</h3>
            <p className="text-sm text-gray-300 mt-2">This portfolio is built with React + TypeScript + Tailwind + Three.js.</p>
          </div>
          <div className="p-6 rounded-2xl glass hover:scale-[1.02] transition-transform">
            <h3 className="text-xl font-semibold">Open Source Contributions</h3>
            <p className="text-sm text-gray-300 mt-2">Sharing reusable components and utilities.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
