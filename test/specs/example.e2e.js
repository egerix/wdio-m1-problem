describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await browser.url(`https://hd.kinopoisk.ru`);
        const btnSelector = '[class*=ProfileMenu__title]';
        await expect($(btnSelector)).toBeDisplayedInViewport();
        await browser.pause(2000);
        await expect($(btnSelector)).toBeDisplayedInViewport();

    });
});

