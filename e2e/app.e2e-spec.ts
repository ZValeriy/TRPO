import { TRPOAppPage } from './app.po';

describe('trpo-app App', function() {
  let page: TRPOAppPage;

  beforeEach(() => {
    page = new TRPOAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
