# Marcio Bolsoni — Portfolio

Personal portfolio site. Built with Next.js (App Router) + Tailwind, exported as a fully static site, deployed on GitHub Pages with `marciobolsoni.cloud` as the custom domain.

## Local development

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Build a static export

```bash
npm run build
# outputs to ./out — that's what GitHub Pages serves
```

The site uses `output: "export"` and `trailingSlash: true` in `next.config.mjs`. Trailing slashes mean every page lands as `/<route>/index.html`, which fixes the SPA-routing 404 the previous Hostinger Horizons site had.

## Deploy

A GitHub Actions workflow at `.github/workflows/deploy.yml` builds and publishes on every push to `main`. To activate it:

1. Create a new GitHub repository (suggested name: `marciobolsoni-portfolio`).
2. Push this code to `main`.
3. In the repository settings → Pages, set **Source** to **GitHub Actions**.
4. The workflow will run automatically. After it finishes, the site is live.

## Custom domain — `marciobolsoni.cloud`

The `public/CNAME` file already contains `marciobolsoni.cloud`, so GitHub Pages will pick it up.

In your DNS provider, set:

| Type  | Name    | Value                           |
| ----- | ------- | ------------------------------- |
| A     | `@`     | `185.199.108.153`               |
| A     | `@`     | `185.199.109.153`               |
| A     | `@`     | `185.199.110.153`               |
| A     | `@`     | `185.199.111.153`               |
| CNAME | `www`   | `marciobolsoni.github.io.`      |

Then in **Settings → Pages → Custom domain**, enter `marciobolsoni.cloud`, click Save, and tick **Enforce HTTPS** once the certificate has provisioned (usually < 10 minutes).

## Editing content

| What                          | Where                          |
| ----------------------------- | ------------------------------ |
| Project case studies          | `src/data/projects.ts`         |
| Work history & certifications | `src/data/experience.ts`       |
| Skill groups                  | `src/data/skills.ts`           |
| Contact form endpoint         | `src/app/contact/page.tsx`     |
| Avatar / OG image             | `public/`                      |

## Contact form

The form is wired to Formspree by default. Sign up at <https://formspree.io>, create a form, and replace the placeholder ID in `src/app/contact/page.tsx` (`FORM_ENDPOINT`). Until you do, the form falls back to opening the user's mail client.

## Adding architecture diagrams

Each project supports a `diagramUrl` field in `src/data/projects.ts`. After exporting your Lucidchart diagram as PNG, drop it in `public/diagrams/` and set the path:

```ts
diagramUrl: "/diagrams/serverless-ecommerce.png",
```

It will render at the top of the project case study automatically.
