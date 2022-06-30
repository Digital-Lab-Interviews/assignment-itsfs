import { AppPage } from './app.po';
import { expect } from '@playwright/test';
import { setPage, test } from '../playwright-utils';

test.describe('Petstore Client App', () => {
  let petstorePage: AppPage;

  test.beforeEach(async ({ page }) => {
    setPage(page);
    petstorePage = new AppPage();
  });

  test('should display welcome message', async ({ page }) => {
    setPage(page);
    await petstorePage.navigateTo();
    expect(await petstorePage.getHeaderText()).toEqual('Welcome to RBC Pet Store!');
  });
});
