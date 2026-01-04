
// Fix: Added React import to resolve namespace errors for React.ReactNode
import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  tags?: string[];
}

export interface GalleryItem {
  title: string;
  category: string;
  imageUrl: string;
}

export interface ComponentProps {
  children?: React.ReactNode;
  className?: string;
}