# Hyperlink Tech Solutions — Next.js App Router

This project is the App Router conversion of `hyperlink-tech-solutions-homepage-v36.html`.

## Run locally

1. Install Node.js 20.9 or newer.
2. Run `npm install`.
3. Run `npm run dev`.
4. Open `http://localhost:3000`.

## Project structure

- `app/layout.tsx` — metadata, viewport settings, global layout and JSON-LD.
- `app/page.tsx` — homepage markup.
- `app/globals.css` — all styles migrated from the HTML mockup.
- `components/HomeInteractions.tsx` — menu, scroll reveals, proposal modal, UTM capture and form behaviour.
- `app/api/leads/route.ts` — placeholder route; connect it to your CRM/database before launch.
- `public/assets/work/` — replace the three placeholder project images.

## Lead forms

Forms remain in mockup mode unless `NEXT_PUBLIC_LEAD_FORM_ENDPOINT` is configured. Copy `.env.example` to `.env.local` and add a real endpoint.

## Before production

- Replace placeholder portfolio images and text.
- Add your real phone/social details.
- Connect lead storage and email notifications.
- Add real analytics/Google Ads IDs after consent handling.
- Expand `app/sitemap.ts` as you create service, industry and location routes.
