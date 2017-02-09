import { MyFirstAngularProjectPage } from './app.po';

describe('my-first-angular-project App', function() {
  let page: MyFirstAngularProjectPage;

  beforeEach(() => {
    page = new MyFirstAngularProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
