# GOOD CONNECT Website Design Guidelines

## Design Approach
**Reference-Based Approach**: Inspired by https://client.kakutoku.jp/ for section structure, spacing rhythm, and button treatments, while maintaining original GOOD CONNECT brand identity focused on trust, speed, and results.

## Core Design Principles
- **Trust & Professionalism**: Clean layouts, structured information hierarchy
- **Speed & Action**: Clear CTAs, smooth interactions, minimal friction
- **Results-Driven**: Data visualization, concrete metrics, evidence-based design

## Color Palette

### Primary Colors
- **Navy**: 221 84% 16% (Main brand color - #0B214A)
- **Orange**: 27 100% 50% (Accent/CTA - #FF7A00)

### Neutrals & Backgrounds
- **White**: 0 0% 100% (Primary background)
- **Light Gray**: 0 0% 96% (Section dividers/alternating backgrounds)
- **Dark Gray**: 0 0% 20% (Body text)
- **Medium Gray**: 0 0% 60% (Secondary text)

### Usage Strategy
- Navy: Headers, navigation, footer, primary structural elements
- Orange: CTA buttons, key metrics, important highlights
- Alternating white/light gray backgrounds between sections for visual rhythm
- High contrast for Japanese text readability

## Typography

### Font Families
- **Primary**: Noto Sans JP (Japanese content, UI elements)
- **Secondary**: Inter (numbers, metrics, Latin text)

### Type Scale
- **Hero Headline**: 3xl to 5xl (48-60px desktop, 32-40px mobile), bold
- **Section Headers**: 2xl to 3xl (32-40px desktop, 24-28px mobile), bold
- **Subheadings**: xl to 2xl, semibold
- **Body Text**: base to lg (16-18px), regular weight
- **Small Text**: sm (14px) for captions, fine print

### Line Height
- Headlines: 1.2
- Body text: 1.7 (optimal for Japanese characters)
- Tight spacing for numbers/metrics: 1.1

## Layout System

### Spacing Primitives
**Consistent Tailwind Units**: 4, 8, 12, 16, 20, 24, 32
- Component padding: p-8 to p-12
- Section padding: py-16 to py-24 (desktop), py-12 to py-16 (mobile)
- Card gaps: gap-8 to gap-12
- Element margins: mb-4, mb-8, mb-12

### Container Strategy
- **Max Width**: max-w-7xl for main content
- **Narrow Content**: max-w-4xl for text-heavy sections
- **Full Width Sections**: w-full with inner max-w-7xl container
- **Grid Systems**: 
  - 4 columns for service features (lg:grid-cols-4 md:grid-cols-2)
  - 2-3 columns for case studies (lg:grid-cols-3 md:grid-cols-2)
  - 8 cards in 2-4 column grid for strengths (lg:grid-cols-4 md:grid-cols-2)

## Component Library

### Navigation
- Fixed header with company logo (left), navigation menu (right)
- Mobile: Hamburger menu with slide-in drawer
- Background: White with subtle shadow on scroll
- CTA button in header: Orange background with white text

### Buttons
- **Primary CTA**: Orange background, white text, rounded-lg (px-8 py-4)
- **Secondary**: Navy outline, navy text, rounded-lg
- **Hover Effects**: Color inversion + subtle scale (scale-105)
- **Mobile**: Full width on small screens for primary CTAs

### Cards
- White background with subtle shadow (shadow-md)
- Hover: Lift effect (shadow-lg + -translate-y-1)
- Padding: p-6 to p-8
- Border radius: rounded-xl
- Icons: Top or left-aligned with 40-48px size

### Forms
- Input fields: Border-gray-300, focus:border-orange, rounded-md
- Labels: Above inputs, semibold, mb-2
- Field spacing: mb-6
- Submit button: Full-width orange CTA on mobile

### FAQ Accordion
- Border between items
- Question: Semibold, navy text, flex with chevron icon
- Answer: Slide-down animation, gray text, pl-4 border-l-2 border-orange
- Hover: Background highlight (bg-gray-50)

## Section-Specific Design

### Hero Section (80vh)
- **Background**: Navy gradient (from top-left navy to deeper navy) OR professional office/business photo with navy overlay
- **Content**: Center-aligned
- **Main Copy**: White text, 4xl-5xl, bold, animate fade-in-up
- **Sub Copy**: White/light gray, xl, regular
- **CTA**: Large orange button (px-10 py-5) with arrow icon, smooth scroll to form

### Service Introduction
- Light gray background
- 4-column icon cards (mobile: stacked)
- Icons: Orange stroke, 48px size
- Card text: Navy headings, gray descriptions

### 8 Strengths Section
- White background
- Section header: Center-aligned, navy, with orange underline accent
- 8 cards in responsive grid (4→2→1 columns)
- Each card: Number badge (orange circle), icon, title, description
- Hover: Reveal extended description + scale effect

### Case Studies
- Alternating background (light gray)
- 3-column layout with company initial/logo placeholder
- Metrics: Large Inter numbers in orange
- Description: Short success story text

### Pricing Section
- White background with centered pricing table
- Key prices: Large orange numbers
- Options list: Checkmarks with descriptions
- CTA: "Get Quote" button below pricing

### Contact Form Section
- Navy background (matching hero)
- White form container with shadow-2xl
- Orange submit button
- Success message: Modal or inline confirmation

### Footer
- Dark navy background
- White text with reduced opacity for secondary info
- Company details: Left-aligned
- Copyright: Center or right-aligned

## Images

### Hero Image
**Large hero background image**: Professional Japanese business setting - modern office with team collaboration or confident business person. Should convey trust and professionalism. Apply 40% navy overlay for text readability.

### Service Icons
Use icon library (Heroicons or similar) for:
- Document/list icon (リスト作成)
- Pencil/edit icon (スクリプト設計)  
- Phone icon (架電実施)
- Chart/analytics icon (成果報告)

### Decorative Elements
- Abstract geometric patterns in orange (10% opacity) as background accents in alternating sections
- Subtle grid pattern overlay on navy sections

## Animations & Interactions

### Scroll Animations
- Fade-in-up on section entry (stagger child elements by 100ms)
- Counter animations for metrics (count up to final number)
- Progress bars for statistics (animate width on view)

### Hover States
- Buttons: Background darken + scale-105
- Cards: Shadow increase + lift (-translate-y-1)
- Links: Orange underline slide-in effect

### Smooth Behaviors
- Smooth scroll to form on CTA clicks
- Accordion expand/collapse (300ms ease-in-out)
- Mobile menu slide-in (transform translateX)

## Responsive Breakpoints
- Mobile: < 768px (single column, stacked layout)
- Tablet: 768px - 1024px (2 columns where applicable)
- Desktop: > 1024px (full multi-column layouts)

## Accessibility & Quality
- Color contrast ratio: Minimum 4.5:1 for body text
- Focus states: 2px orange outline on all interactive elements
- Alt text for all images in Japanese
- ARIA labels for icon-only buttons
- Form validation with clear error messages in Japanese