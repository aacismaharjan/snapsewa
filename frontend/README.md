# Turborepo
A high-performance monorepo tool made by Vercel. It's used to run your project (or multiple projects in a monorepo) in development mode, but much faster and smarter than normal scripts.

```
npx turbo dev

cd apps/web && yarn dev
cd packages/ui && yarn dev
```
## Dependencies

### 1. PostCSS
A toolchain that modifies CSS using plugins. It can add vendor prefixes, use future CSS today, minify CSS, support TailwindCSS. It is like CSS compiler.