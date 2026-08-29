import { test, expect } from "file:///D:/npm-cache/_npx/420ff84f11983ee5/node_modules/@playwright/test/index.mjs";

test.use({
  viewport: { width: 1440, height: 900 },
  launchOptions: { executablePath: "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe" },
});

const sections = [
  ["hero", "#hero"],
  ["work", "#work"],
  ["experience", "#experience"],
  ["skills", "#skills"],
  ["certifications", "#certifications"],
  ["projects", "#projects"],
  ["contact", "#contact"],
];

test("desktop release audit and README captures", async ({ page }) => {
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => message.type() === "error" && errors.push(message.text()));

  for (const theme of ["dark", "light"]) {
    await page.addInitScript((value) => localStorage.setItem("vertexflow-theme", value), theme);
    await page.goto("http://127.0.0.1:4173", { waitUntil: "networkidle" });
    await expect(page.locator("html")).toHaveAttribute("data-theme", theme);
    await expect(page.locator(".logo-marquee")).toHaveCSS("animation-name", "logo-marquee");

    for (const [name, selector] of sections) {
      const section = page.locator(selector);
      await section.scrollIntoViewIfNeeded();
      await page.waitForTimeout(300);
      await section.screenshot({ path: `public/screenshots/${name}-${theme}.png` });
    }

    if (theme === "dark") {
      const about = page.locator("#about");
      await about.scrollIntoViewIfNeeded();
      await page.waitForTimeout(300);
      await about.screenshot({ path: "public/screenshots/about.png" });
    }
  }

  expect(await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)).toBeLessThanOrEqual(1);
  expect(errors).toEqual([]);
});

test("mobile release audit", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("http://127.0.0.1:4173", { waitUntil: "networkidle" });
  await page.locator(".vf-menu-toggle").click();
  await expect(page.locator(".vf-nav-menu")).toHaveClass(/is-open/);
  await page.locator('.vf-nav-menu a[href="#projects"]').click();
  await expect(page.locator(".vf-nav-menu")).not.toHaveClass(/is-open/);
  expect(await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)).toBeLessThanOrEqual(1);
});
