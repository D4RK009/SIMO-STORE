# SIMO STORE - Gaming Keys Website

## Overview

SIMO STORE is a gaming digital product marketplace selling game keys for Android, iOS, and PC games, along with iOS signing certificates. The website showcases products with tiered pricing, displays accepted payment methods, and provides contact information through social media links. The design follows a dark gaming aesthetic inspired by platforms like Steam and Epic Games Store.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state and data fetching
- **Styling**: Tailwind CSS with CSS variables for theming
- **Component Library**: shadcn/ui (Radix UI primitives with custom styling)
- **Build Tool**: Vite with React plugin

The frontend follows a component-based architecture with:
- Page components in `client/src/pages/`
- Reusable UI components in `client/src/components/`
- shadcn/ui primitives in `client/src/components/ui/`
- Custom hooks in `client/src/hooks/`
- Utility functions in `client/src/lib/`

### Backend Architecture
- **Runtime**: Node.js with Express
- **API Style**: REST endpoints under `/api/` routes
- **Deployment Target**: Supports both traditional Express server and Vercel serverless functions (API routes in `api/` folder)

### Data Storage
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` contains database table definitions
- **Current Storage**: In-memory storage implementation (`MemStorage`) for development
- **Database Ready**: Drizzle config expects `DATABASE_URL` environment variable for PostgreSQL connection

### Design System
- Dark theme with gaming aesthetic (dark charcoal background, purple/blue accents)
- Inter font family for clean, modern typography
- CSS variables defined in `client/src/index.css` for consistent theming
- Responsive design with mobile-first approach

### Path Aliases
- `@/*` → `./client/src/*`
- `@shared/*` → `./shared/*`
- `@assets` → `./attached_assets`

## External Dependencies

### Database
- **PostgreSQL**: Primary database (via `@neondatabase/serverless` for Neon DB compatibility)
- **Drizzle ORM**: Schema definition and query building
- **drizzle-zod**: Schema validation integration

### UI Components
- **Radix UI**: Comprehensive set of accessible primitives (dialog, dropdown, tabs, etc.)
- **shadcn/ui**: Pre-styled component collection built on Radix
- **Lucide React**: Icon library
- **Embla Carousel**: Carousel functionality
- **Vaul**: Drawer component

### Form & Validation
- **React Hook Form**: Form state management
- **Zod**: Schema validation
- **@hookform/resolvers**: Zod integration for react-hook-form

### Utilities
- **class-variance-authority**: Component variant management
- **clsx/tailwind-merge**: Conditional class name handling
- **date-fns**: Date formatting utilities
- **nanoid**: Unique ID generation

### Development
- **Vite**: Build tool and dev server
- **TypeScript**: Type checking
- **Tailwind CSS**: Utility-first styling
- **PostCSS/Autoprefixer**: CSS processing