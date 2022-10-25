import { test, expect } from '@playwright/test'

test('Homepage should list todos', async ({ page }) => {
	await page.goto('/')

	await expect(page).toHaveTitle('Remix Todos')

	const listitems = page.locator('role=listitem')
	const completeItem = await listitems.evaluateAll((list) =>
		list.find((item) => item.textContent === 'Complete item'),
	)
	const incompleteItem = await listitems.evaluateAll((list) =>
		list.find((item) => item.textContent === 'Complete item'),
	)

	await expect(completeItem).not.toBeUndefined()
	await expect(incompleteItem).not.toBeUndefined()
})
