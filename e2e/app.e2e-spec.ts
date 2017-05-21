import { TestLinksBootstrapPage } from './app.po';

describe('test-links-bootstrap App', () => {
  let page: TestLinksBootstrapPage;

  beforeEach(() => {
    page = new TestLinksBootstrapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
