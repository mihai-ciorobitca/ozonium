import { chromium } from "@playwright/test";
import assert from "node:assert/strict";
import { mkdir, readFile } from "node:fs/promises";
const base = process.env.SITE_URL || "http://127.0.0.1:3000";
await mkdir("test-results", { recursive: true });
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
const errors = [];
page.on("pageerror", (error) => errors.push(error.message));
const expectedTeam = JSON.parse(
  (await readFile("lib/team.json", "utf8")).trim(),
);
async function screenshot(name) {
  await page.locator("img").evaluateAll((images) =>
    images.forEach((image) => {
      image.loading = "eager";
    }),
  );
  await page.waitForFunction(() =>
    [...document.images].every(
      (image) => image.complete && image.naturalWidth > 0,
    ),
  );
  await page.evaluate(() => {
    document.activeElement?.blur();
    window.scrollTo({ top: 0, behavior: "instant" });
  });
  await page.screenshot({ path: `test-results/${name}.png`, fullPage: true });
}
try {
  await page.goto(`${base}/echipa`, { waitUntil: "networkidle" });
  assert.equal(await page.locator(".doctor-card").count(), 23);
  await page.getByRole("button", { name: "Neurologie", exact: true }).click();
  assert.equal(
    await page.locator(".doctor-card").count(),
    expectedTeam.filter((member) => member.category === "Neurologie").length,
  );
  await page.getByRole("button", { name: "Toată echipa" }).click();
  await page
    .getByRole("textbox", { name: "Caută în echipă" })
    .fill("Gabriela Florea");
  assert.equal(await page.locator(".doctor-card").count(), 1);
  await page
    .getByRole("textbox", { name: "Caută în echipă" })
    .fill("no-such-person");
  assert.equal(await page.locator(".empty-state").count(), 1);
  await page.getByRole("button", { name: "Resetează filtrele" }).click();
  assert.equal(await page.locator(".doctor-card").count(), 23);
  await screenshot("team-desktop");
  await page.goto(`${base}/despre-noi/echipa/gabriela-florea`, {
    waitUntil: "networkidle",
  });
  await page
    .getByRole("link", { name: "Solicită o programare", exact: true })
    .first()
    .click();
  await page.waitForURL(/programare/);
  assert.equal(
    await page.locator("select[name=service]").inputValue(),
    "psihologie-clinica",
  );
  assert.match(
    await page.locator(".booking-form").innerText(),
    /Gabriela Florea/,
  );
  await page.goto(`${base}/preturi`, { waitUntil: "networkidle" });
  assert.equal(await page.locator(".price-row").count(), 15);
  await page.getByRole("button", { name: "Ozonoterapie", exact: true }).click();
  assert.match(
    await page.locator(".price-directory").innerText(),
    /Autohemoterapie majoră/,
  );
  await page.getByRole("textbox", { name: "Caută un tarif" }).fill("Rigenera");
  assert.equal(await page.locator(".price-row").count(), 1);
  assert.match(await page.locator(".price-row").innerText(), /preț la cerere/);
  await page
    .getByRole("textbox", { name: "Caută un tarif" })
    .fill("no-such-price");
  assert.equal(await page.locator(".empty-state").count(), 1);
  await page.getByRole("button", { name: "Șterge căutarea" }).click();
  await page.getByRole("button", { name: "Consultații", exact: true }).click();
  await screenshot("prices-desktop");
  await page.goto(`${base}/servicii/ozonoterapie/autohemoterapia-majora`, {
    waitUntil: "networkidle",
  });
  await screenshot("procedure-desktop");
  const samplePaths = [
    "/despre-noi",
    "/echipa",
    "/preturi",
    "/pentru-pacienti",
    "/blog",
    "/blog/ozonoterapia-si-reumatismul",
    "/contact",
    "/servicii",
    "/servicii/neurologie/consultatie-neurologie",
    "/despre-noi/echipa/dr-anca-florentina-danila",
    "/dezvoltarea-si-diversificarea-serviciilor-ozonlife",
  ];
  for (const width of [360, 768, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    for (const path of samplePaths) {
      await page.goto(`${base}${path}`, { waitUntil: "networkidle" });
      assert.equal(
        await page.evaluate(
          () => document.documentElement.scrollWidth > window.innerWidth,
        ),
        false,
        `${path}: overflow at ${width}`,
      );
    }
  }
  await page.setViewportSize({ width: 390, height: 844 });
  for (const [path, name] of [
    ["/preturi", "prices-mobile"],
    ["/echipa", "team-mobile"],
    ["/contact", "contact-mobile"],
  ]) {
    await page.goto(`${base}${path}`, { waitUntil: "networkidle" });
    await screenshot(name);
  }
  assert.deepEqual(errors, []);
  console.log(
    "PASS: team filters/search/empty state, all-team booking preferences, pricing categories/search/empty state, responsive checks on 11 pages at three widths, and clinic images.",
  );
} finally {
  await browser.close();
}
