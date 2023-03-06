escribe('button', () => {
    it('primary', async function () {
        await this.browser.selectStory('example-button--primary', {
            ch: 'New button label',
        }); // second parameter with `args` works only for storybook@6 and higher

        await this.browser.assertView('plain', 'body');
    });
});
