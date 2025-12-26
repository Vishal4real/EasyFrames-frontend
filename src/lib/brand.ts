/**
 * EasyFrames Brand Constants and Guidelines
 * 
 * Brand Feel: Modern · Minimal · Premium
 */

export const BRAND = {
  // Brand Identity
  feel: "Modern · Minimal · Premium",
  tagline: "Frames that turn walls into stories",
  
  // Colors
  colors: {
    primary: "slate-900",
    accent: "blue-900",
    neutral: {
      background: "gray-50",
      text: "gray-900",
      textSecondary: "gray-600",
      border: "gray-200",
    },
  },
  
  // Typography
  typography: {
    heading: "font-playfair",
    body: "font-inter",
  },
  
  // Voice Guidelines
  voice: {
    tone: "Short, confident, specific",
    principles: [
      "Mention specifics: GSM, finish, delivery times",
      "Avoid generic phrases like 'best quality'",
      "Human tone, not catalog",
      "Talk about benefits in context (e.g., 'Perfect for a 2BHK living room')",
    ],
  },
  
  // Spacing Standards
  spacing: {
    sectionGap: "mt-16", // 64px
    cardPadding: "p-6", // 24px
    itemGap: "gap-8", // 32px
  },
  
  // Trust Elements
  trust: {
    delivery: "5-7 day delivery",
    shipping: "Free prepaid shipping",
    bulkOrders: "Bulk orders welcome",
    quality: "Premium 300 GSM frames with matte finish",
  },
  
  // Collections
  collections: {
    byRoom: ["Bedroom", "Office", "Gaming", "Living Room"],
    byStyle: ["Minimal", "Bold", "Devotional", "Vintage"],
    byFandom: ["Anime", "Marvel", "DC", "Sports"],
  },
} as const;

/**
 * Brand message examples
 */
export const BRAND_MESSAGES = {
  belief: "We believe walls should reflect who you are, not what is trending",
  valueProposition: "Curated frames for bedrooms, offices, and studios",
} as const;

/**
 * Helper function to get brand color classes
 */
export function getBrandColor(type: "primary" | "accent" | "neutral") {
  switch (type) {
    case "primary":
      return BRAND.colors.primary;
    case "accent":
      return BRAND.colors.accent;
    default:
      return BRAND.colors.neutral;
  }
}

