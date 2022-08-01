describe('Test', () => {
    it('simple test with node ' + process.version, async () => {
        browser.url(`https://hd.kinopoisk.ru`);
        const btnSelector = '[class*=ProfileMenu__title]';
        expect($(btnSelector)).toBeDisplayedInViewport();
        expect($(btnSelector)).toBeDisplayedInViewport();
        expect($(btnSelector)).toBeDisplayedInViewport();
        await browser.pause(2000);
        await expect($(btnSelector)).toBeDisplayedInViewport();
    });
});

