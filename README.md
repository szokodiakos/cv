# CV

My CV, built with [Astro](https://astro.build). It is available online at <https://szokodiakos.github.io/cv>.

One data file (`src/data/cv.ts`) feeds two layouts:

- **Web** (`/`): a quiet single page with a few scroll-linked touches. Respects `prefers-reduced-motion`; add `?motion=on` or `?motion=off` to the URL to override it while previewing.
- **Print** (`/print/`): an A4 layout that is also used when printing the web page. `npm run build` renders it to `dist/akos-szokodi-cv.pdf`.

Client work is summarized rather than listed client by client, because this CV is public.

## Develop

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
```

Builds the site and generates the PDF with the locally installed Google Chrome.

## Deploy

```sh
npm run deploy
```

Builds and publishes `dist` to the `gh-pages` branch.
