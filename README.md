# Tech Evolution Portfolio

A refined, scroll-driven portfolio landing page built with Next.js that tells the story of your technology evolution through intentional design and smooth animations.

## 🎨 Design Philosophy

- **Refined Minimalism**: Clean, sophisticated aesthetic with generous white space
- **Intentional Motion**: Smooth, purposeful animations using Framer Motion
- **Typography-First**: Beautiful Cormorant Garamond display font paired with system sans-serif
- **Scroll Storytelling**: Progressive reveal of your evolution as users scroll

## 🚀 Tech Stack

- **Next.js 14** - App Router with TypeScript
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations and scroll interactions
- **CSS Variables** - Theme management per section

## 📁 Project Structure

```
tech-evolution-portfolio/
├── app/
│   ├── page.tsx          # Main landing page
│   ├── layout.tsx        # Root layout with metadata
│   └── globals.css       # Global styles and utilities
├── components/
│   ├── Hero.tsx          # Opening section
│   ├── Intro.tsx         # Introduction to the concept
│   ├── EraSection.tsx    # Individual era showcase
│   ├── VisualTransition.tsx  # Transition animation
│   ├── Philosophy.tsx    # Your principles
│   ├── CurrentStack.tsx  # Present-day stack
│   └── CTA.tsx          # Final call-to-action
└── data/
    └── techEras.ts       # Content and data
```

## 🛠 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

### Build for Production

```bash
npm run build
npm start
```

## ✨ Key Features

### 1. Hero Section
- Large, impactful typography with "This is not my portfolio. This is my evolution."
- Subtle grain overlay effect
- Scroll indicator

### 2. Tech Evolution Timeline
- Four distinct eras of your development journey
- Scroll-triggered animations
- Background transitions per era
- Clean presentation of technologies

### 3. Visual Transition
- Dark section with morphing geometric elements
- Parallax scroll effects
- Smooth opacity and scale transformations

### 4. Philosophy Section
- High-contrast typography
- Your core principles displayed prominently
- Minimal, focused design

### 5. Current Stack
- Principle-based approach (not just logo listing)
- Hover interactions on cards
- Clean grid layout

### 6. CTA
- Subtle hover animation
- Professional, non-aggressive call-to-action

## 🎨 Customization

### Edit Your Content

Modify `/data/techEras.ts` to update:
- Your technology eras
- Philosophy statements
- Current stack principles

### Adjust Styling

- **Colors**: Edit CSS variables in `/app/globals.css`
- **Typography**: Change fonts in `/app/layout.tsx` and `tailwind.config.ts`
- **Animations**: Adjust Framer Motion settings in individual components

### Color Scheme

```css
--bg-primary: #FAFAFA (off-white)
--bg-secondary: #0E0E0E (deep black)
--text-primary: #0E0E0E
--text-secondary: #FAFAFA
--accent: #71717A (zinc-subtle)
```

## 📱 Responsive Design

- Mobile-first approach
- Responsive typography scaling
- Optimized layouts for all screen sizes
- Touch-friendly interactions

## ♿ Accessibility

- Semantic HTML structure
- Reduced motion support (`prefers-reduced-motion`)
- Proper heading hierarchy
- ARIA-friendly

## 🎯 Performance

- Next.js App Router for optimal performance
- CSS-based animations where possible
- Lazy loading with Intersection Observer
- Minimal JavaScript bundle

## 📝 Development Notes

### Animation Philosophy
- Subtle and intentional, never flashy
- Scroll-triggered reveals for progressive storytelling
- Smooth transitions using cubic-bezier easing

### Typography System
- Display: Cormorant Garamond (elegant serif)
- Body: System sans-serif (readable, fast)
- Clear hierarchy with size and weight

### Spacing System
- Generous white space
- Consistent vertical rhythm
- Mobile-optimized padding

## 🔧 Customization Tips

1. **Add More Eras**: Simply add new objects to the `techEras` array
2. **Change Theme**: Update CSS variables for instant color scheme changes
3. **Adjust Animations**: Modify duration and delay values in Framer Motion
4. **Add Sections**: Create new components following the existing pattern

## 📄 License

Feel free to use this as a template for your own portfolio!

---

Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion
