# EasyFrames Frontend - Project Overview

## 1. Project Description

**EasyFrames** is a modern e-commerce frontend application for selling premium picture frames. The project focuses on showcasing frames for various categories including Marvel, Anime, Home Decor, and more. This is a **UI-only application** with **no backend integration** - all data is static and client-side only. All functions and interactions are currently non-functional placeholders.

### Key Features
- E-commerce product showcase for premium frames
- Category-based browsing (Modern, Classic, Rustic, Designer, etc.)
- Product detail pages
- Shopping cart UI (non-functional)
- User profile UI (non-functional)
- Responsive design with dark mode support
- SEO-optimized pages with metadata

---

## 2. Technologies & Stack

### Core Framework
- **Next.js 15.4.6** - React framework with App Router
- **React 19.1.0** - UI library
- **TypeScript 5** - Type safety

### Styling & UI
- **Tailwind CSS 4.1.11** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **tw-animate-css** - Animation utilities
- **Radix UI** - Headless UI components:
  - `@radix-ui/react-avatar`
  - `@radix-ui/react-checkbox`
  - `@radix-ui/react-dialog`
  - `@radix-ui/react-label`
  - `@radix-ui/react-navigation-menu`
  - `@radix-ui/react-separator`
  - `@radix-ui/react-slot`
  - `@radix-ui/react-switch`
  - `@radix-ui/react-tabs`

### Animation & Effects
- **Framer Motion 12.23.26** - Animation library
- **GSAP 3.14.2** - Advanced animations
- **@gsap/react** - React bindings for GSAP

### 3D Graphics (Available but not actively used)
- **Three.js 0.182.0** - 3D graphics library
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for react-three/fiber

### State Management (Installed but not actively used)
- **Redux Toolkit 2.8.2** - State management
- **react-redux 9.2.0** - React bindings for Redux

### Icons & UI Components
- **Lucide React 0.539.0** - Icon library
- **embla-carousel-react** - Carousel component
- **class-variance-authority** - Component variants
- **clsx** - Conditional classnames
- **tailwind-merge** - Merge Tailwind classes

### HTTP Client (Installed but not used)
- **Axios 1.11.0** - HTTP client (not connected to any backend)

### Development Tools
- **ESLint 9** - Linting
- **TypeScript** - Type checking
- **Turbopack** - Fast bundler (used in dev mode)

### Fonts
- **Playfair Display** - Serif font for headings (via `next/font/google`)
- **Inter** - Sans-serif font for body text (via `next/font/google`)

---

## 3. Styling Patterns & Theme

### Typography System

#### Fonts
- **Primary Heading Font**: `Playfair Display` (serif)
  - CSS Variable: `--font-playfair`
  - Class: `font-playfair`
  - Used for: All main headings, section titles, hero text, logo

- **Body/UI Font**: `Inter` (sans-serif)
  - CSS Variable: `--font-inter`
  - Class: `font-inter`
  - Used for: All body text, buttons, descriptions, UI elements

#### Font Sizes by Section

**Hero Section:**
- Main heading: `text-4xl sm:text-5xl lg:text-6xl xl:text-6xl` with `font-bold` and `font-playfair`
- Subtitle: `text-base lg:text-base` with `font-inter`
- CTA buttons: `text-base` with `font-semibold` and `font-inter`

**Section Headings:**
- Large: `text-3xl sm:text-4xl lg:text-5xl xl:text-5xl` with `font-bold` and `font-playfair`
- Medium: `text-2xl sm:text-3xl lg:text-4xl xl:text-5xl` with `font-bold` and `font-playfair`
- Small: `text-lg sm:text-xl md:text-2xl lg:text-3xl` with `font-bold` and `font-playfair`

**Body Text:**
- Large: `text-base md:text-lg lg:text-xl` with `font-inter`
- Regular: `text-sm sm:text-base md:text-base` with `font-inter`
- Small: `text-xs sm:text-sm` with `font-inter`

**Product Cards:**
- Product title: `text-sm sm:text-base md:text-lg` with `font-semibold` or `font-bold` and `font-inter`
- Price: `text-lg md:text-xl md:text-2xl` with `font-bold` and `font-inter`
- Description: `text-xs sm:text-sm` with `font-inter`

### Color Palette

#### Primary Colors
- **Dark Slate/Gray**: `slate-900`, `slate-800`, `slate-700`
  - Used for: Primary backgrounds, buttons, dark elements
- **Blue Accents**: `blue-900`, `blue-600`, `blue-500`, `blue-400`, `blue-300`
  - Used for: Accents, hover states, highlights

#### Background Colors
- **Light Mode**: `bg-gray-50`, `bg-white`
- **Dark Mode**: `bg-gray-900`, `bg-gray-800`

#### Text Colors
- **Primary Text**:
  - Light: `text-gray-900`, `text-slate-900`
  - Dark: `text-gray-100`, `text-white`
- **Secondary Text**:
  - Light: `text-gray-600`, `text-gray-500`
  - Dark: `text-gray-400`, `text-gray-300`
- **Accent Text**: `text-blue-600`, `text-blue-500`, `text-blue-400`, `text-blue-300`

#### Border Colors
- **Default**: `border-gray-200`, `border-gray-300` (light) / `border-gray-700`, `border-gray-800` (dark)
- **Hover**: `border-slate-900`, `border-blue-500`, `border-blue-600`
- **Active**: `border-blue-500`, `border-blue-600`

#### Gradients
- **Hero/CTA**: `bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800`
- **Text Gradients**: `bg-gradient-to-r from-gray-900 to-blue-900` or `from-blue-900 to-gray-900` with `bg-clip-text text-transparent`

### Spacing & Layout

#### Container
- Max Width: `max-w-7xl mx-auto`
- Padding: `px-4 sm:px-6 lg:px-8` (horizontal)
- Vertical Padding: `py-12`, `py-16`, `py-20` (sections)

#### Gaps & Spacing
- Section Gaps: `gap-4 md:gap-6 lg:gap-8`
- Card Gaps: `gap-3 sm:gap-4`
- Element Gaps: `space-y-3 sm:space-y-4 md:space-y-6`
- Section Margins: `mt-16`, `mb-16`

#### Border Radius
- Cards: `rounded-xl` or `rounded-2xl`
- Buttons: `rounded-full` or `rounded-xl` or `rounded-2xl`
- Images: `rounded-lg`, `rounded-xl`, or `rounded-2xl`
- Large Sections: `rounded-2xl` or `rounded-3xl`

### Component Styling Patterns

#### Cards
```tsx
className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
```

#### Primary Buttons
```tsx
className="bg-slate-900 hover:bg-blue-900 text-white rounded-full px-8 py-4 text-base font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200 font-inter"
```

#### Secondary/Outline Buttons
```tsx
className="border-2 border-gray-300 dark:border-gray-600 hover:border-slate-900 dark:hover:border-white text-slate-900 dark:text-white hover:bg-slate-900 dark:hover:bg-white hover:text-white dark:hover:text-slate-900 rounded-full font-semibold font-inter"
```

#### Product Cards
- Image: `w-full h-64 md:h-72 lg:h-80 object-cover`
- Hover effect: `group-hover:scale-110 transition-transform duration-700`
- Overlay: `bg-gradient-to-t from-black/60 via-black/20 to-transparent`
- Badge: `bg-slate-900 text-white px-3 py-1 rounded-full text-xs font-bold`

### Responsive Breakpoints
- **Mobile (default)**: Base styles without prefix
- **Small (sm:)**: `640px+` - Tablets
- **Medium (md:)**: `768px+` - Small desktops
- **Large (lg:)**: `1024px+` - Desktops
- **Extra Large (xl:)**: `1280px+` - Large screens

### Dark Mode
- Always include dark mode variants using `dark:` prefix
- Supports both light and dark themes
- Uses CSS variables for theme switching

### Animation & Transitions
- Hover: `transition-all duration-200` or `duration-300`
- Transform: `transform hover:scale-105` or `hover:-translate-y-1`
- Shadow: `shadow-lg hover:shadow-xl` or `hover:shadow-2xl`
- Color: `transition-colors duration-200`

### Special Effects
- **Gradient Borders**: `.glow-border` class for animated gradient borders
- **Backdrop Blur**: `backdrop-blur-sm` or `backdrop-blur-xl` for glass effects
- **Gradient Overlays**: `bg-gradient-to-t from-black/60 via-black/20 to-transparent` for image overlays

---

## 4. Completed Features

### Pages & Routes
✅ **Home Page** (`/`)
- Hero section with animated infinite grid background
- Category carousel section
- Top Selling products section (Monthly)
- Bottom CTA section
- Testimonials section

✅ **About Page** (`/about`)
- Hero section with gradient background
- Story section with image
- Values section with 6 value cards
- CTA section

✅ **Contact Page** (`/contact`)
- Hero section
- Contact information cards (Email, Phone, Address, Hours)
- Contact form (UI only, no submission functionality)

✅ **Products Page** (`/products`)
- Page structure exists (file is empty)

✅ **Product Detail Page** (`/products/[id]`)
- Page structure exists (file is empty)

✅ **Category Page** (`/category`)
- Page structure exists (file is empty)

✅ **Category Detail Page** (`/category/[id]`)
- Page structure exists (file is empty)

✅ **404 Not Found Page** (`/not-found`)
- Custom 404 page component

### Components

✅ **Navigation**
- `Navbar.tsx` - Fixed navigation with:
  - Logo with gradient text
  - Desktop navigation menu with dropdown
  - Mobile hamburger menu
  - Cart icon with badge
  - Profile icon
  - Scroll-based visibility (hides on scroll down, shows on scroll up)
  - Active route highlighting

✅ **Hero Section**
- `Hero.tsx` - Landing hero with:
  - Animated infinite grid background
  - Gradient text headings
  - Feature icons (Premium Quality, Fast Shipping, Loved by 10K+)
  - CTA buttons
  - Product image grid with hover effects

✅ **Product Display**
- `TopSelling.tsx` - Product grid with:
  - Animated product cards
  - Rank badges (Crown, Medal, Star icons)
  - Sale badges
  - Rating display
  - Price with original price strikethrough
  - Hover animations
  - Framer Motion animations

✅ **Category Carousel**
- `CategoryCarousel.tsx` (via `design-testimonial.tsx`)
- Category showcase with carousel functionality

✅ **Testimonials**
- `TestimonialV2.tsx` - Testimonial carousel component

✅ **Shopping Cart**
- `Cart.tsx` - Cart sidebar with:
  - Cart items display
  - Quantity controls
  - Price calculations
  - Empty cart state
  - Checkout button (non-functional)
  - **Note**: Uses static mock data, no backend connection

✅ **User Profile**
- `Profile.tsx` - Profile dropdown/sheet component (UI only)

✅ **Footer**
- `Footer.tsx` - Footer with:
  - Logo
  - Navigation links (Shop, Support, Company)
  - Social media icons
  - Legal links
  - Copyright

✅ **Bottom CTA**
- `BottomCTA.tsx` - Call-to-action section with:
  - Stats display (500+ Designs, 4.7★ Rating, 10K+ Reviews)
  - Feature pills
  - CTA button

### UI Components (shadcn/ui style)

✅ **Button** (`ui/button.tsx`)
✅ **Card** (`ui/card.tsx`)
✅ **Input** (`ui/input.tsx`)
✅ **Textarea** (`ui/textarea.tsx`)
✅ **Label** (`ui/label.tsx`)
✅ **Badge** (`ui/badge.tsx`)
✅ **Avatar** (`ui/avatar.tsx`)
✅ **Separator** (`ui/separator.tsx`)
✅ **Sheet** (`ui/sheet.tsx`) - Used for cart and profile
✅ **Navigation Menu** (`ui/navigation-menu.tsx`)
✅ **Tabs** (`ui/tabs.tsx`)
✅ **Checkbox** (`ui/checkbox.tsx`)
✅ **Switch** (`ui/switch.tsx`)
✅ **Carousel** (`ui/carousel.tsx`)
✅ **Info Tooltip** (`ui/info-tooltip.tsx`)
✅ **Page Not Found** (`ui/page-not-found.tsx`)
✅ **Design Testimonial** (`ui/design-testimonial.tsx`) - Category carousel
✅ **Testimonial V2** (`ui/testimonial-v2.tsx`)
✅ **Infinite Grid** (`ui/the-infinite-grid.tsx`) - Animated background grid

### Configuration

✅ **Next.js Config** (`next.config.ts`)
- Image optimization (AVIF, WebP formats)
- Remote image patterns (Unsplash)
- Security headers
- Compression enabled

✅ **TypeScript Config** (`tsconfig.json`)
- Strict mode enabled
- Path aliases (`@/*` → `./src/*`)

✅ **Tailwind Config**
- Custom theme variables
- Dark mode support
- Custom utilities (no-scrollbar, glow-border)

✅ **ESLint Config** (`eslint.config.mjs`)
- Next.js ESLint configuration

✅ **SEO & Metadata**
- Dynamic metadata for all pages
- Open Graph tags
- Twitter Card tags
- Canonical URLs
- Keywords and descriptions

---

## 5. Pending/Incomplete Features

### Pages (Empty/Placeholder)
❌ **Products Listing Page** (`/products`)
- File exists but is empty
- Needs: Product grid, filters, sorting, pagination

❌ **Product Detail Page** (`/products/[id]`)
- File exists but is empty
- Needs: Product images, details, add to cart, reviews, related products

❌ **Category Listing Page** (`/category`)
- File exists but is empty
- Needs: Category grid/list view

❌ **Category Detail Page** (`/category/[id]`)
- File exists but is empty
- Needs: Category-specific product listing

### Functionality (All Non-Functional)
❌ **Shopping Cart**
- UI exists but uses static mock data
- No add to cart functionality
- No cart persistence
- No checkout process

❌ **User Authentication**
- Profile component exists but no login/signup
- No user state management
- No protected routes

❌ **Product Search**
- No search functionality implemented
- No search bar in navigation

❌ **Product Filtering & Sorting**
- No filter UI
- No sorting options
- No category filtering

