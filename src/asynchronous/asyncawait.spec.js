// testing async/await
async function fetchData() {
    return 'peanut butter';
}
async function fetchDataFail() {
    throw 'error';
}
async function fetchThrow() {
    throw Error('error')
}

// testing getting data
test('the data is peanut butter', async () => {
    const data = await fetchData();
    expect(data).toBe('peanut butter');
});

// testing fail
test('the fetch fails with an error', async () => {
    expect.assertions(1);
    try {
        await fetchDataFail();
    } catch (e) {
        expect(e).toMatch('error');
    }
});

// testing resolve
test('the data is peanut butter', async () => {
    await expect(fetchData()).resolves.toBe('peanut butter');
});

// testing reject
test('the fetch fails with an error', async () => {
    await expect(fetchThrow()).rejects.toThrow('error');
});
