import { LucideIcon } from 'lucide-react';

export interface ContactInfo {
  title: string;
  content: string;
  icon: "phone" | "mail" | "map-pin" | "clock";
  bgColor: string;
  hoverColor: string;
  iconColor: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface NavItem {
  id: string;
  name: string;
  href: string;
}

export interface Stat {
  id: string;
  label: string;
  value: string;
  icon: LucideIcon;
}

export interface Value {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
} 