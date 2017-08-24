import { UserProfilAppPage } from './app.po';

describe('user-profil-app App', () => {
  let page: UserProfilAppPage;

  beforeEach(() => {
    page = new UserProfilAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
