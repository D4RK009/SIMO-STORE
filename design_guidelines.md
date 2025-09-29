# Design Guidelines: SIMO STORE Gaming Keys Website

## Design Approach
**Reference-Based Approach**: Drawing inspiration from modern gaming and digital product marketplaces like Steam, Epic Games Store, and digital key retailers. The design should feel professional yet gaming-focused with clean card layouts and clear pricing structures.

## Core Design Elements

### A. Color Palette
**Primary Colors:**
- Background: 15 8% 12% (dark charcoal)
- Surface: 220 10% 18% (dark blue-gray)
- Primary accent: 250 75% 60% (vibrant purple/blue for gaming theme)

**Secondary Colors:**
- Text primary: 0 0% 95% (off-white)
- Text secondary: 0 0% 70% (medium gray)
- Success/price: 140 60% 55% (green for prices)
- Card borders: 220 15% 25% (subtle gray borders)

### B. Typography
- **Primary Font**: Inter (clean, modern sans-serif)
- **Headings**: Font weights 600-700, larger sizes for product names
- **Body Text**: Font weight 400-500 for pricing and descriptions
- **Accent Text**: Font weight 500 for payment methods and labels

### C. Layout System
**Spacing**: Use Tailwind units of 4, 6, 8, 12, and 16 for consistent spacing
- Container max-width: 1200px
- Grid gaps: 6-8 units between cards
- Section spacing: 16-20 units between major sections
- Card padding: 6 units internal spacing

### D. Component Library

**Product Cards:**
- Clean rectangular cards with subtle rounded corners (rounded-lg)
- Product image at top (16:9 aspect ratio)
- Product name as prominent heading
- Pricing tiers displayed as clean list with consistent formatting
- Subtle hover effects with slight elevation
- Dark background with lighter borders

**Payment Methods Section:**
- Simple list layout, not cards
- Clean typography with payment method names and details
- Organized in a readable format with proper spacing
- Icons or bullet points for visual hierarchy

**Contact Section:**
- Social media links with recognizable icons
- Horizontal layout on larger screens
- Clear, accessible button styling
- Consistent spacing between social platforms

### E. Visual Hierarchy
- Hero section with main title and subtitle
- Product grid as primary focus (2x2 layout on desktop, single column on mobile)
- Payment methods as secondary information section
- Contact section as footer-style conclusion

## Key Design Principles
1. **Gaming-Focused**: Use colors and styling that appeal to gaming audience
2. **Price Clarity**: Make pricing information highly visible and scannable
3. **Professional Trust**: Clean, organized layout to build customer confidence
4. **Mobile-First**: Responsive design that works seamlessly on all devices
5. **Minimal Distractions**: Focus attention on products and key information

## Images
- **Product Images**: Each card requires a game-specific image (Free Fire, Mobile Legends, 8 Ball Pool, iOS Certificate icon)
- **No Hero Image**: The layout focuses immediately on products without a large hero section
- **Social Icons**: Small, recognizable icons for Telegram, Instagram, TikTok, YouTube
- Images should maintain consistent aspect ratios within product cards

## Layout Structure
1. Header with store name and tagline
2. 4-product grid (main focus)
3. Payment methods section (simple list format)
4. Contact/social media section
5. Clean, single-page layout without complex navigation