# 📁 Project Structure

This document explains the organization of the jason-profile project.

## 📂 Folder Structure

```
jason-profile/
├── public/                    # Static assets
│   ├── fonts/                # Font files
│   └── images/               # Image assets
│
├── src/
│   ├── app/                  # Next.js App Router
│   │   ├── layout.tsx        # Root layout
│   │   ├── page.tsx          # Home page (/)
│   │   ├── loading.tsx       # Loading UI
│   │   ├── error.tsx         # Error handling
│   │   ├── globals.css       # Global styles
│   │   │
│   │   ├── api/              # API routes
│   │   │   └── hello/
│   │   │       └── route.ts  # /api/hello endpoint
│   │   │
│   │   └── blog/             # Blog section
│   │       ├── page.tsx      # Blog list page (/blog)
│   │       ├── layout.tsx    # Blog layout (optional)
│   │       └── [slug]/
│   │           └── page.tsx  # Individual blog post (/blog/[slug])
│   │
│   ├── components/           # React components
│   │   ├── ui/              # UI components (buttons, inputs, etc.)
│   │   │   ├── Button.tsx
│   │   │   └── index.ts
│   │   │
│   │   └── layout/          # Layout components
│   │       ├── Header.tsx
│   │       ├── Footer.tsx
│   │       └── index.ts
│   │
│   ├── lib/                  # Utility functions & helpers
│   │   ├── utils.ts         # General utilities
│   │   └── constants.ts     # App constants
│   │
│   ├── types/               # TypeScript type definitions
│   │   └── index.ts         # Global types
│   │
│   └── hooks/               # Custom React hooks
│       ├── useMediaQuery.ts
│       └── index.ts
│
├── next.config.ts           # Next.js configuration
├── tsconfig.json            # TypeScript configuration
├── package.json             # Dependencies
├── eslint.config.mjs        # ESLint configuration
├── postcss.config.mjs       # PostCSS configuration
└── README.md                # Project documentation
```

## 🎯 Import Paths

Use the `@/` alias for cleaner imports:

```typescript
// ✅ Good
import { Button } from "@/components/ui";
import { Header, Footer } from "@/components/layout";
import { formatDate } from "@/lib/utils";
import { Post, Author } from "@/types";
import { useMediaQuery } from "@/hooks";

// ❌ Avoid
import { Button } from "../../../components/ui/Button";
```

## 📋 Naming Conventions

### Next.js Special Files (App Router)

- `page.tsx` - Page component (creates route)
- `layout.tsx` - Layout wrapper
- `loading.tsx` - Loading fallback
- `error.tsx` - Error handling
- `route.ts` - API route handler
- `not-found.tsx` - 404 page

### Components

- PascalCase for files: `Button.tsx`, `Header.tsx`
- Default export for components
- `index.ts` for barrel exports

### Utilities & Hooks

- camelCase for files: `utils.ts`, `constants.ts`
- `use` prefix for hooks: `useMediaQuery.ts`

## 🚀 Best Practices

1. **Components Organization**
   - `ui/` - Reusable UI components
   - `layout/` - Layout-specific components
   - Create `features/` folder for feature-specific components

2. **File Locations**
   - Server Components: `app/` directory
   - Client Components: Mark with `'use client'`
   - Shared logic: `lib/` directory
   - Type definitions: `types/` directory

3. **Import Order**

   ```typescript
   // 1. External libraries
   import React from "react";
   import { useRouter } from "next/navigation";

   // 2. Internal imports
   import { Button } from "@/components/ui";
   import { formatDate } from "@/lib/utils";
   import { Post } from "@/types";
   ```

4. **API Routes**
   - Place in `app/api/` directory
   - Use `route.ts` filename
   - Export HTTP method handlers: GET, POST, PUT, DELETE

## 📝 Notes

- This structure follows Next.js 13+ App Router conventions
- All page routes must use `page.tsx` filename
- Dynamic routes use `[param]` folder naming
- TypeScript is fully configured with path aliases
