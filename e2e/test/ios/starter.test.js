describe('Example of ios test', () => {
    beforeAll(async () => {
        await device.launchApp();
    });

    //example of working with webview, TODO apply page object approach to this test
    it('should login to ios fastback', async () => {
        await element(by.type('RCTSinglelineTextInputView')).typeText('user@gmail.com');
        await element(by.text('Login')).tap();
        await element(by.text('Nike US')).tap();
        await web.element(by.web.xpath("//*[text()='United States']")).tap();
        await expect(web.element(by.web.xpath("//*[text()='Accept All']"))).toExist();
    });
});
