import { test, expect } from "@playwright/test";

test.use({
  viewport: { width: 1440, height: 900 },
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

const preparePageForScreenshots = async (page) => {
  await page.evaluate(async () => {
    const step = Math.max(400, Math.floor(window.innerHeight * 0.7));
    for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((resolve) => setTimeout(resolve, 120));
    }
    window.scrollTo(0, document.documentElement.scrollHeight);
  });

  await page.waitForTimeout(1200);
  await page.addStyleTag({
    content: `
      .vf-navbar,
      .skip-link,
      main > .fixed.inset-0.pointer-events-none {
        display: none !important;
      }

      main > div > section:not(#hero) {
        content-visibility: visible !important;
        contain-intrinsic-size: none !important;
      }

      .ability-card,
      .timeline-card,
      .expText,
      .tech-card,
      .project-card {
        opacity: 1 !important;
        transform: none !important;
        visibility: visible !important;
      }

      *,
      *::before,
      *::after {
        animation-delay: 0s !important;
        animation-duration: 0s !important;
        transition-delay: 0s !important;
        transition-duration: 0s !important;
      }
    `,
  });
};

const captureSection = async (page, selector, path) => {
  const section = page.locator(selector);
  await section.scrollIntoViewIfNeeded();
  await section.locator("img").evaluateAll((images) =>
    Promise.all(
      images.map((image) =>
        image.complete
          ? Promise.resolve()
          : new Promise((resolve) => {
              image.addEventListener("load", resolve, { once: true });
              image.addEventListener("error", resolve, { once: true });
            })
      )
    )
  );
  await page.waitForTimeout(250);
  await section.screenshot({ animations: "disabled", path });
};

test("desktop release audit and light-mode README captures", async ({ page }) => {
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => message.type() === "error" && errors.push(message.text()));

  await page.addInitScript(() => localStorage.setItem("vertexflow-theme", "light"));
  await page.goto("/", { waitUntil: "networkidle" });
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  await expect(page.locator(".logo-marquee")).toHaveCSS("animation-name", "logo-marquee");
  await preparePageForScreenshots(page);

  for (const [name, selector] of sections) {
    await captureSection(page, selector, `test-results/readme/${name}-light.png`);
  }

  await captureSection(page, "#about", "test-results/readme/about.png");

  expect(await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)).toBeLessThanOrEqual(1);
  expect(errors).toEqual([]);
});

test("mobile release audit", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/", { waitUntil: "networkidle" });
  await page.locator(".vf-menu-toggle").click();
  await expect(page.locator(".vf-nav-menu")).toHaveClass(/is-open/);
  await page.locator('.vf-nav-menu a[href="#projects"]').click();
  await expect(page.locator(".vf-nav-menu")).not.toHaveClass(/is-open/);
  expect(await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)).toBeLessThanOrEqual(1);
});
