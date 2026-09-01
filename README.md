<div align="center">

# 🚀 Next.js SaaS Platform

![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?style=flat&logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-15-000000?style=flat&logo=next.js&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=flat)
![Status](https://img.shields.io/badge/Deployed-Vercel-000000?style=flat&logo=vercel&logoColor=white)

*Full-stack SaaS platform built with Next.js 15, TypeScript, and PostgreSQL*

</div>

---

## ✨ Features

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

## 🛠️ Tech Stack

![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?style=flat&logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-15-000000?style=flat&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-4169E1?style=flat&logo=postgresql&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white)

## 🚀 Quick Start

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
npm i -g vercel
vercel
```

## 🏗️ Architecture

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

## 🌐 Live Demo

| Platform | URL |
|----------|-----|
| GitHub Pages | [raphasha27.github.io/typescript-nextjs-saas-platform](https://raphasha27.github.io/typescript-nextjs-saas-platform) |
| Docker Hub | [hub.docker.com/r/raphasha27/typescript-nextjs-saas-platform](https://hub.docker.com/r/raphasha27/typescript-nextjs-saas-platform) |
| Vercel | [typescript-nextjs-saas-platform.vercel.app](https://typescript-nextjs-saas-platform.vercel.app) |

## 👤 Author

**raphasha27** — [GitHub](https://github.com/raphasha27)
