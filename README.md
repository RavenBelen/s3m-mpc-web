# Sandigan ng Maligayang Mamamayan ng Makina MPC Website

A React website for Sandigan ng Maligayang Mamamayan ng Makina Multi-Purpose Cooperative (S3M MPC), built with Vite and React Router.

## Run locally

```powershell
npm install
npm run dev
```

## Useful commands

- `npm run dev` — start the local development server
- `npm run lint` — check the source with Oxlint
- `npm run build` — create the production site in `dist`
- `npm run preview` — preview the production build locally

## Pages

- `/` — Home
- `/about` — About Us
- `/membership` — Membership
- `/services` — Services
- `/programs` — Programs & Livelihood
- `/news` — News & Events
- `/contact` — Contact Us

Shared page components are in `src/components`, route content is in `src/pages`, and the navigation menu data is in `src/data/navigation.js`.

The employee photo carousel looks for `employee-group-01.jpg`, `employee-group-02.jpg`, and `employee-group-03.jpg` in `public/people`. Add photos with those names to fill its slides. To add more slides or use other filenames, update the `photos` list in `src/components/PeopleCarousel.jsx`. The organizational chart is a separate portrait photo area. Replace sample copy, contact details, membership requirements, and service descriptions with approved information before publishing. The contact form is a front-end sample and needs a backend or form service to deliver messages.
