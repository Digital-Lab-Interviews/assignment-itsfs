import { getPage } from "../playwright-utils";

export class AppPage {
  navigateTo() {
    return getPage().goto('/');
  }

  getHeaderText() {
    return getPage().locator('app-root h1').innerText();
  }
}
