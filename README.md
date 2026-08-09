# NOVA — AI, Cloud & DevOps Studio

A modern dark landing page built with React and Vite for the AI + Cloud + DevOps webinar.

## Local development

```bash
npm ci
npm run dev
```

Open `http://localhost:5173`.

## Production build

```bash
npm run build
npm run preview
```

Vercel settings:

- Framework preset: **Vite**
- Install command: `npm ci`
- Build command: `npm run build`
- Output directory: `dist`

## Docker

Build and run the development container:

```bash
docker build -t nova-company-site .
docker run --rm -p 5173:5173 nova-company-site
```

Open `http://localhost:5173`.

## Structure

```text
src/
├── App.jsx
├── App.css
├── index.css
└── main.jsx
index.html
vite.config.ts
Dockerfile
```

## Links

- GitHub: https://github.com/Hishamharis/Webminar-company-site
- Branch: `vite-structure-migration`
- Docker Hub target: `dimalth/company-site`
- Docker Hub target: `hishamharis/webminar-company-site`

Built with React, Vite, and CSS.
