import { MotogpAngular2Page } from './app.po';

describe('motogp-angular2 App', () => {
  let page: MotogpAngular2Page;

  beforeEach(() => {
    page = new MotogpAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
