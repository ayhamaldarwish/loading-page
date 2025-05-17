import { ContactInfo, SocialLink } from '../components/types';
import { Briefcase, Smile, Award, Lightbulb, Star, Shield } from 'lucide-react';

// Contact Information
export const contactInfo: ContactInfo[] = [
  {
    title: "Phone",
    content: "+1 (555) 123-4567",
    icon: "phone",
    bgColor: "bg-blue-100",
    hoverColor: "hover:bg-blue-200",
    iconColor: "text-blue-600"
  },
  {
    title: "Email",
    content: "info@stellarglaze.com",
    icon: "mail",
    bgColor: "bg-purple-100",
    hoverColor: "hover:bg-purple-200",
    iconColor: "text-purple-600"
  },
  {
    title: "Location",
    content: "123 Business Ave, Suite 100",
    icon: "map-pin",
    bgColor: "bg-green-100",
    hoverColor: "hover:bg-green-200",
    iconColor: "text-green-600"
  },
  {
    title: "Hours",
    content: "Mon-Fri: 9AM - 6PM",
    icon: "clock",
    bgColor: "bg-orange-100",
    hoverColor: "hover:bg-orange-200",
    iconColor: "text-orange-600"
  }
];

// Social Media Links
export const socialLinks: SocialLink[] = [
  {
    name: "Twitter",
    url: "https://twitter.com",
    icon: "twitter"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com",
    icon: "linkedin"
  },
  {
    name: "Facebook",
    url: "https://facebook.com",
    icon: "facebook"
  },
  {
    name: "Instagram",
    url: "https://instagram.com",
    icon: "instagram"
  }
];

// Navigation Items
export const navItems = [
  { id: "hero", name: "Home", href: "#home" },
  { id: "about", name: "About", href: "#about" },
  { id: "services", name: "Services", href: "#services" },
  { id: "contact", name: "Contact", href: "#contact" }
];

// Stats for About Section
export const stats = [
  { id: "years", label: "Years Experience", value: "10+", icon: Award },
  { id: "projects", label: "Projects Completed", value: "100+", icon: Briefcase },
  { id: "clients", label: "Happy Clients", value: "300+", icon: Smile },
];

// Company Values
export const values = [
  {
    id: "innovation",
    title: "Innovation",
    description: "We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.",
    icon: Lightbulb,
    gradient: "from-teal-400 to-blue-500"
  },
  {
    id: "excellence",
    title: "Excellence",
    description: "We strive for excellence in everything we do, ensuring the highest quality in our deliverables.",
    icon: Star,
    gradient: "from-blue-400 to-purple-500"
  },
  {
    id: "integrity",
    title: "Integrity",
    description: "We maintain the highest standards of integrity in all our interactions and business practices.",
    icon: Shield,
    gradient: "from-purple-400 to-pink-500"
  }
];
