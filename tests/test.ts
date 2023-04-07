import { expect, test } from "@playwright/test";

test("index page has expected h1", async ({ page }) => {
	await page.goto("/");
	const h1 =
		"Welcome to the LJ Dev -- SvelteKit Typescript Tailwind Pug Starter.";
	await expect(page.locator("h1")).toHaveText(h1);
});
