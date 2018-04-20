import { NpLdapImporterPage } from './app.po';

describe('np-ldap-importer App', () => {
  let page: NpLdapImporterPage;

  beforeEach(() => {
    page = new NpLdapImporterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
