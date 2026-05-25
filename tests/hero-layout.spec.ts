import { expect, test } from "@playwright/test";

test.describe("hero layout", () => {
  test("keeps the English role text out of the profile image", async ({ page }) => {
    const desktopWidths = [900, 960, 1024, 1100, 1180, 1280];

    for (const width of desktopWidths) {
      await page.setViewportSize({ width, height: 800 });
      await page.goto("/");
      await page.getByRole("button", { name: "English" }).click();

      const role = page.locator(".hero-role");
      const visual = page.locator(".profile-visual");

      await expect(role).toContainText("Developer solving business problems with AI and web technologies");
      await page.screenshot({ path: `test-results/english-hero-${width}.png`, fullPage: true });

      const roleBox = await role.boundingBox();
      const visualBox = await visual.boundingBox();
      const viewport = page.viewportSize();

      expect(roleBox).not.toBeNull();
      expect(visualBox).not.toBeNull();
      expect(viewport).not.toBeNull();

      if (!roleBox || !visualBox || !viewport) return;

      expect(roleBox.x + roleBox.width).toBeLessThanOrEqual(visualBox.x - 12);
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
