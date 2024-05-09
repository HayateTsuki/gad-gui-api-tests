import { LoginPage } from '../../src/pages/login.page';
import { WelcomePage } from '../../src/pages/welcome.page';
import { expect, test } from '@playwright/test';

test.describe('Verify login', () => {
  test('login with correct credentials @GAD-R02-01', async ({ page }) => {
    //Arrange
    const userEmail = '';
    const userPassword = '';
    const loginPage = new LoginPage(page);
    const welcomePage = new WelcomePage(page);

    //Act
    await loginPage.goto();
    await loginPage.login(userEmail, userPassword);

    //Assert
    const welcomePageTitle = await welcomePage.title();
    expect(welcomePageTitle).toContain('Welcome');
  });
});
