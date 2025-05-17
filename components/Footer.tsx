'use client';
import Link from "next/link";
import { Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const footerNavItems = [
    { name: "Home", href: "/#hero" },
    { name: "About", href: "/#about-us" },
    { name: "Services", href: "/#services" },
    { name: "Contact", href: "/#contact" },
];

const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Linkedin, href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/" className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent hover:opacity-90 transition-opacity duration-300">
              Stellar Glaze
            </Link>
            <p className="mt-4 text-sm max-w-xs leading-relaxed">
              Innovative software solutions to build your digital future with excellence and passion.
            </p>
          </div>

          {/* Footer Navigation */}
          <div>
             <h4 className="text-lg font-semibold text-white mb-6 text-center md:text-left">Quick Links</h4>
             <nav className="flex flex-col items-center md:items-start space-y-3">
                {footerNavItems.map((item) => (
                  <Link 
                    key={item.name}
                    href={item.href}
                    className="text-sm font-medium hover:text-white transition-colors duration-300 relative group"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-400 group-hover:w-full transition-all duration-300"/>
                  </Link>
                ))}
             </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 text-center md:text-left">Contact Us</h4>
            <div className="flex flex-col items-center md:items-start space-y-3">
              <p className="flex items-center text-sm hover:text-white transition-colors duration-300">
                <Mail className="w-4 h-4 mr-2 text-teal-400" /> info@stellarglaze.com
              </p>
              <p className="flex items-center text-sm hover:text-white transition-colors duration-300">
                <Phone className="w-4 h-4 mr-2 text-teal-400" /> +1 123 456 7890
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div>
             <h4 className="text-lg font-semibold text-white mb-6 text-center md:text-left">Follow Us</h4>
             <div className="flex justify-center md:justify-start space-x-4">
                {socialLinks.map((link, index) => (
                    <a 
                        key={index} 
                        href={link.href} 
                        className="text-gray-500 hover:text-teal-400 transition-colors duration-300 transform hover:scale-110"
                    >
                        <link.icon className="w-6 h-6" />
                    </a>
                ))}
             </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 border-t border-gray-800 pt-8 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Stellar Glaze. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

