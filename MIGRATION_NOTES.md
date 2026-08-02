# Migration notes

- The original inline CSS has been moved to `app/globals.css`.
- SEO metadata, canonical URL, Open Graph, Twitter metadata, viewport settings and JSON-LD are in `app/layout.tsx`.
- The homepage markup is in `app/page.tsx`.
- DOM behaviour from the original script has been moved to the client component `components/HomeInteractions.tsx`.
- `app/robots.ts` and `app/sitemap.ts` use App Router metadata routes.
- The proposal forms remain in mockup mode until `NEXT_PUBLIC_LEAD_FORM_ENDPOINT` is configured.
- The three work images are placeholders in `public/assets/work/` and can be replaced without changing the markup.
- Future links such as `/services/` and `/work/` are preserved, but those routes still need to be built.
