# GOOD CONNECT Website Design Guidelines

## Design Approach
**GOLVOYA Brand Alignment**: Following the clean, minimal, and sophisticated design philosophy of https://golvoya.com/ - emphasizing whitespace, readability, and subtle elegance while maintaining GOOD CONNECT's service-focused identity.

## Core Design Principles
- **Simplicity & Clarity**: Clean layouts with generous whitespace, minimal visual noise
- **Professional Elegance**: Sophisticated without being flashy, trustworthy and approachable
- **Content-First**: Typography and information hierarchy take center stage
- **Subtle Interactions**: Gentle animations, soft transitions, refined hover states

## Color Palette

### Primary Colors
- **Deep Navy**: 220 40% 20% (Primary text and headings - #1a2942)
- **Soft Navy**: 220 30% 30% (Secondary elements - #2d3e57)
- **Warm Orange**: 27 85% 55% (Accent/CTA - #F28C3D) - Used sparingly for important CTAs only

### Neutrals & Backgrounds
- **Pure White**: 0 0% 100% (Primary background)
- **Off White**: 0 0% 98% (Subtle section dividers)
- **Light Gray**: 0 0% 96% (Card backgrounds, alternating sections)
- **Medium Gray**: 220 10% 50% (Secondary text)
- **Dark Gray**: 220 15% 25% (Body text)

### Usage Strategy
- White: Primary background, maximum whitespace
- Deep Navy: Headings, primary text, navigation
- Soft Navy: Subheadings, icons, borders
- Warm Orange: CTA buttons ONLY - used as accent, not overwhelming
- Light Gray: Subtle section backgrounds (alternating)
- Generous spacing between all elements

## Typography

### Font Families
- **Primary**: Noto Sans JP (Japanese content, all UI)
- **Secondary**: Inter (Numbers, metrics, Latin text)

### Type Scale (Refined)
- **Hero Headline**: 3xl to 5xl (44-56px desktop, 32-36px mobile), bold, letter-spacing: -0.02em
- **Section Headers**: xl to 3xl (28-36px desktop, 22-26px mobile), semibold
- **Subheadings**: lg to xl (18-24px), medium weight
- **Body Text**: base (16px), regular weight, leading-relaxed
- **Small Text**: sm (14px) for captions

### Line Height & Spacing
- Headlines: 1.3
- Body text: 1.8 (generous for readability)
- Paragraph spacing: mb-6 to mb-8
- Letter spacing: Slightly tighter for headlines (-0.02em)

## Layout System

### Spacing Primitives (Generous)
**Increased Whitespace**: 8, 12, 16, 24, 32, 40, 48, 64
- Component padding: p-8 to p-16
- Section padding: py-20 to py-32 (desktop), py-16 to py-20 (mobile)
- Card gaps: gap-12 to gap-16
- Element margins: mb-8, mb-12, mb-16
- Container spacing: Wider gutters (px-6 to px-12)

### Container Strategy
- **Max Width**: max-w-7xl for main content
- **Narrow Content**: max-w-3xl for text-heavy sections (tighter for better readability)
- **Full Width Sections**: w-full with generous padding
- **Grid Systems**: 
  - 3-4 columns maximum (avoid crowding)
  - Generous gap-12 to gap-16 between grid items
  - Single column on mobile with ample spacing

## Component Library

### Navigation
- Minimal fixed header, white background
- Subtle shadow only on scroll (shadow-sm)
- Logo: Left, simple wordmark
- Menu: Right-aligned, clean text links (no underlines)
- CTA button: Soft orange, rounded-lg, subtle hover effect
- Mobile: Simple slide-in menu, white background

### Buttons
- **Primary CTA**: Warm orange (#F28C3D), white text, rounded-lg, px-8 py-3.5
- **Secondary**: White background, dark gray text, border-2, rounded-lg
- **Hover Effects**: Subtle brightness adjustment (no scale), opacity: 0.9
- **Spacing**: Generous padding, comfortable click targets
- **Typography**: Medium weight, 16px

### Cards
- White background, very subtle shadow (shadow-sm)
- Hover: Minimal shadow increase (shadow-md)
- Padding: p-8 to p-12 (generous internal spacing)
- Border radius: rounded-xl
- Border: 1px solid with very light gray (optional)
- Icons: 40px size, soft colors

### Forms
- Input fields: border-gray-200, focus:border-navy, rounded-md, py-3 px-4
- Labels: Above inputs, medium weight, mb-2, dark gray
- Field spacing: mb-8 (generous)
- Submit button: Orange CTA, full-width on mobile
- Minimal styling, maximum clarity

### Accordions (FAQ)
- Clean, borderless design
- Question: Semibold, navy text, flex with simple chevron
- Answer: Smooth slide-down, gray text, pl-6 with subtle left border
- Hover: Very subtle background (bg-gray-50)
- Spacing: py-6 between items

## Section-Specific Design

### Hero Section (70vh - More compact)
- **Background**: White OR soft image with minimal overlay (20-30% opacity)
- **Content**: Center-aligned, maximum whitespace
- **Main Copy**: Deep navy text, 3xl-5xl, bold, minimal animation
- **Sub Copy**: Medium gray, xl, regular weight
- **CTA**: Orange button (warm tone), px-10 py-4, soft hover
- **Spacing**: Generous mb-8 to mb-12 between elements

### Service Introduction
- White or off-white background
- 3-4 column layout (avoid crowding)
- Icons: Minimal line icons, soft navy color, 48px
- Card style: Borderless or subtle border, generous padding
- Text: Navy headings, medium gray descriptions
- Spacing: Large gaps between cards (gap-12)

### Strengths Section
- White background
- Section header: Left or center-aligned, deep navy
- Grid: 3-4 columns, generous spacing
- Cards: Minimal design, icon + text, no heavy decorations
- Hover: Subtle shadow, no scale
- Number badges: Small, soft colors, not overwhelming

### Case Studies
- Off-white or light gray background
- 2-3 column layout with ample spacing
- Minimal card design
- Metrics: Medium-sized numbers in soft orange
- Description: Clean typography, good line height
- Company info: Subtle, not dominant

### Pricing Section
- White background
- Clean table or card layout
- Prices: Orange for key numbers, not too large
- Features: Simple checkmarks, good spacing
- CTA: Orange button below pricing

### Contact Form Section
- White or off-white background
- Form: White container, subtle shadow
- Orange submit button
- Clean, minimal styling
- Success message: Inline, subtle

### Footer
- Off-white or light gray background
- Dark gray text (not black)
- Simple layout, good spacing
- Copyright: Small, lighter gray

## Images

### Hero Image
Minimal usage - if used, apply very subtle overlay (20-30% opacity) for text readability. Prefer clean white background with strong typography.

### Icons
- Line icons from lucide-react
- Soft navy or medium gray color
- 40-48px size
- Minimal, not decorative

### Decorative Elements
- Avoid heavy patterns
- Subtle geometric shapes if needed (5-10% opacity)
- Generous whitespace is the primary design element

## Animations & Interactions

### Scroll Animations
- Subtle fade-in only (no slide-up)
- Smooth, gentle transitions (300-400ms)
- Minimal movement

### Hover States
- Buttons: Brightness adjustment, no scale
- Cards: Very subtle shadow increase
- Links: Simple underline or color change
- All transitions: 200-300ms ease

### Smooth Behaviors
- Smooth scroll to form sections
- Gentle accordion expand/collapse
- Minimal, purposeful animations

## Responsive Breakpoints
- Mobile: < 768px (single column, generous spacing maintained)
- Tablet: 768px - 1024px (2 columns where applicable)
- Desktop: > 1024px (3-4 columns maximum)

## Accessibility & Quality
- Color contrast ratio: Minimum 4.5:1
- Focus states: 2px soft orange outline
- Alt text in Japanese
- ARIA labels for icon-only buttons
- Clear, friendly error messages

## Key Differences from Previous Design
1. **More Whitespace**: Doubled spacing throughout
2. **Softer Colors**: Less saturated navy and orange
3. **Minimal Decorations**: Focus on content, not visual effects
4. **Subtle Interactions**: No aggressive animations or hover effects
5. **Clean Typography**: Content-first approach
6. **Professional Simplicity**: Elegant without being flashy
