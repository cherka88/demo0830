import { Demo0830Page } from './app.po';

describe('demo0830 App', function() {
  let page: Demo0830Page;

  beforeEach(() => {
    page = new Demo0830Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
