# Dr. Harriet Loice Tsinale — Academic Website

Production-ready personal academic website for **Dr. Harriet Loice Tsinale**, Director of Open, Distance and E-Learning (ODeL) and Lecturer in Computing at Karatina University.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- Lucide icons
- next-themes (light academic / dark scholarly modes)

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Adding photographs

See **[PHOTOS.md](./PHOTOS.md)** for the exact `photo1`–`photo10` placement map.

Quick version: drop files into `public/images/photo1.jpg` … `photo10.jpg`, then update extensions in `src/data/images.ts`.

## Content integrity

Verified content lives in `src/data/`. Do not invent degrees, dates, publications, awards or statistics. Prefer institutional sources, ORCID and DOI records when updating.

## Environment

Optional:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.example
```

Used for canonical URLs, sitemap and Open Graph metadata.
