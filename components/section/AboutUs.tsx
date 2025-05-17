import React from 'react'
import { stats, values } from '../../lib/data'; // Import data from lib
import { Stat, Value } from '../types'; // Import types
// Lucide icons for rendering are imported in lib/data.ts, no need to import here

// Remove local data arrays as they are now in lib/data.ts
// const stats = [...];
// const values = [...];

export const AboutUs = () => {
  return (
    <section id="about" className="relative bg-black text-white py-24">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            About Us
          </h2>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            We are a team of passionate developers and designers dedicated to transforming ideas into digital excellence. With years of experience in the industry, we provide cutting-edge solutions to help your business thrive in the digital age.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat: Stat) => ( // Add type annotation
            <div 
              key={stat.id}
              className="group flex flex-col items-center p-8 bg-gray-900/50 backdrop-blur-sm rounded-xl shadow-lg transition-all duration-300 hover:bg-gray-800/80 hover:shadow-xl border border-gray-800 hover:border-teal-500/50"
            >
              <div className="p-4 bg-gray-800 rounded-lg mb-4 group-hover:bg-teal-500/10 transition-colors duration-300">
                {/* Use the icon component directly from the stat object */}
                <stat.icon className="w-8 h-8 text-teal-400 group-hover:text-teal-300 transition-colors duration-300" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value: Value) => ( // Add type annotation
            <div 
              key={value.id}
              className="group flex flex-col p-8 bg-gray-900/50 backdrop-blur-sm rounded-xl shadow-lg transition-all duration-300 hover:bg-gray-800/80 hover:shadow-xl border border-gray-800 hover:border-teal-500/50"
            >
              <div className="p-4 bg-gray-800 rounded-lg mb-6 group-hover:bg-teal-500/10 transition-colors duration-300 inline-flex">
                {/* Use the icon component directly from the value object */}
                <value.icon className="w-8 h-8 text-teal-400 group-hover:text-teal-300 transition-colors duration-300" />
              </div>
              <h3 className={`text-xl font-semibold mb-4 bg-gradient-to-r ${value.gradient} bg-clip-text text-transparent`}>
                {value.title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

