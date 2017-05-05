import { SirzachPage } from './app.po';

describe('sirzach App', () => {
  let page: SirzachPage;

  beforeEach(() => {
    page = new SirzachPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
