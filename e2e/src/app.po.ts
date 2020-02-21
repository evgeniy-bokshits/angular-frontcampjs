import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.id('maintittle')).getText() as Promise<string>;
  }

  getSourceNameText() {
    return element(by.id('sourceName')).getText() as Promise<string>;
  }
}
