
import React from 'react';
import { 
  Settings, 
  Wind, 
  Droplets, 
  Wrench, 
  ShieldCheck, 
  Cpu, 
  Activity, 
  Package, 
  Users, 
  Factory,
  CheckCircle2,
  HardHat,
  Zap,
  Leaf
} from 'lucide-react';
import { NavItem, ServiceItem, GalleryItem } from './types';

export const NAV_LINKS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Asset Lifecycle', href: '#lifecycle' },
  { label: 'Allied Services', href: '#allied' },
  { label: 'Contact', href: '#contact' },
];

export const CORE_SERVICES: ServiceItem[] = [
  {
    title: 'Dry Cooling Solutions',
    description: 'Specializing in ACHE, AFC, FFC, and ACC systems with high thermal performance and energy efficiency.',
    icon: <Wind className="w-8 h-8 text-blue-500" />,
    tags: ['ACHE', 'AFC', 'ACC', 'APH']
  },
  {
    title: 'Projects & Field Services',
    description: 'End-to-end site services from modular assembly to lifecycle support and turnaround management.',
    icon: <Settings className="w-8 h-8 text-blue-500" />,
    tags: ['Installation', 'Commissioning', 'Shutdowns']
  },
  {
    title: 'Maintenance & Overhauls',
    description: 'Precision maintenance of rotating equipment including fans, motors, gearboxes, and vibration analysis.',
    icon: <Wrench className="w-8 h-8 text-blue-500" />,
    tags: ['Overhaul', 'Alignment', 'Dynamic Balancing']
  },
  {
    title: 'Performance Audits',
    description: 'Data-driven on-site energy audits and CFD modeling to identify bottlenecks and optimize thermal processes.',
    icon: <Activity className="w-8 h-8 text-blue-500" />,
    tags: ['Energy Audit', 'CFD Modeling', 'Analysis']
  },
  {
    title: 'Inspection & Testing',
    description: 'Comprehensive NDT services (RT, UT, MPT, DPT) to ASNT Level II standards for asset integrity.',
    icon: <ShieldCheck className="w-8 h-8 text-blue-500" />,
    tags: ['NDT', 'QA/QC', 'Compliance']
  },
  {
    title: 'Spare Parts Supply',
    description: 'Original and OEM-equivalent components ensuring system compatibility and long service life.',
    icon: <Package className="w-8 h-8 text-blue-500" />,
    tags: ['Fan Hubs', 'Belts', 'Bearings', 'Pulleys']
  }
];

export const INDUSTRIES = [
  { name: 'Oil & Gas', image: 'https://picsum.photos/seed/oil/800/600' },
  { name: 'Refinery', image: 'https://picsum.photos/seed/refinery/800/600' },
  { name: 'Petrochemical', image: 'https://picsum.photos/seed/petro/800/600' },
  { name: 'Steel Plants', image: 'https://picsum.photos/seed/steel/800/600' },
  { name: 'Power Sector', image: 'https://picsum.photos/seed/power/800/600' },
  { name: 'LNG Terminals', image: 'https://picsum.photos/seed/lng/800/600' },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { title: 'Air Cooler Tube Bundles', category: 'Products', imageUrl: 'https://picsum.photos/seed/gallery1/600/400' },
  { title: 'Fin Fan Coolers Installation', category: 'Field Works', imageUrl: 'https://picsum.photos/seed/gallery2/600/400' },
  { title: 'ACHE Maintenance', category: 'Maintenance', imageUrl: 'https://picsum.photos/seed/gallery3/600/400' },
  { title: 'Rotating Equipment Alignment', category: 'Technical', imageUrl: 'https://picsum.photos/seed/gallery4/600/400' },
  { title: 'PEB Steel Fabrication', category: 'Allied', imageUrl: 'https://picsum.photos/seed/gallery5/600/400' },
  { title: 'Bellow Expansion Joints', category: 'Fabrication', imageUrl: 'https://picsum.photos/seed/gallery6/600/400' },
];

export const ALLIED_SERVICES = [
  { title: 'Heavy Fabrication', desc: 'Bellow Expansion Joints (CS/SS), Pressure Parts, and Skid Modules.', icon: <Factory className="w-6 h-6" /> },
  { title: 'Structural Steel', desc: 'PEB solutions for warehouses and factories with customized engineering.', icon: <Zap className="w-6 h-6" /> },
  { title: 'Piping Works', desc: 'High-pressure piping modifications and fire-fighting system installation.', icon: <Droplets className="w-6 h-6" /> },
  { title: 'Technical Staffing', desc: 'Specialized supply of ACHE Engineers, fitters, and certified welders.', icon: <Users className="w-6 h-6" /> },
];
