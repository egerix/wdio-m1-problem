describe('Sample to reproduce problem', () => {

    function getCookiesArray() {
        const cookies = [];
        for (let i = 0; i < 60; i++) {
            cookies.push(
                {
                    expires: "2038-01-19T03:14:07.000Z",
                    httponly: true,
                    secure: true,
                    path: '/',
                    domain: '.youtube.com',
                    samesite: 'None',
                    name: 'session' + i,
                    value: '123qwweds1234123REQFASDVER28r0f9udjvijfh2breofjvbcovbhob4orjfbvjhvbh4'
                }
            )
        }
        return cookies;
    }

    // An error appears in this test
    // connect ECONNRESET 127.0.0.1:9515
    // Often repeated on the macbook with m1 processor
    it('failed cookies setup', async () => {
        await browser.url(`https://youtube.com`);
        await browser.setCookies(getCookiesArray())
    });

    //this test passes successfully
    it('success cookies setup', async () => {
        await browser.url(`https://youtube.com`);
        for (const cookie of getCookiesArray()) {
            await browser.setCookies(cookie);
        }
    });
});

