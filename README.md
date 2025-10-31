# Christian Rizza - Personal Website

A modern, responsive personal website showcasing professional experience, technical experiments, and career journey. Built with Next.js 15, React 19, TypeScript, and Tailwind CSS.

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/crizza/v0-personal-website)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.dev-black?style=for-the-badge)](https://v0.dev/chat/projects/fELOUOYTWd2)

## Overview

This is a professional portfolio website for Christian Rizza, a Technical Architect with 10+ years of programming experience across gaming, web, and eCommerce industries. The site features a clean, accessible design with sections for professional experience and technical experiments.

## Tech Stack

### Core Framework
- **Next.js 15.2.4** - React framework with App Router
- **React 19** - Latest React with Server Components
- **TypeScript 5** - Type-safe development
- **Tailwind CSS 4** - Utility-first CSS framework

### UI Components
- **shadcn/ui** - High-quality, accessible component library
- **Radix UI** - Unstyled, accessible component primitives
- **Lucide React** - Beautiful icon library
- **class-variance-authority** - Component variants management

### Additional Libraries
- **next-themes** - Dark/light mode support
- **react-hook-form** - Form handling with validation
- **zod** - Schema validation
- **recharts** - Data visualization
- **date-fns** - Date manipulation utilities
- **embla-carousel** - Smooth carousel component

### Analytics & Performance
- **Vercel Analytics** - Web analytics
- **Vercel Speed Insights** - Performance monitoring

## Project Structure

```
crizza_website/
├── app/                    # Next.js App Router
│   ├── experience/        # Professional experience page
│   ├── experiments/       # Technical experiments showcase
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout with navigation
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── navigation.tsx    # Site navigation
│   └── theme-provider.tsx # Theme management
├── lib/                   # Utility functions
├── public/               # Static assets
├── styles/               # Additional styles
└── next.config.mjs       # Next.js configuration
```

## Getting Started

### Prerequisites

- **Node.js** 18.17 or later
- **pnpm** (recommended) or npm/yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/christian-rizza/personal-website.git
cd crizza_website
```

2. Install dependencies:
```bash
pnpm install
```

### Development

Run the development server:
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Building for Production

Create an optimized production build:
```bash
pnpm build
```

Start the production server:
```bash
pnpm start
```

### Linting

Run ESLint to check code quality:
```bash
pnpm lint
```

## Features

- **Responsive Design** - Optimized for all device sizes
- **Dark Mode Support** - Automatic theme switching
- **Server-Side Rendering** - Fast initial page loads
- **Type Safety** - Full TypeScript coverage
- **Accessible UI** - WCAG compliant components
- **Performance Optimized** - Built-in analytics and monitoring
- **SEO Friendly** - Metadata and semantic HTML

## Configuration

### Tailwind CSS

The project uses Tailwind CSS v4 with PostCSS. Configuration is handled through `@tailwind` directives in the CSS files.

### shadcn/ui Components

Components are configured in `components.json` with:
- Default style theme
- Neutral base color
- CSS variables for theming
- Path aliases for imports

### Next.js

Configuration in `next.config.mjs`:
- Image optimization disabled for broader compatibility
- TypeScript and ESLint errors ignored during builds (configurable)

## Deployment

The site is automatically deployed to Vercel and synced with v0.dev:

1. **Production URL**: [https://www.crizza.com](https://www.crizza.com)
2. **v0.dev Project**: [https://v0.dev/chat/projects/fELOUOYTWd2](https://v0.dev/chat/projects/fELOUOYTWd2)

### Deployment Workflow

1. Changes made via v0.dev are automatically pushed to this repository
2. Vercel detects changes and triggers a new deployment
3. The site is built and deployed to production

You can also deploy manually:
- Push changes to the main branch
- Vercel will automatically build and deploy

## Environment Variables

No environment variables are required for basic operation. Analytics are handled automatically by Vercel.

## Contributing

This is a personal website project. If you find bugs or have suggestions, feel free to open an issue.

## License

Private project - All rights reserved.

## Contact

- **GitHub**: [github.com/christian-rizza](https://github.com/christian-rizza)
- **LinkedIn**: Available on the website
- **Email**: Available on the website

---

Built with ❤️ using [v0.dev](https://v0.dev) and [Next.js](https://nextjs.org)
