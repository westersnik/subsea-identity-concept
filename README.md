# GS1 / Subsea ID — Concept Site

This repository contains the self-contained static site for the **GS1-based subsea equipment identity** concept. It presents the concept film, the people available to meet at ONS, the data-identity story, organisation context and partner organisations.

## Live site

The public GitHub Pages deployment is available at:

**https://westersnik.github.io/subsea-identity-concept/**

GitHub Pages is the reserve hosting option for times when the Manus-hosted domain is unavailable. Every push to `main` runs the deployment workflow in `.github/workflows/deploy-pages.yml`.

## Local development

Use Node.js 22 and pnpm. Install dependencies with `pnpm install`, run the local site with `pnpm dev`, validate types with `pnpm check`, and create the static production build with `pnpm build`.

The Vite base path is configured for the repository URL, so keep `base: "/subsea-identity-concept/"` in `vite.config.ts` unless the repository name changes. If the repository is renamed, update that base path and redeploy.

## Content and assets

The main landing page is in `client/src/pages/Home.tsx`; the Field Signal visual system is in `client/src/index.css`. Images, logos and portraits are stored locally in `client/public/assets/`, grouped as follows:

| Folder | Contents |
| --- | --- |
| `assets/brand` | GS1 / SUBSEA ID mark |
| `assets/imagery` | Subsea imagery and mobile concept-film poster |
| `assets/partners` | Partner logos |
| `assets/people` | Contact portraits |

The Vimeo concept-film embed uses `https://vimeo.com/1219827771/c4aa5e03cc`. The static site does not depend on Manus-hosted image paths; all active visual resources are committed to this repository.

## Publishing and recovery

GitHub Pages is configured to deploy through **GitHub Actions**. Review the workflow run in the repository’s Actions tab after any push to `main`. If the live site displays stale content, allow GitHub Pages a few minutes to propagate the latest successful deployment and then refresh the browser without cache.

For domain or hosting changes, retain the GitHub Pages deployment as a separate reserve route until the new primary host has been tested.
