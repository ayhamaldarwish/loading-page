'use client';
import { useState, useEffect, useRef } from "react";
import { Menu, X, LogIn } from "lucide-react";
import Link from "next/link";
import { navItems } from "../lib/data";
import { NavItem } from "../lib/types";

const NavItemButton: React.FC<{ item: NavItem; isScrolled: boolean; activeSection: string; scrollToSection: (sectionId: string) => void; isMobile?: boolean; }> = ({ item, isScrolled, activeSection, scrollToSection, isMobile = false }) => {
  const baseClasses = `relative font-medium rounded-md transition-all duration-300 ${isMobile ? 'w-full text-left px-4 py-2 text-base' : 'px-3 py-2 text-sm'} ${isMobile ? '' : 'group'}`;
  
  const activeClassesScrolled = isMobile ? 'bg-gray-800 text-blue-400' : 'text-blue-300 bg-gray-700/50';
  const inactiveClassesScrolled = isMobile ? 'text-gray-300 hover:bg-gray-800/70 hover:text-blue-400' : 'text-gray-400 hover:text-blue-300 hover:bg-gray-800/40';
  const activeClassesNotScrolled = isMobile ? 'bg-white/20 text-white' : 'text-white bg-white/20';
  const inactiveClassesNotScrolled = isMobile ? 'text-white/80 hover:bg-white/10 hover:text-white' : 'text-white/80 hover:bg-white/10 hover:text-white';

  const active = activeSection === item.id;

  const currentClasses = isScrolled 
    ? (active ? activeClassesScrolled : inactiveClassesScrolled)
    : (active ? activeClassesNotScrolled : inactiveClassesNotScrolled);

  const handleClick = () => {
    if (item.id === 'hero') {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      scrollToSection(item.id);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`${baseClasses} ${currentClasses}`}
    >
      {item.name}
      {!isMobile && active && (
          <span className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 w-5 h-0.5 rounded-full ${isScrolled ? 'bg-blue-300' : 'bg-white'} transition-all duration-300`} />
      )}
    </button>
  );
};

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    let mounted = true;

    const handleScroll = () => {
      if (mounted) {
        setIsScrolled(window.scrollY > 50);
      }
    };

    const setupObserver = () => {
      if (!observerRef.current) {
        observerRef.current = new IntersectionObserver(
          (entries) => {
            if (!mounted) return;
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveSection(entry.target.id);
              } else if (entry.target.id === 'hero' && window.scrollY < 50) {
                setActiveSection('hero');
              }
            });
          },
          { rootMargin: "-50% 0px -50% 0px" }
        );
      }
    };

    const observeSections = () => {
      try {
        setupObserver();
        const sections = document.querySelectorAll("section[id]");
        if (sections && sections.length > 0 && observerRef.current) {
          sections.forEach((section) => {
            if (section instanceof HTMLElement) {
              observerRef.current?.observe(section);
            }
          });
        }
      } catch (error) {
        console.warn('Error observing sections:', error);
      }
    };

    // Initial setup
    observeSections();

    // Set up scroll listener
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    // Cleanup
    return () => {
      mounted = false;
      window.removeEventListener("scroll", handleScroll);
      if (observerRef.current) {
        const sections = document.querySelectorAll("section[id]");
        sections.forEach((section) => {
          if (section instanceof HTMLElement) {
            observerRef.current?.unobserve(section);
          }
        });
      }
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    try {
      const section = document.getElementById(sectionId);
      if (section instanceof HTMLElement) {
        section.scrollIntoView({ behavior: "smooth" });
        setIsMenuOpen(false);
      }
    } catch (error) {
      console.warn('Error scrolling to section:', error);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-gray-900/90 backdrop-blur-lg shadow-xl border-b border-gray-800"
          : "bg-transparent"}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Always scrolls to top */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className={`text-2xl font-bold transition-colors duration-300 ${isScrolled
                  ? "bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent"
                  : "text-white"}
               hover:opacity-90`}
            >
              Stellar Glaze
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 flex-1 justify-center">
            {navItems.map((item) => (
               <NavItemButton 
                 key={item.id} 
                 item={item} 
                 isScrolled={isScrolled} 
                 activeSection={activeSection} 
                 scrollToSection={scrollToSection} 
               />
            ))}
          </nav>

          {/* Login Button */}
          <div className="hidden md:flex items-center">
            <Link
              href="/login"
              className={`inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 shadow-md  ${isScrolled
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
                  : "bg-white/20 text-white hover:bg-white/30"}
                  `}
            >
              <LogIn className="w-4 h-4 mr-2" />
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md transition-colors duration-300 ${isScrolled
                  ? "text-gray-400 hover:text-blue-400 hover:bg-gray-800/50"
                  : "text-white hover:bg-white/30"}
              `}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Conditional Rendering with CSS Transition */}
      {
        isMenuOpen && (
          <div
            className={`md:hidden border-t border-gray-800/50 overflow-hidden transition-all duration-300 ease-in-out ${isScrolled ? "bg-gray-900/95" : "bg-black/90 backdrop-blur-md"}
            `}
            style={{ maxHeight: isMenuOpen ? '500px' : '0' }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <NavItemButton 
                  key={item.id} 
                  item={item} 
                  isScrolled={isScrolled} 
                  activeSection={activeSection} 
                  scrollToSection={(sectionId) => {
                    scrollToSection(sectionId);
                    setIsMenuOpen(false);
                  }}
                  isMobile={true}
                />
              ))}
              {/* Mobile Login Button */}
              <div className="px-4 py-3">
                <Link
                  href="/login"
                  className={`inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${isScrolled
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
                    : "bg-white/30 text-white hover:bg-white/40"}
                  `}
                >
                  <LogIn className="w-4 h-4 mr-2" />
                  Login
                </Link>
              </div>
            </div>
          </div>
        )
      }
    </header>
  );
}