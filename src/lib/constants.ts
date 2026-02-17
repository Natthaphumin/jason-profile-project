/**
 * Application constants
 */

export const SITE_CONFIG = {
  name: "Jason Profile",
  description: "Personal portfolio and blog",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  author: {
    name: "Jason",
    email: "jason@example.com",
  },
} as const;

export const ROUTES = {
  HOME: "/",
  BLOG: "/blog",
  ABOUT: "/about",
  CONTACT: "/contact",
  API: "/api",
} as const;

export const SOCIAL_LINKS = {
  github: "https://github.com",
  twitter: "https://twitter.com",
  linkedin: "https://linkedin.com",
} as const;
