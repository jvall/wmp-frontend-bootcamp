import { WmpFavoriteBooksPage } from './app.po';

describe('wmp-favorite-books App', () => {
  let page: WmpFavoriteBooksPage;

  beforeEach(() => {
    page = new WmpFavoriteBooksPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
