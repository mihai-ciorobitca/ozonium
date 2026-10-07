# Ozonium Clinic — Next.js redesign

Next.js App Router application built directly in this repository root, with TypeScript, React and Lucide icons.

## Run locally

```sh
npm install
npm run dev
```

Open http://localhost:3000.

```sh
npm run typecheck
npm run build
npm start
```

With the local server running, `npm run test:browser` checks service routes, photographs, mobile navigation, service finder, FAQs, booking validation, the WhatsApp message handoff, and horizontal overflow at four screen widths. Install the browser once with `npx playwright install chromium`.

## Pages and behavior

- Romanian homepage with responsive navigation, clinic/team photography, service finder, doctor appointment links, FAQs and contact details.
- Ten main specialties with 29 detailed procedure pages. All original service URLs work, including the original category names.
- About, full team directory and 23 individual profiles, searchable prices with 79 published entries, patient stories, contact, blog index and four articles.
- Terms, cookie information, privacy, the European funding project and the original `/multumim` URL.
- `/programare` validates basic contact details and prepares a WhatsApp message. The visitor sends the message; the clinic confirms the appointment. This is not an automated booking system, and no request is stored by this app.
- `/confidentialitate` explains the contact flow and external services.
- All clinic navigation is local to this application; WhatsApp, Maps, phone and e-mail links open their relevant external services.

## Content and assets

Clinic names, service categories, doctor names, locations, phone and WhatsApp details were taken from the public ozonium.ro website. Original clinic photographs and its logo are stored in `public/images`. Outfit is self-hosted in `public/fonts`, with its license alongside it.

Before replacing the current public site, have the clinic review the rewritten medical copy, contact details, privacy information and pricing links. No invented testimonials, ratings, treatment guarantees or prices are included.

The downloaded `ozonium-original.*` files are research references, ignored by Git and not served by the application.

`npm run test:coverage` verifies every original URL and all team profiles. `npm run test:expanded` checks the added filtering, price search, profile bookings and responsive layouts. Set `SITE_URL` to check a production server on another local port. `npm run format` formats the source.

The prices, team biographies and original patient stories were recovered from the public clinic site. Four team members had no public portrait; their cards use initials. Medical descriptions and the original rheumatism article have been rewritten without treatment guarantees. Three additional practical patient guides complete the blog. Registration identifiers missing from the original terms were not invented.
