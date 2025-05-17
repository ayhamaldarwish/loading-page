import React from "react";

export const Hero = () => {
  return (
    <section id="hero" className="relative bg-black text-white overflow-hidden min-h-[700px] flex items-center justify-center py-20">
      {/* Background Gradient Effect */}
      <div className="absolute inset-0  " />
      
      <div className="container mx-auto px-4 text-center relative">
        <div className="flex flex-col items-center justify-center">
          {/* Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Innovative Software Solutions
          </h1>
          
          {/* Description */}
          <p className="text-lg text-gray-300 mb-10 max-w-xl mx-auto leading-relaxed">
            Discover a sleek, modern experience with elegant transition and a bold dark theme.
          </p>
          
          {/* Button */}
          <div className="flex gap-4">
            <button className="px-8 py-3 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              Get Started
            </button>
            <button className="px-8 py-3 border-2 border-teal-500 text-teal-400 font-semibold rounded-full hover:bg-teal-500/10 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
