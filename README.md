# VR Technology & Industrial Services

A modern, responsive corporate website for **VR Technology**, a leading provider of Mechanical, Electrical, and Instrumentation (ME&I) services specializing in Dry Cooling & Heat Exchange solutions for critical industrial sectors.

![VR Technology](https://img.shields.io/badge/Industry-Industrial%20Services-blue)
![React](https://img.shields.io/badge/React-19.2.3-61dafb?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-3178c6?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-6.2.0-646cff?logo=vite)

## 🏭 About

VR Technology provides comprehensive engineering solutions for Oil & Gas, Power, and Steel sectors with specialized expertise in:

- **Dry Cooling Solutions** (ACHE, AFC, FFC, ACC systems)
- **Projects & Field Services** (Installation, Commissioning, Shutdowns)
- **Maintenance & Overhauls** (Rotating Equipment, Vibration Analysis)
- **Performance Audits** (Energy Audits, CFD Modeling)
- **Inspection & Testing** (NDT Services to ASNT Level II standards)
- **Spare Parts Supply** (OEM & OEM-equivalent components)

## ✨ Features

- **Modern Design**: Clean, professional UI with smooth animations and transitions
- **Responsive Layout**: Fully optimized for desktop, tablet, and mobile devices
- **Performance Optimized**: Built with Vite for lightning-fast load times
- **SEO Ready**: Semantic HTML structure with proper meta tags
- **Accessible**: WCAG compliant with keyboard navigation support
- **Interactive Components**: Smooth scroll navigation, hover effects, and micro-animations

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.2.3
- **Language**: TypeScript 5.8.2
- **Build Tool**: Vite 6.2.0
- **Styling**: Tailwind CSS (via CDN)
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher recommended)
- **npm** (comes with Node.js)

## 🚀 Getting Started

### Installation

1. **Clone the repository** (or download the project):
   ```bash
   git clone <repository-url>
   cd vr-technology
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

### Development

Run the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

### Build for Production

Create an optimized production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## 📁 Project Structure

```
vr-technology/
├── components/           # React components
│   ├── Contact.tsx      # Contact form section
│   ├── Footer.tsx       # Footer component
│   ├── Gallery.tsx      # Project gallery
│   ├── Hero.tsx         # Hero section
│   ├── Industries.tsx   # Industries served section
│   ├── Navbar.tsx       # Navigation bar
│   ├── SectionHeader.tsx # Reusable section header
│   └── ServiceCard.tsx  # Service card component
├── App.tsx              # Main application component
├── constants.tsx        # Application constants and data
├── types.ts             # TypeScript type definitions
├── index.tsx            # Application entry point
├── index.html           # HTML template
├── vite.config.ts       # Vite configuration
├── tsconfig.json        # TypeScript configuration
├── package.json         # Project dependencies
└── README.md            # This file
```

## 🎨 Key Sections

### 1. **Hero Section**
Eye-catching landing area with company tagline and call-to-action

### 2. **Stats Bar**
Quick access highlights featuring:
- 24/7 Field Support
- Energy & CFD Audit
- Genuine OEM Spares
- ASNT Level II Quality

### 3. **Core Services**
Comprehensive overview of primary service offerings with detailed descriptions

### 4. **Industries Served**
Showcase of key industrial sectors:
- Oil & Gas
- Refinery
- Petrochemical
- Steel Plants
- Power Sector
- LNG Terminals

### 5. **Asset Lifecycle Management**
Strategic solutions for critical infrastructure maintenance

### 6. **Allied Services**
Specialized fabrication and engineering services:
- Heavy Fabrication
- Structural Steel (PEB)
- Piping Works
- Technical Staffing

### 7. **Gallery**
Visual showcase of projects and capabilities

### 8. **Contact Section**
Multi-channel contact information and inquiry form

## 🎯 Core Features

### Smooth Scroll Navigation
All navigation links feature smooth scrolling with proper offset handling for the fixed navbar.

### Responsive Design
The website is fully responsive with breakpoints for:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### Performance Optimization
- Lazy loading for images
- Optimized bundle size
- Fast initial page load
- Minimal render blocking

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for environment-specific configuration:

```env
# Add your environment variables here
VITE_API_URL=your_api_url
```

### Tailwind CSS

The project uses Tailwind CSS via CDN. For production, consider installing Tailwind CSS locally for better performance and customization.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential. All rights reserved by VR Technology & Industrial Services.

## 📞 Contact

**VR Technology & Industrial Services**

For inquiries about services or this website, please visit the contact section on the website.

---

**Built with ❤️ using React, TypeScript, and Vite**
