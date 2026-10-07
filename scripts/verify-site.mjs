import { chromium } from "@playwright/test";
import assert from "node:assert/strict";
import { mkdir } from "node:fs/promises";

const base = process.env.SITE_URL || "http://127.0.0.1:3000";
await mkdir("test-results", { recursive: true });
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
const errors = [];
page.on("pageerror", (error) => errors.push(error.message));
async function loadPhotos() {
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
}
try {
  await page.goto(base, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  assert.match(await page.title(), /Ozonium/);
  assert.equal(await page.locator("h1").count(), 1);
  await loadPhotos();
  await page.screenshot({
    path: "test-results/home-desktop.png",
    fullPage: true,
  });
  await page.screenshot({ path: "test-results/home-desktop-viewport.png" });
  await page
    .getByRole("button", { name: "Amețeli și probleme de echilibru" })
    .click();
  assert.match(
    await page.locator(".finder-result h4").innerText(),
    /Neurologie/,
  );
  assert.equal(
    await page.locator(".finder-result a").getAttribute("href"),
    "/servicii/laboratorul-de-echilibru",
  );
  await page.locator(".faq-list summary").first().click();
  assert.equal(
    await page.locator(".faq-list details").first().getAttribute("open"),
    "",
  );

  const paths = await page
    .locator(".service-card, .more-services a")
    .evaluateAll((links) => links.map((link) => link.getAttribute("href")));
  for (const path of paths) {
    const response = await page.goto(`${base}${path}`, {
      waitUntil: "networkidle",
    });
    assert.equal(response.status(), 200, path);
    assert.equal(await page.locator("h1").count(), 1, path);
    assert.equal(
      await page
        .locator("img")
        .evaluateAll((images) =>
          images.every((image) => image.complete && image.naturalWidth > 0),
        ),
      true,
      `Images: ${path}`,
    );
  }

  await page.goto(
    `${base}/programare?serviciu=neurologie&medic=${encodeURIComponent("Dr. Liliana Cucoș")}`,
  );
  assert.equal(
    await page.locator("select[name=service]").inputValue(),
    "neurologie",
  );
  assert.match(
    await page.locator(".booking-form").innerText(),
    /Dr\. Liliana Cucoș/,
  );
  await page.evaluate(() => {
    window.open = (url) => {
      window.__appointmentUrl = String(url);
      return null;
    };
  });
  await page.getByRole("button", { name: "Continuă pe WhatsApp" }).click();
  assert.equal(
    await page.evaluate(() => window.__appointmentUrl),
    undefined,
    "Empty form must not proceed",
  );
  await page.locator("input[name=name]").fill("Pacient Test");
  await page.locator("input[name=phone]").fill("not-a-phone");
  await page.locator("input[type=checkbox]").check();
  await page.getByRole("button", { name: "Continuă pe WhatsApp" }).click();
  assert.equal(
    await page.evaluate(() => window.__appointmentUrl),
    undefined,
    "Invalid phone must not proceed",
  );
  await page.locator("input[name=phone]").fill("0735123456");
  await page.locator("input[type=checkbox]").check();
  await page.getByRole("button", { name: "Continuă pe WhatsApp" }).click();
  const url = await page.evaluate(() => window.__appointmentUrl);
  assert.match(url, /^https:\/\/wa\.me\/40735862702\?text=/);
  const text = new URL(url).searchParams.get("text");
  assert.match(text, /Pacient Test/);
  assert.match(text, /Neurologie/);
  assert.match(text, /Dr\. Liliana Cucoș/);
  assert.equal(await page.getByRole("status").count(), 1);
  await page.evaluate(() => {
    document.activeElement?.blur();
    window.scrollTo({ top: 0, behavior: "instant" });
  });
  await page.screenshot({
    path: "test-results/appointment-desktop.png",
    fullPage: true,
  });

  for (const width of [360, 390, 768, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    for (const path of [
      "/",
      "/programare",
      "/servicii/laboratorul-de-echilibru",
    ]) {
      await page.goto(`${base}${path}`, { waitUntil: "networkidle" });
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth > window.innerWidth,
      );
      assert.equal(overflow, false, `${path} has overflow at ${width}px`);
    }
  }
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(base, { waitUntil: "networkidle" });
  await page.getByRole("button", { name: "Deschide meniul" }).click();
  assert.equal(
    await page
      .getByRole("button", { name: "Închide meniul" })
      .getAttribute("aria-expanded"),
    "true",
  );
  await page
    .locator("#mobile-nav")
    .getByRole("link", { name: "Servicii", exact: true })
    .click();
  assert.equal(await page.locator("#mobile-nav").count(), 0);
  await page.goto(base, { waitUntil: "networkidle" });
  await loadPhotos();
  await page.screenshot({
    path: "test-results/home-mobile.png",
    fullPage: true,
  });
  await page.screenshot({ path: "test-results/home-mobile-viewport.png" });
  const missing = await page.goto(`${base}/servicii/non-existent`);
  assert.equal(missing.status(), 404);
  assert.deepEqual(errors, [], "No runtime errors");
  console.log(
    "PASS: service pages, images, finder, FAQ, appointment validation and WhatsApp handoff, mobile menu, 404, and overflow checks at four viewport widths.",
  );
} finally {
  await browser.close();
}
