# Next.js SaaS Platform

![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?style=flat&logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-15-000000?style=flat&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-4169E1?style=flat&logo=postgresql&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white)

> Full-stack SaaS platform built with Next.js 15, TypeScript, and PostgreSQL

## Architecture

```
┌─────────────────────────────────────────┐
│              Next.js App                │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐ │
│  │  Pages  │  │   API   │  │  Auth   │ │
│  └────┬────┘  └────┬────┘  └────┬────┘ │
└───────┼────────────┼────────────┼───────┘
        │            │            │
┌───────▼────────────▼────────────▼───────┐
│           Prisma ORM                    │
└──────────────────┬──────────────────────┘
                   │
┌──────────────────▼──────────────────────┐
│           PostgreSQL                    │
└─────────────────────────────────────────┘
```

## Features

- Modern App Router (Next.js 15)
- TypeScript throughout
- Authentication with NextAuth.js
- Dashboard with analytics
- Project management
- Role-based access control
- Responsive design with Tailwind CSS
- PostgreSQL with Prisma ORM
- Vercel deployment ready
- Cloudflare Pages compatible

## Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL 16+
- npm or yarn

### Local Development

```bash
# Clone repository
git clone https://github.com/Raphasha27/typescript-nextjs-saas-platform.git
cd typescript-nextjs-saas-platform

# Install dependencies
npm install

# Setup environment
cp .env.example .env.local

# Setup database
npx prisma generate
npx prisma db push

# Seed database
npm run seed

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Vercel Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Cloudflare Pages

```bash
# Build
npm run build

# Deploy with Wrangler
npx wrangler pages deploy .next
```

## Project Structure

```
typescript-nextjs-saas-platform/
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── dashboard/    # Dashboard pages
│   │   ├── auth/         # Authentication pages
│   │   └── api/          # API routes
│   ├── components/       # React components
│   │   ├── ui/          # UI components
│   │   ├── dashboard/   # Dashboard components
│   │   └── landing/     # Landing page components
│   ├── lib/             # Utility functions
│   └── types/           # TypeScript types
├── prisma/              # Database schema
├── tests/               # Test files
└── public/              # Static assets
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | PostgreSQL connection string | Yes |
| `NEXTAUTH_SECRET` | NextAuth secret key | Yes |
| `NEXTAUTH_URL` | Application URL | Yes |

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push to branch
5. Open a Pull Request

## License

MIT License


## Live Demo
- **GitHub Pages:** https://raphasha27.github.io/typescript-nextjs-saas-platform
- **Vercel:** https://typescript-nextjs-saas-platform-alpha.vercel.app
- **Docker Hub:** [docker pull raphasha27/typescript-nextjs-saas-platform](https://hub.docker.com/r/raphasha27/typescript-nextjs-saas-platform)


