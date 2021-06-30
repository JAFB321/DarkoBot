const fetch = require('node-fetch');
const { URLSearchParams } = require('url');

const DailyImage = async () => {
    const params = new URLSearchParams();
    const URL = 'https://api.nasa.gov/planetary/apod';
    params.append('api_key', process.env.NASA_API);

    const res = await fetch(`${URL}?${params.toString()}`);
    const data = await res.json();



    const { title, url, hdurl, explanation, date } = data;

    return {
        title,
        url,
        hdurl,
        explanation,
        date
    };
}

const RandomDayImage = async () => {
    
    // Fecha Random
    const start = new Date(1995, 06, 16).valueOf();
    const end = Date.now();
    const rdDate = new Date(start + Math.random() * (end - start));

    const params = new URLSearchParams();
    const URL = 'https://api.nasa.gov/planetary/apod';
    params.append('api_key', process.env.NASA_API);
    params.append('date', `${rdDate.getFullYear()}-${rdDate.getMonth()}-${rdDate.getDay()}`);

    const res = await fetch(`${URL}?${params.toString()}`);
    const data = await res.json();

    const { title, url, hdurl, explanation, date } = data;

    return {
        title,
        url,
        hdurl,
        explanation,
        date
    };
}

module.exports = {
    DailyImage,
    RandomDayImage
}