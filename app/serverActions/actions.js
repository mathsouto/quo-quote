'use server';

const BASE_URL = 'https://api.quotable.io';

export async function getQuotesByQuery(query) {
    const numQueries = 50;
    const url = `${BASE_URL}/search/quotes?query=${query}&limit=${numQueries}`;
    const result = await fetch(url);
    const res = await result.json();
    return res.results;
}

export async function getRandomQuotes(numberOfQuotes) {
    const url = `${BASE_URL}/quotes/random?limit=${numberOfQuotes}`;
    const result = await fetch(url);
    const res = await result.json();
    return res;
}