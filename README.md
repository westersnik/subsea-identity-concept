# GS1 / Subsea ID — Concept Site

This repository contains the static React/Vite landing page for the GS1-based subsea equipment identity concept. The page presents the Vimeo proof-of-concept film, ONS contact records, the identity/data story, and linked partner organizations.

## Local development

Install dependencies with `pnpm install`, then run `pnpm dev`. Use `pnpm check` for TypeScript validation and `pnpm build` to produce a production build.

## Project structure

The application source is in `client/src`, with the landing page implemented in `client/src/pages/Home.tsx` and global styling in `client/src/index.css`. The `server` and `shared` directories are lightweight template compatibility files.

## Static assets

The current site uses managed `/manus-storage/...` asset paths for images and brand resources. These work in the Manus-hosted deployment. If the project is deployed independently after export, copy or re-host the referenced image assets and update their paths in `client/src/pages/Home.tsx`.

## GitHub usage

The accompanying ZIP excludes `node_modules`, build output and local development logs. Create a new repository, extract this archive, then run `git init`, `git add .`, `git commit -m "Initial import"`, and push to the desired GitHub remote.
