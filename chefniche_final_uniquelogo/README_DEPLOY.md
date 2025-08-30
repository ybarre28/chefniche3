# ChefNiche — Deploy Quick Start

## Files you should see at repo root
- src/
- public/
- package.json
- next.config.js
- netlify.toml
- tailwind.config.ts
- tsconfig.json

## Deploy on Vercel (easiest)
1) Push this folder to a GitHub repo (unzipped).  
2) In Vercel: Add New → Project → import the repo → Deploy.

## Deploy on Netlify (via Git)
1) Push this folder to a GitHub repo (unzipped).  
2) Netlify → Add new site → Import from Git → pick the repo.  
3) Build command: `npm run build`  
4) Publish directory: `.next`  
5) Environment variable: `NODE_VERSION = 20`  
6) Deploy, then hard refresh the site.

