import { Ng2MdlPage } from './app.po';

describe('ng2-mdl App', function() {
  let page: Ng2MdlPage;

  beforeEach(() => {
    page = new Ng2MdlPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
