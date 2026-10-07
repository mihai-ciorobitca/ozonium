import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
const readJSON = (file) => JSON.parse(readFileSync(file, "utf8").trim());
const legacy = readJSON("lib/legacy-routes.json");
const team = readJSON("lib/team.json");
const base = process.env.SITE_URL || "http://127.0.0.1:3000";
const paths = [
  ...new Set([
    ...legacy,
    ...team.map((member) => `/despre-noi/echipa/${member.slug}`),
    "/echipa",
    "/despre-noi/echipa",
    "/programare",
    "/confidentialitate",
    "/blog",
    "/blog/prima-consultatie",
    "/blog/recuperarea-pas-cu-pas",
    "/blog/evaluarea-echilibrului",
    "/servicii/ortopedie",
    "/servicii/recuperare-medicala",
    "/servicii/ecografie",
  ]),
];
const results = [];
for (let index = 0; index < paths.length; index += 6) {
  const batch = await Promise.all(
    paths.slice(index, index + 6).map(async (path) => {
      const response = await fetch(`${base}${path}`);
      assert.equal(response.status, 200, `Route: ${path}`);
      const html = await response.text();
      assert.equal(
        (html.match(/<h1\b/g) || []).length,
        1,
        `Single page heading: ${path}`,
      );
      assert.match(html, /<title>[^<]+<\/title>/, `Title: ${path}`);
      assert.ok(
        !html.includes('href="https://ozonium.ro/'),
        `No navigation back to old site: ${path}`,
      );
      return path;
    }),
  );
  results.push(...batch);
}
const prices = readJSON("lib/prices.json");
const count = Object.values(prices)
  .flat()
  .reduce((total, group) => total + group.items.length, 0);
console.log(
  `PASS: ${results.length} pages, including every original URL and all ${team.length} team profiles; local navigation; ${count} source price entries.`,
);
