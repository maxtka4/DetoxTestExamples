import {i_choose_nike_shop, i_should_see_home_screen} from "../../step/homeSteps";
import {i_login_as_user} from "../../step/loginSteps";

describe('Example of android test', () => {
    beforeAll(async () => {
        await device.launchApp();
    });
    //example of page object approach
    it('should login to fast back', async () => {
        await i_login_as_user('user@gmail.com')
        await i_should_see_home_screen()
    });
    //example of working with webview, TODO apply page object approach to this test
    it('should select shop', async () => {
        await i_choose_nike_shop();
        await web.element(by.web.xpath("//*[text()='United States']")).tap();
        await web.element(by.web.id('MobileMenuButton')).tap();
        await web.element(by.web.xpath("//button[@classification='men']")).tap();
        await web.element(by.web.xpath("//button[@data-path='men:shoes']")).tap();
        await expect(web.element(by.web.xpath("//a[@data-path='men>shoes:basketball']"))).toExist();
    });

});
