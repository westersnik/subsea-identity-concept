import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const sourceProject = "/home/ubuntu/subsea-identity-concept/client/src";
const exportProject = "/home/ubuntu/subsea-identity-github-pages";
const staticAssets = "/home/ubuntu/webdev-static-assets";

const assetMap = {
  "/manus-storage/andre-nilsen_7f95da0d.jpg": 'asset("people/andre-nilsen.jpg")',
  "/manus-storage/arne-kjetil-nilsen_731ca5fe.png": 'asset("people/arne-kjetil-nilsen.png")',
  "/manus-storage/cooper8-logo_0696cec7.png": 'asset("partners/cooper8.png")',
  "/manus-storage/eqhub-logo_d29c9e87.png": 'asset("partners/eqhub.png")',
  "/manus-storage/gs1-norway-logo_a60d46a3.png": 'asset("partners/gs1-norway.png")',
  "/manus-storage/haavard-thomlevold-updated_8a1cdec4.png": 'asset("people/haavard-thomlevold.png")',
  "/manus-storage/informatiq-official-logo_86b62b75.png": 'asset("partners/informatiq.png")',
  "/manus-storage/invig-logo_196908ad.png": 'asset("partners/invig.png")',
  "/manus-storage/offshore-norge-logo_c85ea411.png": 'asset("partners/offshore-norge.png")',
  "/manus-storage/ordin-husa-updated_1a624778.png": 'asset("people/ordin-husa.png")',
  "/manus-storage/orlen-upstream-norway_6ee1dd16.png": 'asset("partners/orlen.png")',
  "/manus-storage/sigurd-mikalsen_b9207bf1.jpg": 'asset("people/sigurd-mikalsen.jpg")',
  "/manus-storage/subsea-digital-twin_3184ace8.jpg": 'asset("imagery/subsea-digital-twin.jpg")',
  "/manus-storage/subsea-hero-rov-tree_43110130.jpg": 'asset("imagery/subsea-rov-tree.jpg")',
  "/manus-storage/subsea-identity-detail_fc5c6a55.jpg": 'asset("imagery/subsea-identity-detail.jpg")',
  "/manus-storage/subsea-identity-mark_b8a990cd.png": 'asset("brand/subsea-identity-mark.png")',
};

const binaryAssets = [
  ["andre-nilsen.jpg", "assets/people/andre-nilsen.jpg"],
  ["arne-kjetil-nilsen.png", "assets/people/arne-kjetil-nilsen.png"],
  ["cooper8-logo.png", "assets/partners/cooper8.png"],
  ["eqhub-logo.png", "assets/partners/eqhub.png"],
  ["gs1-norway-logo.png", "assets/partners/gs1-norway.png"],
  ["haavard-thomlevold-updated.png", "assets/people/haavard-thomlevold.png"],
  ["informatiq-official-logo.png", "assets/partners/informatiq.png"],
  ["invig-logo.png", "assets/partners/invig.png"],
  ["offshore-norge-logo.png", "assets/partners/offshore-norge.png"],
  ["ordin-husa-updated.png", "assets/people/ordin-husa.png"],
  ["orlen-upstream-norway.png", "assets/partners/orlen.png"],
  ["sigurd-mikalsen.jpg", "assets/people/sigurd-mikalsen.jpg"],
  ["subsea-digital-twin.jpg", "assets/imagery/subsea-digital-twin.jpg"],
  ["subsea-hero-rov-tree.jpg", "assets/imagery/subsea-rov-tree.jpg"],
  ["subsea-identity-detail.jpg", "assets/imagery/subsea-identity-detail.jpg"],
  ["subsea-identity-mark.png", "assets/brand/subsea-identity-mark.png"],
  ["concept-film-mobile-poster.jpg", "assets/imagery/concept-film-mobile-poster.jpg"],
];

let home = readFileSync(path.join(sourceProject, "pages/Home.tsx"), "utf8");
home = home.replace("import {", 'const asset = (file: string) => `${import.meta.env.BASE_URL}assets/${file}`;\n\nimport {');
for (const [from, to] of Object.entries(assetMap)) home = home.replaceAll(`"${from}"`, to);
home = home.replace(/src=asset\(("[^"]+")\)/g, "src={asset($1)}");
writeFileSync(path.join(exportProject, "client/src/pages/Home.tsx"), home);

let css = readFileSync(path.join(sourceProject, "index.css"), "utf8");
css = css.replaceAll("/manus-storage/concept-film-mobile-poster_b28f99e2.jpg", "/subsea-identity-concept/assets/imagery/concept-film-mobile-poster.jpg");
writeFileSync(path.join(exportProject, "client/src/index.css"), css);

for (const [sourceName, destination] of binaryAssets) {
  const target = path.join(exportProject, "client/public", destination);
  mkdirSync(path.dirname(target), { recursive: true });
  copyFileSync(path.join(staticAssets, sourceName), target);
}

console.log(`Synced ${binaryAssets.length} local assets and current page content.`);
