# 🎸 Band Website Framework

A modern, configurable Next.js framework for creating stunning band websites in minutes. Built with React 19, TypeScript, and optimized for Queen Claude integration.

## ✨ Features

- **16 Strategic Parameters** - Control 100% of visual brand identity
- **Genre Presets** - EDM/Pop, Indie Rock, Metal/Raw Rock templates
- **Responsive Design** - Mobile-first, works on all devices
- **Performance Optimized** - Fast loading, smooth animations
- **Queen Claude Ready** - AI-powered configuration and customization
- **Developer Friendly** - TypeScript, modern tooling, clear documentation

## 🚀 Quick Start

```bash
# Clone and setup
git clone <this-repository>
cd band-website-framework
npm install

# Configure your band
cp band.config.sample.ts band.config.ts
# Edit band.config.ts with your information

# Add your media assets
# - /public/hero-bg.jpg (hero background)
# - /public/gallery/*.jpg (gallery images)
# - /public/logo.png (your logo)

# Start development
npm run dev
```

Visit `http://localhost:3000` and see your band website come to life! 🎤

## 🎨 Configuration System

### Core Developer Controls (8 Parameters)
The **top 20%** of parameters that drive **80%** of visual impact:

1. **Primary Color Palette** - Brand colors used throughout
2. **Typography Pair** - Heading and body font combinations
3. **Hero Background** - Main hero section styling
4. **Section Background Strategy** - How each section is styled
5. **Animation Intensity** - Overall motion and effects level
6. **Color Temperature** - Warm/cool bias for entire palette
7. **Contrast Level** - Overall contrast across components
8. **Border Radius Scale** - Sharp to rounded aesthetic

### Genre Flexibility (8 Parameters)
Fine-tuning for different music genres:

9. **Particle Effects Density** - Atmospheric elements intensity
10. **Glow/Neon Intensity** - Cyberpunk-style effects
11. **Texture Overlays** - Clean to grungy surface treatments
12. **Motion Speed** - Animation speed scaling
13. **Shadow Intensity** - Depth and drama of shadows
14. **Background Focus** - Image blur effects
15. **Color Saturation** - Vibrancy level
16. **Layout Spacing** - Density of elements

## 🎵 Genre Presets

### EDM/Pop
```typescript
// High energy, neon effects, fast motion
import { edmPopPreset } from './band.config.sample'
```

### Indie Rock
```typescript
// Warm, textured, moderate effects
import { indieRockPreset } from './band.config.sample'
```

### Metal/Raw Rock
```typescript
// Sharp, high contrast, dramatic
import { metalRockPreset } from './band.config.sample'
```

## 📁 Media Assets Required

```
public/
├── hero-bg.jpg              # Hero background (1920x1080+)
├── logo.png                 # Main logo
├── favicon.ico              # Site favicon
├── gallery/
│   ├── gallery-1.jpg        # Gallery images (1200x800)
│   ├── gallery-2.jpg        # 3:2 aspect ratio
│   ├── gallery-3.jpg        # Web-optimized
│   └── gallery-4.jpg        # JPG or WebP
└── videos/                  # Optional background videos
    ├── about-bg-1.mp4       # About section (1920x1080, <5MB)
    └── shows-bg-1.mp4       # Shows section (MP4, H.264)
```

## 🛠 Tech Stack

- **Framework:** Next.js 15.3.5 + React 19
- **Language:** TypeScript 5.9
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion 12.23
- **Database:** Prisma + PostgreSQL (optional)
- **Auth:** NextAuth.js (optional)
- **Icons:** Lucide React

## 👑 Queen Claude Integration

This framework is optimized for Queen Claude's AI-powered design system:

- **Parameter Schema** - Machine-readable configuration
- **Validation Rules** - Automatic conflict detection
- **Genre Mapping** - AI-driven style suggestions
- **Performance Boundaries** - Automated optimization
- **Template System** - Instant genre transformations

Queen Claude can analyze your band's style and automatically configure all 16 parameters for perfect brand alignment.

## 📖 Documentation

- **[Setup Guide](SETUP_GUIDE.md)** - Complete configuration walkthrough
- **[Media Assets Guide](public/MEDIA_ASSETS_GUIDE.md)** - Asset specifications and tips
- **[Parameter Schema](config/parameter-schema.json)** - Complete API reference
- **[Configuration Examples](band.config.sample.ts)** - Real-world examples

## 🎯 Use Cases

### For Bands
- Launch a professional website in under 30 minutes
- Update content and styling without coding
- Genre-specific optimizations for your music style
- Mobile-first responsive design

### For Developers
- Clean, modern codebase with TypeScript
- 16 strategic parameters control everything
- Clear separation of content and styling
- Easy to extend and customize

### For Agencies
- Rapid client delivery (hours not weeks)
- Consistent quality across projects
- Easy maintenance and updates
- Queen Claude automation integration

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload to Netlify
```

### Docker
```bash
docker build -t band-website .
docker run -p 3000:3000 band-website
```

## 📝 Examples

### Color Palette
```typescript
primaryColorPalette: {
  primary: 'amber-900',      // Main brand color
  secondary: 'teal-800',     // Accent color
  accent: 'purple-600',      // CTA highlights
  background: 'black',       // Base background
  surface: 'gray-900'        // Cards/surfaces
}
```

### Typography
```typescript
typographyPair: {
  headingFont: 'Playfair Display',  // Dramatic headings
  bodyFont: 'Source Sans Pro',      // Readable body text
  fontScale: 'spacious'             // More breathing room
}
```

### Genre Transformation
```typescript
// Transform any site from rock to EDM in seconds
genre: {
  particleEffectsDensity: 1.0,     // Maximum effects
  glowIntensity: 0.8,              // Cyberpunk glow
  motionSpeedMultiplier: 1.5,      // Fast animations
  colorSaturation: 'neon'          // Vibrant colors
}
```

## 🤝 Contributing

We welcome contributions! Please see our contributing guidelines and feel free to submit issues and pull requests.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎤 Credits

Built with love for the music community. Special thanks to all the bands and developers who provided feedback during development.

---

**Ready to rock?** 🤘 [Get started with the setup guide](SETUP_GUIDE.md) and have your band website live in minutes!