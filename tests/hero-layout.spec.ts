import { expect, test } from "@playwright/test";

test.describe("hero layout", () => {
  test("keeps the Korean role on one intended line", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto("/");

    const role = page.locator(".hero-role");
    const roleLines = page.locator(".hero-role span");

    await expect(role).toContainText("AI와 웹 기술로 비즈니스 문제를 해결하는 개발자");
    await expect(roleLines).toHaveCount(1);
  });

  test("keeps the Korean summary readable without crossing into the profile image", async ({ page }) => {
    const desktopWidths = [900, 960, 1024, 1100, 1180, 1280];

    for (const width of desktopWidths) {
      await page.setViewportSize({ width, height: 800 });
      await page.goto("/");

      const summary = page.locator(".hero-summary");
      const visual = page.locator(".profile-visual");

      await expect(summary).toContainText("비즈니스 문제를 분석하고");
      await page.screenshot({ path: `test-results/korean-summary-${width}.png`, fullPage: true });

      const summaryBox = await summary.boundingBox();
      const visualBox = await visual.boundingBox();
      const summaryLines = await summary.evaluate((element) => {
        const range = document.createRange();
        range.selectNodeContents(element);

        return Array.from(range.getClientRects()).map((rect) => ({
          left: rect.left,
          right: rect.right,
          width: rect.width,
        }));
      });

      expect(summaryBox).not.toBeNull();
      expect(visualBox).not.toBeNull();

      if (!summaryBox || !visualBox) return;

      expect(summaryBox.x + summaryBox.width).toBeLessThanOrEqual(visualBox.x - 12);

      for (const line of summaryLines) {
        expect(line.width).toBeGreaterThan(80);
        expect(line.right).toBeLessThanOrEqual(visualBox.x - 12);
      }
    }
  });

  test("keeps the English role text out of the profile image", async ({ page }) => {
    const desktopWidths = [900, 960, 1024, 1100, 1180, 1280];

    for (const width of desktopWidths) {
      await page.setViewportSize({ width, height: 800 });
      await page.goto("/");
      await page.getByRole("button", { name: "English" }).click();

      const role = page.locator(".hero-role");
      const visual = page.locator(".profile-visual");
      const roleLines = page.locator(".hero-role span");

      await expect(role).toContainText("Developer solving business problems with AI and web technologies");
      await expect(roleLines).toHaveCount(2);
      await page.screenshot({ path: `test-results/english-hero-${width}.png`, fullPage: true });

      const visualBox = await visual.boundingBox();
      const viewport = page.viewportSize();
      const lineBoxes = await roleLines.evaluateAll((elements) =>
        elements.map((element) => {
          const box = element.getBoundingClientRect();

          return {
            right: box.right,
            width: box.width,
          };
        }),
      );

      expect(visualBox).not.toBeNull();
      expect(viewport).not.toBeNull();

      if (!visualBox || !viewport) return;

      for (const lineBox of lineBoxes) {
        expect(lineBox.width).toBeLessThanOrEqual(viewport.width);
        expect(lineBox.right).toBeLessThanOrEqual(visualBox.x - 12);
      }
    }
  });

  test("does not create horizontal overflow on mobile", async ({ page }) => {
    await page.setViewportSize({ width: 393, height: 852 });
    await page.goto("/");
    await page.getByRole("button", { name: "English" }).click();
    await page.screenshot({ path: "test-results/english-mobile.png", fullPage: true });

    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);

    expect(overflow).toBeLessThanOrEqual(1);
  });
});