❌ **Form Submissions**
- Contact form has no submission handler
- No form validation
- No success/error states

❌ **Product Reviews**
- No review system
- No review submission
- No review display (except static ratings)

❌ **Wishlist/Favorites**
- No wishlist functionality
- No favorite products feature

❌ **Checkout Process**
- No checkout page
- No payment integration
- No order confirmation

❌ **User Account**
- No account page
- No order history
- No saved addresses
- No profile editing

---

## 6. Important Notes for AI Development

### ⚠️ CRITICAL: No Backend Connection

**This is a UI-only application with static data. There is NO backend integration.**

- All product data is hardcoded in components
- Cart uses local state with mock data
- No API calls are made
- No database connection
- All functions are placeholders
- Forms do not submit anywhere
- No authentication system
- No payment processing

### Data Structure

Products are currently defined as static arrays in components:
- `TopSelling.tsx` contains `monthFrame` and `weekFrame` arrays
- Cart items are in `Cart.tsx` as `useState` with mock data
- Images use Unsplash URLs (configured in `next.config.ts`)

### State Management

- Currently using React `useState` for local component state
- Redux Toolkit is installed but **not used**
- No global state management implemented

### API Integration Ready

- Axios is installed but not used
- Components are structured to easily accept props/data
- Ready for backend integration when available

### Image Sources

- Currently using Unsplash images via `images.unsplash.com`
- Configured in `next.config.ts` remote patterns
- All images are external URLs, no local image assets

### Development Workflow

1. **Run Development Server**: `npm run dev` (uses Turbopack)
2. **Build**: `npm run build`
3. **Start Production**: `npm start`
4. **Lint**: `npm run lint`

### File Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page ✅
│   ├── layout.tsx         # Root layout ✅
│   ├── globals.css        # Global styles ✅
│   ├── about/             # About page ✅
│   ├── contact/           # Contact page ✅
│   ├── products/          # Products pages ❌ (empty)
│   └── category/          # Category pages ❌ (empty)
├── components/            # React components
│   ├── Navbar.tsx         # Navigation ✅
│   ├── Hero.tsx           # Hero section ✅
│   ├── Footer.tsx         # Footer ✅
│   ├── TopSelling.tsx     # Product grid ✅
│   ├── Cart.tsx           # Shopping cart ✅ (UI only)
│   ├── Profile.tsx        # User profile ✅ (UI only)
│   ├── BottomCTA.tsx     # CTA section ✅
│   └── ui/                # Reusable UI components ✅
└── lib/
    └── utils.ts           # Utility functions
```

### Styling Rules

**ALWAYS follow these rules when adding/editing components:**

1. **Fonts**: Use `font-playfair` for headings, `font-inter` for body text
2. **Dark Mode**: Always include `dark:` variants
3. **Responsive**: Always use responsive classes (sm:, md:, lg:, xl:)
4. **Colors**: Stick to the defined color palette (slate, blue, gray)
5. **Spacing**: Use consistent spacing (gap-4, gap-6, gap-8, etc.)
6. **Border Radius**: Use rounded-xl, rounded-2xl, or rounded-full
7. **Transitions**: Always include hover states with transitions
8. **Shadows**: Use shadow-lg, shadow-xl, shadow-2xl for depth

### Component Patterns

When creating new components:
- Use TypeScript interfaces for props
- Include dark mode support
- Make responsive (mobile-first)
- Add hover states and transitions
- Use the defined color palette
- Follow the typography system
- Include proper accessibility attributes

### Next Steps for Development

1. **Complete Empty Pages**: Implement products and category pages
2. **Add Static Data**: Create data files/constants for products
3. **Enhance Cart**: Add add-to-cart functionality (still client-side)
4. **Form Handling**: Add form validation and client-side submission handling
5. **Search**: Implement client-side search functionality
6. **Filtering**: Add client-side filtering and sorting
7. **Backend Integration**: When backend is ready, replace static data with API calls

---

## 7. Project Status Summary

### ✅ Completed (UI/Design)
- Home page with all sections
- About page
- Contact page
- Navigation and footer
- Product display components
- Shopping cart UI
- User profile UI
- All reusable UI components
- Dark mode support
- Responsive design
- SEO metadata
- Animations and transitions

### ❌ Pending (Functionality)
- Backend integration
- API connections
- Form submissions
- Cart functionality (add/remove/update)
- User authentication
- Product search
- Filtering and sorting
- Checkout process
- Order management
- User account features

### 📝 Ready for Development
- All pages have proper structure
- Components are modular and reusable
- Styling system is well-defined
- TypeScript types are in place
- Ready for backend integration when available

---

**Last Updated**: Based on current codebase state
**Project Type**: Frontend UI/UX Only
**Backend Status**: Not Connected
**Data Source**: Static/Mock Data Only

