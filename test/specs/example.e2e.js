describe('Test', () => {
    it('simple test', async () => {
        await browser.url(`https://hd.kinopoisk.ru`);
        const btnSelector = '[class*=ProfileMenu__title]';
        await expect($(btnSelector)).toBeDisplayedInViewport();
        await browser.pause(2000);
        await expect($(btnSelector)).toBeDisplayedInViewport();

    });
});

