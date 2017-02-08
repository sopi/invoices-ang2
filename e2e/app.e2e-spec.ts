import { InvoicesAng2Page } from './app.po';

describe('invoices-ang2 App', function() {
  let page: InvoicesAng2Page;

  beforeEach(() => {
    page = new InvoicesAng2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
