// @ts-check
import { test, expect } from '@playwright/test';

const URL_DOMAIN_CATAAS = `https://cataas.com/`
const URL = "http://localhost:5173/"

test('app show random fac and images', async ({ page }) => {
  await page.goto(URL);

  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  const textContent = await text.textContent()
  const imgSrc = await image.getAttribute('src')
  
  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imgSrc?.startsWith(URL_DOMAIN_CATAAS)).toBeTruthy()
  
}); 
