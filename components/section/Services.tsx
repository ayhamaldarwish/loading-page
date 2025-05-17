import React from 'react'
import Image from "next/image";
// Import placeholder icons (replace with actual icons if needed)
import { Globe, Smartphone, Monitor, Smile, TrendingUp, Headset, Code, Database, Server } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface Service {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
}

interface Feature {
  id: number;
  icon: LucideIcon;
  text: string;
  description: string;
}

// Placeholder data for services
const services: Service[] = [
  { id: 1, icon: Globe, title: "Web Development", description: "Modern web applications" },
  { id: 2, icon: Smartphone, title: "Mobile Apps", description: "iOS & Android solutions" },
  { id: 3, icon: Monitor, title: "Desktop Apps", description: "Cross-platform software" },
  { id: 4, icon: Code, title: "Custom Software", description: "Tailored solutions" },
  { id: 5, icon: Database, title: "Database Design", description: "Optimized data solutions" },
  { id: 6, icon: Server, title: "Cloud Services", description: "Scalable infrastructure" },
];

// Placeholder data for features
const features: Feature[] = [
  { id: 1, icon: Globe, text: "Custom Software Solutions", description: "Tailored to your business needs" },
  { id: 2, icon: Smile, text: "Expert Development Team", description: "Skilled professionals" },
  { id: 3, icon: Headset, text: "24/7 Technical Support", description: "Always here to help" },
];

export const Services = () => {
  return (
    <section id="services" className="relative bg-black text-white py-24">
      <div className="container mx-auto px-4">
        {/* Services Provided Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Services we provide
          </h2>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
            Comprehensive software solutions tailored to your business needs
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {services.map(service => (
              <div 
                key={service.id} 
                className="group flex flex-col items-center justify-center p-6 bg-gray-900/50 backdrop-blur-sm rounded-xl shadow-lg transition-all duration-300 hover:bg-gray-800/80 hover:shadow-xl hover:-translate-y-1 cursor-pointer border border-gray-800 hover:border-teal-500/50"
              >
                <div className="p-3 bg-gray-800 rounded-lg mb-4 group-hover:bg-teal-500/10 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-teal-400 group-hover:text-teal-300 transition-colors duration-300" />
                </div>
                <h3 className="text-sm font-semibold text-gray-200 text-center mb-2 group-hover:text-white transition-colors duration-300">{service.title}</h3>
                <p className="text-xs text-gray-400 text-center group-hover:text-gray-300 transition-colors duration-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Leading Platform Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-24">
          {/* Illustration */}
          <div className="flex justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-purple-500/20 rounded-2xl blur-3xl"></div>
            <div className="relative z-10 rounded-2xl shadow-2xl overflow-hidden">
              <Image 
                src="/images/hero-CR2JtPul.png"
                alt="Software Development Illustration"
                width={500}
                height={500}
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Features List */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Your Trusted Software Development Partner
            </h2>
            <p className="text-gray-400 text-lg mb-12">
              We deliver innovative software solutions that drive business growth and digital transformation
            </p>
            <div className="space-y-6">
              {features.map(feature => (
                <div 
                  key={feature.id} 
                  className="group flex items-start p-6 bg-gray-900/50 backdrop-blur-sm rounded-xl shadow-lg transition-all duration-300 hover:bg-gray-800/80 hover:shadow-xl border border-gray-800 hover:border-teal-500/50"
                >
                  <div className="p-3 bg-gray-800 rounded-lg mr-4 group-hover:bg-teal-500/10 transition-colors duration-300">
                    <feature.icon className="w-6 h-6 text-teal-400 group-hover:text-teal-300 transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-200 group-hover:text-white transition-colors duration-300">{feature.text}</h3>
                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

