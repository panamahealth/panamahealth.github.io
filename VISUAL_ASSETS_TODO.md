# Visual Assets To-Do List

This document lists the visual assets that need to be sourced or created for the PanamaHealth landing page.

## ✅ Completed

- [x] Logo (PanamaHealth network visualization logo)
- [x] Favicon (matching the logo design with connected nodes)
- [x] Icons (using Tabler Icons from the template - already included)

## 📋 Remaining Tasks

### 1. Hero Section Background Image

**Status:** TO DO
**Priority:** HIGH
**Location:** Should replace the background in the Hero section on index.astro

**Specifications:**
- **Dimensions:** 1920x1080px (landscape)
- **File size:** Optimize to <200KB using Squoosh.app
- **Format:** WebP with JPG fallback
- **Style:** Abstract data visualization, healthcare network, glowing nodes

**Sourcing Options:**

#### Option A: Unsplash (Recommended - Free)
1. Visit https://unsplash.com
2. Search for keywords:
   - "data network blue"
   - "abstract technology cyan"
   - "healthcare network visualization"
   - "connected data nodes"
3. Look for images with:
   - Blue/cyan color palette
   - Abstract/modern aesthetic
   - Network or connectivity theme
4. Download high-resolution version
5. Add cyan-to-blue gradient overlay in Figma or Canva:
   - Overlay opacity: 40-60%
   - Gradient: #29D4D4 to #0168D0

#### Option B: AI-Generated (Free with Google Gemini/Nano Banana)
Use prompt:
```
"Abstract healthcare data network visualization, interconnected glowing nodes,
flowing data lines, cyan and blue gradient color scheme (#29D4D4 to #0168D0),
modern tech aesthetic, soft lighting, professional, wide banner format,
futuristic medical technology"
```

**Recommended Unsplash Images (direct searches):**
- https://unsplash.com/s/photos/data-network
- https://unsplash.com/s/photos/network-abstract-blue
- https://unsplash.com/s/photos/connected-technology

**Where to place the image:**
1. Save image to: `src/assets/images/hero-bg.jpg` or `hero-bg.webp`
2. Update `src/pages/index.astro` Hero component:
   ```astro
   <Hero
     image={{ src: '~/assets/images/hero-bg.jpg', alt: 'Healthcare network visualization' }}
     ...
   ```

### 2. Optional: "How It Works" Network Diagram

**Status:** OPTIONAL (nice to have)
**Priority:** LOW
**Location:** Could be added to the Steps section

**Specifications:**
- **Dimensions:** 800x600px
- **File size:** <100KB
- **Format:** SVG (preferred) or PNG
- **Style:** Simple network diagram showing federated learning flow

**Creation Options:**

#### Option A: Figma (Free)
1. Create simple network diagram:
   - 3-5 nodes representing hospitals/labs
   - Central aggregation node
   - Arrows showing model distribution and insight collection
2. Use PanamaHealth color scheme (cyan #29D4D4, blue #0168D0)
3. Export as SVG

#### Option B: draw.io (Free)
1. Visit https://app.diagrams.net/
2. Create flowchart with:
   - Circles for nodes (hospitals, labs, pharma)
   - Arrows showing AI model flow
   - Central node for aggregation
3. Export as SVG or PNG

**Where to place the diagram:**
1. Save to: `src/assets/images/federated-learning-diagram.svg`
2. Can be added to Steps section or Content section in index.astro

### 3. Social Media / OpenGraph Image

**Status:** TO DO (before launch)
**Priority:** MEDIUM
**Location:** Update in config.yaml

**Specifications:**
- **Dimensions:** 1200x628px (OpenGraph standard)
- **File size:** <300KB
- **Format:** PNG or JPG
- **Content:** Logo + tagline + background

**Creation:**
1. Use Canva (free) or Figma
2. Template:
   - Background: Gradient (cyan to blue) or hero image
   - Center: PanamaHealth logo
   - Below logo: "Connecting oceans of intelligence, not data"
   - Clean, professional design
3. Export as PNG
4. Optimize with Squoosh.app to <300KB
5. Save to: `src/assets/images/og-image.png`
6. Update in `src/config.yaml`:
   ```yaml
   metadata:
     openGraph:
       images:
         - url: '~/assets/images/og-image.png'
           width: 1200
           height: 628
   ```

## 🛠️ Tools Needed

1. **Image Compression:** Squoosh.app (https://squoosh.app/)
2. **Image Overlay/Editing:** Figma (https://figma.com - free) or Canva (https://canva.com - free tier)
3. **Stock Photos:** Unsplash (https://unsplash.com - free)
4. **Diagrams:** draw.io (https://app.diagrams.net/ - free) or Figma
5. **AI Generation (optional):** Google Gemini with Nano Banana (free tier)

## 📝 Notes

- The template already includes Tabler Icons for all UI icons (shields, locks, hospitals, etc.)
- Health Icons library is available at https://healthicons.org/ if you need additional medical-specific icons
- All images should be optimized to maintain fast page load times (<2 seconds)
- Use WebP format for better compression, with JPG fallback for older browsers

## ✅ Checklist Before Launch

- [ ] Hero background image added and optimized
- [ ] OpenGraph social media image created
- [ ] All images compressed to appropriate file sizes
- [ ] Images have proper alt text for accessibility
- [ ] Test page load time is <2 seconds
