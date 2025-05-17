import { LucideIcon } from 'lucide-react';

// Navigation Item Type
export interface NavItem {
  id: string;
  name: string;
  href: string;
}

// Contact Information Type
export interface ContactInfo {
  title: string;
  content: string;
  icon: "phone" | "mail" | "map-pin" | "clock";
  bgColor: string;
  hoverColor: string;
  iconColor: string;
}

// Social Media Link Type
export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

// Statistics Type for About Section
export interface Stat {
  id: string;
  label: string;
  value: string;
  icon: LucideIcon;
}

// Company Values Type
export interface Value {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
}

// Service Type
export interface Service {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
}

// Feature Type
export interface Feature {
  id: number;
  icon: LucideIcon;
  text: string;
  description: string;
}

// Form Data Type
export interface ContactFormData {
  fullName: string;
  phone: string;
  email: string;
  message: string;
}
